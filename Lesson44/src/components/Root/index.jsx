import React from "react";
import { NavLink, Outlet } from "react-router-dom"

export const Root = () => {
    return( 
        <div>
            <div>
                <NavLink to={'/'}>Счетчик</NavLink>
                <NavLink to={'users'}>Пользователи</NavLink>
                <NavLink to={'posts'}>Посты</NavLink>
            </div>

            <Outlet />
        </div>
    )
}