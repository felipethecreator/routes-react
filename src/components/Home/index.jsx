import './style.css'
import BonziBuddy from '../../assets/images/bonzibuddylindo.png'
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <main id='home-landing-page'>
            <div id='image-div'>
                <img className='image' src={BonziBuddy} alt="Bonzi buddy" />
            </div>
            <div id='infos-landing-page'>
                <p className='text'>Olá, sou o bonzi buddy. <br/> Vem ser meu amigo!</p>
                <Link to='/register'> <button className='div-button'>Registrar</button></Link>
            </div>
        </main>
    );
}