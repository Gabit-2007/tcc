import Logo from "../../assets/logoTCC.png";
import { Link } from "react-router";
import "./styles.scss";

export default function Cabecalho(){

    function sair() {
        localStorage.removeItem("USUARIO");
        localStorage.removeItem("TOKEN");

        navigate('/')
    }

    return(
        <div className="cabecalho">
            <Link to={"/adminlogin"}><img src={ Logo } alt="RotaCult" /></Link>

            <div className="rotas">
                <Link className="a" to={"/"}>Inicio</Link>
                <Link className="b" to={"/eventos"}>Eventos</Link>
                <Link className="c" to={"/sobre"}>Sobre</Link>
                <Link className="d" to={"/login"}>Login</Link>
                <button className="sair" onClick={sair}>Sair</button>
            </div>
        </div>
    );
}