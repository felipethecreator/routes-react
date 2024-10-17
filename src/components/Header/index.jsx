import './style.css'
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header className="header">
            <h1>Bonzi Buddy online</h1>
            <div className="container">
                <p className="header-infos">Contato</p>
                <Link to="/jesusteama">
                <p className="header-infos">Jesus te ama</p>
                </Link>
            </div>
        </header>
    );
}