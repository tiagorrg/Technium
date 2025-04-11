import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import * as SC from './styles'

export const Root = () => <SC.Root>
    <SC.PagesTitle>
        <NavLink to={'/'}>Главная</NavLink>
        <NavLink to={'posts'}>Посты</NavLink>
        <NavLink to={'blog'}>Блог</NavLink>
    </SC.PagesTitle>

    <Outlet />
</SC.Root>