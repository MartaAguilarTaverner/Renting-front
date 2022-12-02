import { useNavigate } from "react-router-dom";
import { Menubar } from "primereact/menubar";
import { useSelector } from "react-redux";

const MenuBar = () => {
    const navigate = useNavigate();
    const token = useSelector((state) => state.user.token);
    const isAdmin = useSelector((state) => state.user.isAdmin);

    const items = [
        {
            label: "Home",
            icon: "pi pi-fw pi-home",
            command: () => navigate("/"),
        },
        {
            label: "User",
            icon: "pi pi-fw pi-user",
            items: [
                {
                    label: "Login",
                    icon: "pi pi-fw pi-sign-in",
                    command: () => navigate("/login"),
                    visible: token === "",
                },
                {
                    label: "Register",
                    icon: "pi pi-fw pi-user-plus",
                    command: () => navigate("/register"),
                    visible: token === "",
                },
                {
                    label: "Logout",
                    icon: "pi pi-fw pi-sign-out",
                    visible: token !== "",
                },
                {
                    label: "Profile",
                    icon: "pi pi-fw pi-user",
                    visible: token !== "",
                },
            ],
        },
        {
            label: "Movies",
            icon: "pi pi-fw pi-play",
            visible: token !== "",
            items: [
                {
                    label: "Movies",
                    icon: "pi pi-fw pi-play",
                    command: () => navigate("/movies"),
                },
                {
                    label: "TopMovies",
                    icon: "pi pi-fw pi-check",
                },
                {
                    label: "Genres",
                    icon: "pi pi-fw pi-ellipsis-h",
                },
                {
                    label: "Year",
                    icon: "pi pi-fw pi-ellipsis-h",
                },
                {
                    label: "Directors",
                    icon: "pi pi-fw pi-ellipsis-h",
                },
            ],
        },
        {
            label: "Series",
            icon: "pi pi-fw pi-play",
            visible: token !== "",
            items: [
                {
                    label: "Series",
                    icon: "pi pi-fw pi-play",
                    command: () => navigate("/series"),
                },
                {
                    label: "TopSeries",
                    icon: "pi pi-fw pi-check",
                },
                {
                    label: "Genres",
                    icon: "pi pi-fw pi-ellipsis-h",
                },
                {
                    label: "Year",
                    icon: "pi pi-fw pi-ellipsis-h",
                },
                {
                    label: "Directors",
                    icon: "pi pi-fw pi-ellipsis-h",
                },
            ],
        },
        {
            label: "Administration",
            icon: "pi pi-fw pi-sitemap",
            visible: isAdmin && token !== "",
            command: () => navigate("/administration"),
        },
    ];

    return <Menubar model={items} />;
};

export default MenuBar;
