import React, { useState } from 'react';

const MyComponent = () => {
    const [count, setCount] = useState(0);

    const handleButtonClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h1>Hello, World!</h1>
            <button onClick={handleButtonClick}>Increment</button>
            <span>Count: {count}</span>
        </div>
    );
};

export default MyComponent;
