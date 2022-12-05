import PropTypes from "prop-types";
import { TabMenu } from "primereact/tabmenu";

const items = [
    { label: "User", icon: "pi pi-fw pi-user-edit" },
    { label: "UserOrders", icon: "pi pi-fw pi-file-edit" },
];

const AdminMenu = ({ activeIndex, setActiveIndex }) => (
    <TabMenu
        model={items}
        activeIndex={activeIndex}
        onTabChange={(e) => setActiveIndex(e.index)}
    />
);

AdminMenu.propTypes = {
    activeIndex: PropTypes.number,
    setActiveIndex: PropTypes.func,
};

export default AdminMenu;
