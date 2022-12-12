import React, { useState, useEffect, useCallback } from "react";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { DataTable } from "primereact/datatable";
import { Button } from "primereact/button";

import { getAllUsers } from "../../services";
import { useSelector } from "react-redux";

const AdminUsers = () => {
    const token = useSelector((state) => state.user.token);
    const [users, setUsers] = useState([]);
    const [globalFilter, setGlobalFilter] = useState(null);

    const getUserList = useCallback(async () => {
        const result = await getAllUsers(token);
        console.log(
            "🚀 ~ file: AdminUsers.jsx:16 ~ getUserList ~ result",
            result
        );

        setUsers(result.data);
    }, [token]);

    useEffect(() => {
        getUserList();
    }, [getUserList]);

    const header = (
        <div className="table-header">
            <h5 className="mx-0 my-1">Manage Users</h5>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText
                    type="search"
                    onInput={(e) => setGlobalFilter(e.target.value)}
                    placeholder="Search..."
                />
            </span>
        </div>
    );

    const actionBodyTemplate = (rowData) => (
        <>
            <Button
                icon="pi pi-pencil"
                className="p-button-rounded p-button-success mr-2"
            />
            <Button
                icon="pi pi-trash"
                className="p-button-rounded p-button-warning"
            />
        </>
    );

    return (
        <div className="datatable-crud-demo">
            <div className="card">
                <DataTable
                    value={users}
                    dataKey="id"
                    paginator
                    rows={10}
                    rowsPerPageOptions={[5, 10, 25]}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                    globalFilter={globalFilter}
                    responsiveLayout="scroll"
                >
                    <Column
                        selectionMode="multiple"
                        headerStyle={{ width: "3rem" }}
                        exportable={false}
                    ></Column>
                    <Column
                        field="id"
                        header="Id"
                        sortable
                        style={{ minWidth: "12rem" }}
                    ></Column>
                    <Column
                        field="name"
                        header="Name"
                        sortable
                        style={{ minWidth: "16rem" }}
                    ></Column>
                    <Column
                        field="email"
                        header="Email"
                        sortable
                        style={{ minWidth: "20rem" }}
                    ></Column>
                    <Column
                        field="dateBirth"
                        header="DateBirth"
                        sortable
                        style={{ minWidth: "10rem" }}
                    ></Column>
                    <Column
                        field="subscribed"
                        header="Subscribed"
                        sortable
                        style={{ minWidth: "10rem" }}
                    ></Column>
                    <Column
                        header="Actions"
                        exportable={false}
                        style={{ minWidth: "8rem" }}
                        body={actionBodyTemplate}
                    ></Column>
                </DataTable>
            </div>
        </div>
    );
};
export default AdminUsers;
