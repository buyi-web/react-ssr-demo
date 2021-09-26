import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <Link to="/">首页</Link>
            <Link to="/movies">电影列表</Link>
        </div>
    );
}
