import React, { useState } from "react";
import "./style.less"

export default function () {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>home page: <span className="content">{count}</span> </h1>
            <button className="btn" onClick={() => { setCount(count + 1) }}>click</button>
        </div>
    )
}
