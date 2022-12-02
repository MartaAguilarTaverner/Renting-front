import { useState } from "react";

import AdminMenu from "./components/AdminMenu";
import AdminMovies from "./components/AdminMovies";
import AdminSeries from "./components/AdminSeries";
import AdminUsers from "./components/AdminUsers";
import AdminUserOrders from "./components/AdminUserOrders";

const Admin = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            <div className="admin-header">
                <AdminMenu
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                />
            </div>
            <div className="admin-content p-4">
                {activeIndex === 0 && <AdminUsers />}
                {activeIndex === 1 && <AdminUserOrders />}
                {activeIndex === 2 && <AdminMovies />}
                {activeIndex === 3 && <AdminSeries />}
            </div>
        </>
    );
};

export default Admin;
