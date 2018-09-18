import React from 'react';
// import NotFoundPage from './pages/NotFoundPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import TaskPage from './pages/TaskPage';
import UserPage from './pages/UserPage';

const routers = [
    {
        path:  "/",
        exact: true,
        main:() => <SignInPage />
    },
    {
        path: "/user",
        exact: true,
        main:() => <UserPage />
    },
    {
        path: "/signin",
        exact: true,
        main:() => <SignInPage />
    },
    {
        path: "/signup",
        exact: true,
        main:() => <SignUpPage />
    },
    {
        path: "/task",
        exact: true,
        main:() => <TaskPage />
    },
    // {
    //     path: "",
    //     exact: true,
    //     main:() => <NotFoundPage />
    // }
]

export default routers;

