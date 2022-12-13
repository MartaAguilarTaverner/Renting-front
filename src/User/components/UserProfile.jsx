import React, { useState } from "react";
import { Card } from "primereact/card";
import { Chips } from "primereact/chips";

const UserProfile = () => {
    const [values1] = useState([]);
    const [values2] = [];
    const [values3] = useState([]);
    const [values4] = [];

    return (
        <Card className="profile-card">
            <div className="card p-fluid">
                <h5>Name</h5>
                <Chips value={values1} />

                <h5>Email</h5>
                <Chips value={values2} />

                <h5>Birthday</h5>
                <Chips value={values3}></Chips>

                <h5>Supscription Plan</h5>
                <Chips value={values4} />
            </div>
        </Card>
    );
};

export default UserProfile;
