import React from 'react'
import { useState } from 'react';

const Counter = () => {
    const [count, setcount] = useState(0);
    return (
      <div>
        <button onClick={() => setcount(count + 1)}> {count}</button>
      </div>
    );
}

export default Counter