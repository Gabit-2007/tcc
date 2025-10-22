import Cabecalho from "../../components/cabecalho";
import { Link } from "react-router";
import MarcoZ from "../../assets/marcozero.png";
import "./styles.scss"

export default function Login(){
    return(
        <div>
            <Cabecalho></Cabecalho>
        <div className="login">
            
                <span className="bola1"></span>
                <span className="bola2"></span>
                <span className="bola3"></span>
                <img src={MarcoZ} className="imagem" />

            <div className="textos">
                <h1>Login</h1>
                <h2>Bem vindo de volta</h2>

                <div className="input">
                <label>email</label>
                <input type="text" />
                </div>

                <div className="input">
                <label>senha</label>
                <input type="text" />
                </div>

                <Link to={"/"}><button>Entrar</button></Link>

                <p>Ainda não tem conta?</p>
                <Link to={"/cadastro"}>Cadastre-se agora</Link>
            </div>
        </div>
        </div>
    );
}