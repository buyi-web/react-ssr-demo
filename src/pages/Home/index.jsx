import React, { useState } from "react";
import "./style.less"
import imgUrl from '@/assets/images/xidada.jpg'

export default function () {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>home page: <span className="content">{count}</span> </h1>
            <img src={imgUrl} alt="" width="200" />
            <br/>
            <button className="btn" onClick={() => { setCount(count + 1) }}>click</button>
        </div>
    )
}
