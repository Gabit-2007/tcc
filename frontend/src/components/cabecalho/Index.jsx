import Logo from "../../assets/logoTCC.png";
import { Link } from "react-router";
import "./styles.scss";

export default function Cabecalho(){
    return(
        <div className="cabecalho">
            <Link to={"/adminlogin"}><img src={ Logo } alt="RotaCult" /></Link>

            <div className="rotas">
                <Link className="a" to={"/"}>inicio</Link>
                <Link className="b" to={"/eventos"}>eventos</Link>
                <Link className="c" to={"/sobre"}>sobre</Link>
                <Link className="d" to={"/login"}>login</Link>
            </div>
        </div>
    );
}