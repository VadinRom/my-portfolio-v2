import Home from '../pages/Home'
import Temperature from "../pages/Temperature/Temperature"
import Quiz from "../pages/Quiz/Quiz"
import Calculator from "../pages/Calculator/Calculator"
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";

export const privatRoutes = [
    { path: '/home', element: <Home />, exact: true },
    { path: '/temperature', element: <Temperature />, exact: true },
    { path: '/quiz', element: <Quiz />, exact: true },
    { path: '/calculator', element: <Calculator />, exact: true },
    { path: '/posts', element: <Posts />, exact: true },
    { path: '/posts/:id', element: <PostIdPage />, exact: true },
]

export const publicRoutes = [
    { path: '/login', element: <Login />, exact: true },
]