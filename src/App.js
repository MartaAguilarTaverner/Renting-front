import { Outlet } from "react-router-dom";

import MenuBar from "./components/MenuBar";

import "./App.css";

function App() {
    return (
        <div className="App">
            <div className="app-header">
                <MenuBar />
            </div>
            <div className="app-container">
                <Outlet />
            </div>
        </div>
    );
}

export default App;
