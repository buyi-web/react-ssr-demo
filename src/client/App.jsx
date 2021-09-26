import React from 'react'
import {BrowserRouter } from 'react-router-dom'
import RouterApp from '@/routes/RouteApp'

export default () => {
    return (
        <BrowserRouter>
            <RouterApp></RouterApp>
        </BrowserRouter>
    )
    
}
