import React, { useEffect, useState } from 'react'

function useDebounce(value,delay) {

    const [debouncedValue, setDebouncedValue] = useState("");

    useEffect(() => {

        const timer = setTimeout(() => {
           setDebouncedValue(value); 
        }, delay);

        return () => clearTimeout(timer);
        
    }, [delay, value]);

    return debouncedValue;
}

export default useDebounce 