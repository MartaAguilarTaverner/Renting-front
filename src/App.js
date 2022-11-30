import { Outlet } from "react-router-dom";

import "./App.css";

import MenuBar from "./components/MenuBar";
import Carousel from "./components/Carousel";



function App() {
    return (
        <div className="App">
            <div className="app-header">
                <MenuBar />
            </div>
            <div className="app-container">
                <Carousel />
                <Outlet />
            </div>
        </div>
    );
}

export default App;
