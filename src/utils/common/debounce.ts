import { DebounceType } from '@devTypes/common/debounce.type';

export const debounce = ({ fn, wait = 500 }: DebounceType) => {
    let debounceCall: ReturnType<typeof setTimeout> | null = null;

    return (...args: unknown[]) => {
        if (debounceCall) clearTimeout(debounceCall);
        debounceCall = setTimeout(() => {
            fn(...args);
        }, wait);
    };
};
