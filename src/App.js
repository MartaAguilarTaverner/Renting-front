import "./App.css";

import Movie from "./Movie";
import Serie from "./Serie";
import User from "./User";
import UserOrder from "./UserOrder";

function App() {
    return (
        <div className="App">
            <Movie />
            <Serie />
            <User />
            <UserOrder />
        </div>
    );
}

export default App;
