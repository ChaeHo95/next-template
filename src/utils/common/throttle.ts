import { ThrottleTypes } from '@devTypes/common/throttle.type';
import { CustomError } from '@devUtils/common/error';

const throttle = ({ fn, wait = 500 }: ThrottleTypes) => {
    let throttleLastCall: number = 0;

    return (...args: unknown[]) => {
        const now = Date.now();
        if (now - throttleLastCall < wait) {
            throw new CustomError(
                'THROTTLED-ERROR',
                `The function "${fn.name}" is being called too frequently. Please wait before trying again.`
            );
        }

        throttleLastCall = now;

        fn(...args);
    };
};
export default throttle;
