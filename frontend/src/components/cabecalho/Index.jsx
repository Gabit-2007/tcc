import Logo from "../../assets/logoTCC.png";
import { Link } from "react-router";
import "./styles.scss";

export default function Cabecalho(){
    return(
        <div className="cabecalho">
            <img src={ Logo } alt="RotaCult" />

            <div className="rotas">
                <Link to={"/"}>inicio</Link>
                <Link to={"/eventos"}>eventos</Link>
                <Link to={"/sobre"}>sobre</Link>
                <Link to={"/login"}>login</Link>
            </div>
        </div>
    );
}