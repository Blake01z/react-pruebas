import React, { useState, useEffect } from 'react';

const Counter: React.FC = () => {
    const [count, setCount] = useState(0);
    
    const increment = () => {
        setCount(count + 1);
    };
    
    const decrement = () => {
        setCount(count - 1);
    };
    
    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);
    
    return (
        <div>
            <button onClick={increment}>Increment</button>
            <span>{count}</span>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Counter;
