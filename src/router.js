import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Login from "./User/Login";
import Register from "./User/Register";
import Movie from "./Movie";
import Serie from "./Serie";
import UserOrder from "./UserOrder";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "user/login",
                element: <Login />,
            },
            {
                path: "user/register",
                element: <Register />,
            },
            {
                path: "movies",
                element: <Movie />,
            },
            {
                path: "series",
                element: <Serie />,
            },
            {
                path: "usersorders",
                element: <UserOrder />,
            },
        ],
    },
]);

export default router;
