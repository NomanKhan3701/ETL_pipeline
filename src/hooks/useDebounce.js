import { useState, useEffect } from 'react';


const useDebounce = (fn, delay) => {
    const [timer, setTimer] = useState(null);

    useEffect(() => {
        return () => {
            clearTimeout(timer);
        };
    }, [timer]);

    const debouncedFn = (...args) => {
        clearTimeout(timer);

        setTimer(setTimeout(() => {
            fn(...args);
        }, delay));
    };

    return debouncedFn;
}

export default useDebounce;