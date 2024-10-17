import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from '../pages/MainPage'
import RegisterPage from "../pages/Register";
import JesusPage from "../pages/JesusPage"

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/"
                Component={MainPage}/>

                <Route path="/register" 
                Component={RegisterPage}/>

                <Route path="/jesusteama" 
                Component={JesusPage}/>
            </Routes>
        </Router>
    );
}