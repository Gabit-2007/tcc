import Cabecalho from "../../components/cabecalho";
import { Link } from "react-router";
import Diana from "../../assets/estatua.png";
import "./styles.scss"


export default function Cadastro(){
    return(
        <div>
            <Cabecalho></Cabecalho>
        <div className="cadastro">
            
                <span className="bola1"></span>
                <span className="bola2"></span>
                <span className="bola3"></span>
                <img src={Diana} className="imagem" />

            <div className="textos">
                <h1>Cadastre-se</h1>

                <div className="input">
                <label>email</label>
                <input type="text" />
                </div>

                <div className="input">
                <label>senha</label>
                <input type="text" />
                </div>

                <div className="input">
                <label>confirmar senha</label>
                <input type="text" />
                </div>

                <Link to={"/"}><button>Entrar</button></Link>

                </div>
        </div>
        </div>
    );
}