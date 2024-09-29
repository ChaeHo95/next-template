// 커스텀 에러 클래스 정의: `code`와 `message`를 함께 전달하는 에러 처리
import crypto from 'crypto';
import { CustomError } from '@devUtils/common/error';
import { ResponseStatusKR } from '@devConstants/common/httpStatus';

class ApiService {
    baseUrl: string;
    private readonly lastCallMap: { [key: string]: number }; // 각 요청별 마지막 호출 시간을 저장하는 객체

    constructor() {
        // 환경 변수에서 API의 기본 URL을 설정하고, 없다면 빈 문자열로 설정
        this.baseUrl = process.env.API_BASE_URL ?? '';
        this.lastCallMap = {}; // 각 요청별 마지막 호출 시간을 기록하여 스로틀링을 관리하는 객체
    }

    // 쿼리 스트링을 생성하는 메서드
    // params: 쿼리 스트링으로 변환할 객체
    // parentKey: 중첩된 객체의 키를 처리하기 위한 부모 키 (디폴트는 빈 문자열)
    private buildQueryString(
        params: Record<string, unknown>,
        parentKey: string = ''
    ): string {
        return Object.keys(params)
            .map((key) => {
                const value = params[key];
                const fullKey: string = parentKey ? `${parentKey}.${key}` : key; // 중첩된 키 처리

                if (Array.isArray(value)) {
                    // 값이 배열일 경우, 각 값을 쿼리 스트링으로 변환
                    return value.map((item) => `${fullKey}=${item}`).join('&');
                } else if (value && typeof value === 'object') {
                    // 값이 객체일 경우 재귀적으로 처리
                    return this.buildQueryString(
                        value as Record<string, unknown>,
                        fullKey
                    );
                } else {
                    // 기본적으로 값과 키를 쿼리 스트링 형식으로 변환
                    return `${fullKey}=${value}`;
                }
            })
            .join('&'); // 모든 결과를 &로 연결하여 최종 쿼리 스트링 반환
    }

    // 요청 키를 생성하는 메서드
    // 요청의 URI, 쿼리 파라미터, body를 결합하여 고유한 요청 키를 생성
    private createRequestKey(
        uri: string,
        params?: Record<string, unknown>,
        body?: unknown
    ): string {
        const queryString = params ? this.buildQueryString(params) : ''; // 쿼리 스트링 변환
        const bodyString = body ? JSON.stringify(body) : ''; // body 데이터를 JSON 문자열로 변환
        return crypto
            .createHash('sha256')
            .update(`${uri}?${queryString}&body=${bodyString}`)
            .digest('hex'); // URI, 쿼리 스트링, body를 조합하여 고유한 요청 키 생성
    }

    // 스로틀링을 적용하여 요청을 처리하는 메서드
    // wait: 스로틀링 시간 (디폴트는 0.5초)
    private async throttleRequest<T = unknown>({
        uri,
        options,
        wait = 500, // 0.5초 동안 스로틀링 적용
    }: {
        uri: string;
        options: RequestInitTypes;
        wait?: number;
    }): Promise<{
        status: number;
        msg: string;
        data?: T;
    }> {
        const requestKey = this.createRequestKey(
            uri,
            options.params,
            options.body
        ); // 요청에 대한 고유한 키 생성
        const now = Date.now(); // 현재 시간을 밀리초 단위로 가져옴

        // 마지막 호출 시간 확인 후, wait 시간 안에 동일한 요청이 발생하면 스로틀링 처리
        if (
            this.lastCallMap[requestKey] &&
            now - this.lastCallMap[requestKey] < wait
        ) {
            // 스로틀링 발생 시 `THROTTLED-ERROR` 에러를 발생시킴
            throw new CustomError(
                'THROTTLED-ERROR',
                `The request to "${uri}" is being throttled due to too many requests in a short period. Please wait before trying again.`
            );
        }

        // 마지막 호출 시간을 현재 시간으로 업데이트
        this.lastCallMap[requestKey] = now;

        // 실제 요청 처리 메서드 호출
        return this.request<T>({ uri, options });
    }

    // 실제 요청을 처리하는 메서드 (GET, POST, PUT, DELETE 모두에서 호출됨)
    private async request<T = unknown>({
        uri,
        options,
    }: {
        uri: string;
        options: RequestInitTypes;
    }): Promise<{
        status: number;
        msg: string;
        data?: T;
    }> {
        try {
            let url = `${this.baseUrl}${uri}`; // baseUrl과 uri 결합

            // options에 params가 있으면 쿼리 스트링으로 변환 후 URL에 추가
            if (options?.params) {
                url += `?${this.buildQueryString(options.params)}`;
                delete options.params; // fetch에 params가 필요 없으므로 삭제
            }

            const response = await fetch(url, options); // fetch API로 요청 전송
            const code = response.status as keyof typeof ResponseStatusKR; // 응답 상태 코드 추출

            if (!response.ok) {
                // 응답이 성공하지 않았을 경우, 에러 발생 (에러 코드와 메시지를 함께 배출)
                throw new CustomError(code, ResponseStatusKR[code]);
            }

            const contentType = response.headers.get('Content-Type'); // 응답의 콘텐츠 타입 확인
            let data: T;

            // 콘텐츠 타입에 따라 응답 데이터를 처리
            if (contentType?.includes('application/json')) {
                data = (await response.json()) as T; // JSON 응답 처리
            } else if (contentType?.includes('text/')) {
                data = (await response.text()) as unknown as T; // 텍스트 응답 처리
            } else if (contentType?.includes('multipart/form-data')) {
                data = (await response.formData()) as unknown as T; // 폼 데이터 응답 처리
            } else if (contentType?.includes('application/octet-stream')) {
                data = (await response.arrayBuffer()) as unknown as T; // 바이너리 데이터 응답 처리
            } else if (
                contentType?.includes('image/') ||
                contentType?.includes('application/pdf')
            ) {
                data = (await response.blob()) as unknown as T; // 이미지나 PDF 등의 Blob 데이터 응답 처리
            } else {
                data = (await response.text()) as unknown as T; // 기타 응답 처리
            }

            return {
                status: code, // 응답 상태 코드
                msg: ResponseStatusKR[code], // 상태 코드에 따른 메시지 반환
                data, // 응답 데이터
            };
        } catch (e) {
            throw new CustomError('REQUEST-ERROR', (e as Error).message);
        }
    }

    // GET 메서드: 쿼리 스트링으로 전달되는 데이터를 처리하여 스로틀링 적용 후 GET 요청 실행
    async get<T = unknown>(uri: string, options?: OptionsParameterTypes) {
        return this.throttleRequest<T>({
            uri,
            options: { ...options, method: 'GET' },
        });
    }

    // POST 메서드: body 데이터를 처리하여 스로틀링 적용 후 POST 요청 실행
    async post<T = unknown>(
        uri: string,
        body?: BodyParameterTypes,
        options?: OptionsParameterTypes
    ) {
        return this.throttleRequest<T>({
            uri,
            options: {
                ...options,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // 기본적으로 JSON 형태로 POST 요청
                    ...(options?.headers || {}),
                },
                body: body ? JSON.stringify(body) : undefined, // body 데이터를 JSON 형식으로 변환
            },
        });
    }

    // PUT 메서드: body 데이터를 처리하여 스로틀링 적용 후 PUT 요청 실행
    async put<T = unknown>(
        uri: string,
        body?: BodyParameterTypes,
        options?: OptionsParameterTypes
    ) {
        return this.throttleRequest<T>({
            uri,
            options: {
                ...options,
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json', // 기본적으로 JSON 형태로 PUT 요청
                    ...(options?.headers || {}),
                },
                body: body ? JSON.stringify(body) : undefined, // body 데이터를 JSON 형식으로 변환
            },
        });
    }

    // DELETE 메서드: 스로틀링 적용 후 DELETE 요청 실행
    async delete<T = unknown>(uri: string, options?: OptionsParameterTypes) {
        return this.throttleRequest<T>({
            uri,
            options: { ...options, method: 'DELETE' },
        });
    }
}

// RequestInitTypes: RequestInit 타입을 기반으로 쿼리 파라미터와 body 데이터를 추가한 타입 정의
type RequestInitTypes = {
    params?: Record<string, unknown>; // 쿼리 파라미터
    body?: unknown; // body 데이터
} & RequestInit; // 기본 RequestInit 타입을 포함

// OptionsParameterTypes: GET, DELETE 등의 요청에 사용될 수 있는 쿼리 파라미터 타입 정의
type OptionsParameterTypes = {
    params?: Record<string, unknown>; // 쿼리 스트링으로 변환될 수 있는 파라미터
} & Omit<RequestInit, 'method'>; // method 속성을 제외한 기본 RequestInit 타입

// BodyParameterTypes: 직렬화 가능한 body 타입 정의
type BodyTypes = string | number | boolean | Record<string, unknown>;
type BodyParameterTypes = BodyTypes | BodyTypes[] | null; // 원시 값 또는 객체, 배열, null 허용

const api = new ApiService();
export default api; // ApiService의 인스턴스를 기본으로 내보냄
