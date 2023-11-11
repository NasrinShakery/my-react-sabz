import React from 'react'
import { isLogin } from './../utils'
import { Navigate } from 'react-router-dom'

export default function PrivateRoute({children}) {

    let isUserLogin = isLogin('amir')

    console.log(isUserLogin);

    return (
        <div>
            {
                isUserLogin ? (
                    {children}
                ) : (
                    <Navigate to='/login' />
                )
            }
        </div>
    )
}