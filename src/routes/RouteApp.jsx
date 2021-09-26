import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '@/pages/Home'
import Movie from '@/pages/Movie'
import NotFound from '@/pages/NotFound'

export default function RouteApp() {
    return (
        <div>
            <Switch>
                <Route path="/" component={Home} exact></Route>
                <Route path="/movie" component={Movie} exact></Route>
                <Route component={NotFound}></Route>
            </Switch>
        </div>
    )
}
