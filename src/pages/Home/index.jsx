import React, { useState } from "react";

export default function () {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>home page: <span>{count}</span> </h1>
            <button onClick={() => { setCount(count + 1) }}>click</button>
        </div>
    )
}
