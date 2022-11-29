import { Menubar } from "primereact/menubar";

const items = [
    {
        label: "Home",
        icon: "pi pi-fw pi-home",
        url: "http://localhost:3000/",
    },
    {
        label: "User",
        icon: "pi pi-fw pi-user",
        items: [
            {
                label: "Login",
                icon: "pi pi-fw pi-thumbs-up",
                url: "http://localhost:3000/user/login",
            },
            {
                label: "Register",
                icon: "pi pi-fw pi-user-plus",
                url: "http://localhost:3000/user/register",
            },
            {
                separator: true,
            },
            {
                label: "Profile",
                icon: "pi pi-fw pi-user",
            },
        ],
    },
    {
        label: "Movies",
        icon: "pi pi-fw pi-play",
        items: [
            {
                label: "Movies",
                icon: "pi pi-fw pi-play",
                url: "http://localhost:3000/movies",
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
        items: [
            {
                label: "Series",
                icon: "pi pi-fw pi-play",
                url: "http://localhost:3000/series",
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
        label: "Quit",
        icon: "pi pi-fw pi-power-off",
    },
];

const MenuBar = () => <Menubar model={items} />;

export default MenuBar;
