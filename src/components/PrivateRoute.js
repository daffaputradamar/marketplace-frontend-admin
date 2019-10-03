import React from 'react'
import { Redirect, Route } from 'react-router-dom';

import { TOKEN_KEY } from '../App'

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            localStorage.getItem(TOKEN_KEY) ? (
                <Component {...props} />
            ) : (
                    <Redirect
                        to='/login'
                    />
                )
        }
    />
);