import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import RouteApp from '@/routes/RouteApp'
import { Provider } from "react-redux";
import makeStore from "../store";

export default () => {
    return (
        <Provider store={makeStore()}>
            <BrowserRouter>
                <RouteApp />
            </BrowserRouter>
        </Provider>

    )

}
