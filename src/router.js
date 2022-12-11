import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import App from "./App";
import Home from "./Home/Home";
import Login from "./User/Login";
import Register from "./User/Register";
import Movie from "./Movie";
import TopMovie from "./Movie/TopMovie";
import TopSerie from "./Serie/TopSerie";
import Serie from "./Serie";
import UserOrder from "./UserOrder";
import Admin from "./User/Admin/Admin";

import PrivateRoute from "./components/Routes/PrivateRoute";
import AdminRoute from "./components/Routes/AdminRoute";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<App />}>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route element={<PrivateRoute />}>
                    <Route path="/movies" element={<Movie />} />
                    <Route path="/topmovies" element={<TopMovie />} />
                    <Route path="/series" element={<Serie />} />
                    <Route path="/topseries" element={<TopSerie />} />
                    <Route path="/userorders" element={<UserOrder />} />
                </Route>
                <Route element={<AdminRoute />}>
                    <Route path="/administration" element={<Admin />} />
                </Route>
            </Route>
        </>
    )
);

export default router;
