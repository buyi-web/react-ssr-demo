import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import RouteApp from '@/routes/RouteApp'
import { Provider } from "react-redux";
import store from "../store";

export default () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <RouteApp />
            </BrowserRouter>
        </Provider>

    )

}
