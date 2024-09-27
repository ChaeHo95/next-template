import { ResponseStatusKR } from '@constants/httpStatus';

class ApiService {
    baseUrl: string;

    constructor() {
        this.baseUrl =
            process.env.NEXT_PUBLIC_API_BASE_URL ?? window.document.URL;
    }

    // 쿼리 스트링을 생성하는 메서드
    private buildQueryString(
        params: Record<string, unknown>,
        parentKey: string = ''
    ): string {
        return Object.keys(params)
            .map((key) => {
                const value = params[key];
                const fullKey: string = parentKey ? `${parentKey}.${key}` : key;

                if (Array.isArray(value)) {
                    // 배열 처리
                    return value;
                    // .map((item) => `${fullKey}=${item}`)
                    // .join('&');
                } else if (value && typeof value === 'object') {
                    // 객체일 경우 재귀 호출을 통해 중첩된 객체 처리
                    return this.buildQueryString(
                        value as Record<string, unknown>,
                        fullKey
                    );
                } else {
                    // 기본값 처리
                    return `${fullKey}=${value}`;
                }
            })
            .join('&');
    }

    // 기본 요청 메서드
    async request<T = unknown>({
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
        let url = uri.match(/^(https?|ftp|sftp|ws|wss|data|file):\/\//)
            ? uri
            : `${this.baseUrl}${uri}`;

        if (options?.params) {
            url += `?${this.buildQueryString(options.params)}`;
            delete options.params;
        }

        const response = await fetch(url, options);

        const code = response.status as keyof typeof ResponseStatusKR;

        if (!response.ok) {
            throw new Error(`${response.status}: ${ResponseStatusKR[code]}`);
        }

        const contentType = response.headers.get('Content-Type');

        let data: T;

        // 각 content-type에 맞게 데이터 처리
        if (contentType?.includes('application/json')) {
            data = (await response.json()) as T;
        } else if (contentType?.includes('text/')) {
            data = (await response.text()) as unknown as T;
        } else if (contentType?.includes('multipart/form-data')) {
            data = (await response.formData()) as unknown as T;
        } else if (contentType?.includes('application/octet-stream')) {
            data = (await response.arrayBuffer()) as unknown as T;
        } else if (
            contentType?.includes('image/') ||
            contentType?.includes('application/pdf')
        ) {
            data = (await response.blob()) as unknown as T;
        } else {
            data = (await response.text()) as unknown as T;
        }

        return {
            status: code,
            msg: ResponseStatusKR[code],
            data,
        };
    }

    // GET 메서드
    async get<T = unknown>(uri: string, options?: ApiParameterTypes) {
        return this.request<T>({
            uri,
            options: { ...options, method: 'GET' },
        });
    }

    // POST 메서드
    async post<T = unknown>(
        uri: string,
        body?: unknown,
        options?: ApiParameterTypes
    ) {
        return this.request<T>({
            uri,
            options: {
                ...options,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...(options?.headers || {}),
                },
                body: body ? JSON.stringify(body) : undefined,
            },
        });
    }

    // PUT 메서드
    async put<T = unknown>(
        uri: string,
        body?: unknown,
        options?: ApiParameterTypes
    ) {
        return this.request<T>({
            uri,
            options: {
                ...options,
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    ...(options?.headers || {}),
                },
                body: body ? JSON.stringify(body) : undefined,
            },
        });
    }

    // DELETE 메서드
    async delete<T = unknown>(uri: string, options?: ApiParameterTypes) {
        return this.request<T>({
            uri,
            options: { ...options, method: 'DELETE' },
        });
    }
}

export type ApiParameterTypes = {
    params?: Record<string, unknown>;
} & Omit<RequestInit, 'method'>;

export type RequestInitTypes = {
    params?: Record<string, unknown>;
} & RequestInit;

const api = new ApiService();
export default api;
