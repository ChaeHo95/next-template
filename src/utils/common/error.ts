// 커스텀 에러 클래스 정의: `code`와 `message`를 함께 전달하는 에러 처리
export class CustomError extends Error {
    code: number | 'THROTTLED-ERROR' | 'REQUEST-ERROR'; // 에러 코드,'THROTTLED-ERROR','REQUEST-ERROR', 값을 가질 수 있음

    constructor(
        code: number | 'THROTTLED-ERROR' | 'REQUEST-ERROR',
        message: string
    ) {
        super(message); // 기본 Error 클래스의 메시지 설정
        this.code = code; // 에러 코드 설정
        this.name = 'CustomError'; // 에러 이름 설정
    }
}
