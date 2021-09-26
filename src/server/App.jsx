import React from 'react'
import { StaticRouter } from 'react-router-dom'
import RouterApp from '@/routes/RouteApp'

export default () => {
    return (
        <StaticRouter>
            <RouterApp></RouterApp>
        </StaticRouter>
    )
    
}
