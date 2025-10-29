import Cabecalho from "../../../components/cabecalho";
import { Link } from "react-router";
import Trabalho from "../../../assets/trabalho.jpg";
import "./styles.scss"

export default function LoginAdm(){
    return(
        <div>
            <Cabecalho></Cabecalho>
        <div className="loginAdm">
            
                <span className="bola1"></span>
                <span className="bola2"></span>
                <span className="bola3"></span>
                <img src={Trabalho} className="imagem" />

            <div className="textos">
                <h1>Login Administrativo</h1>

                <div className="input">
                <label>email</label>
                <input type="text" />
                </div>

                <div className="input">
                <label>senha</label>
                <input type="text" />
                </div>

                <Link to={"/"}><button>Entrar</button></Link>

            </div>
        </div>
        </div>
    );
}