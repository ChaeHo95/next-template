export type ThrottleTypes = {
    fn: (..._args: unknown[]) => void; // 더 구체적인 함수 타입 정의;
    wait?: number;
};
