import React from 'react'
import { isLogin } from './../utils'
import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateRoute({children}) {

    let isUserLogin = isLogin('amir')

    console.log(isUserLogin);

    return (
        <div>
            {
                isUserLogin ? (
                    <Outlet />
                ) : (
                    <Navigate to='/login' />
                )
            }
        </div>
    )
}