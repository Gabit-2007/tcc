import Cabecalho from "../../components/cabecalho";
import Rodape from "../../components/rodape/Index";
import MarcoZ from "../../assets/marcozero.png";
import "./styles.scss"

export default function Login(){
    return(
        <div>
            <Cabecalho></Cabecalho>
        <div className="login">
            <div className="imagens">
                <span className="bola1"></span>
                <span className="bola2"></span>
                <span className="bola3"></span>
                <img src={MarcoZ} alt="" />
            </div>

            <div className="textos">
                <h1>Login</h1>
                <h2>Bem vindo de volta</h2>

                <label>email</label>
                <input type="text" />

                <label>senha</label>
                <input type="text" />
            </div>
        </div>
        <Rodape></Rodape>
        </div>
    );
}