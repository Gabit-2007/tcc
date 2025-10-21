import { Link } from "react-router";
import Cabecalho from "../../components/cabecalho";
import Rodape from "../../components/rodape/Index";
import Masp from "../../assets/masp.png";
import Onda from "../../assets/ondas.png";
import Predio from "../../assets/predio.png";
import Canto from "../../assets/canto.png";
import Asfalto from "../../assets/asfalto.png";
import Luz from "../../assets/luz.png";
import Jornal from "../../assets/jornal.png";
import SP from "../../assets/sp.png";
import "./styles.scss";

export default function Inicio(){
    return(
    <div className="inicio">
        <Cabecalho/>
        <div className="azul">
            <h1>VENHA CONHECER SP!</h1>
            <div className="sla">
                <p>roles acessíveis pra conhecer com a galera ou sozinho!</p>
                <img src={ Masp } />
            </div>
        </div>
        <div className="ondas">
            <img src={Onda} />
        </div>
        <div className="inicio2">
            <img src={Predio} className="predio"/>
            <span className="bola1"></span>
            <span className="bola2"></span>
            <div className="texto2">
            <h2>se voce curte conhecer lugares novos e explorar a cidade de SP,
            o RotaCult é o guia certo!</h2>
            <p>pesquise por categoria, valor ou região</p>
            <Link to={"/eventos"}><button>acesse nossa página de eventos</button></Link>
            </div>
        </div>
        <img src={Asfalto} className="asfalto"/>
        <div className="login">
            <div className="texto3">
            <h1>Faça login</h1>
            <p>se inscreva e receba notícias sobre eventos, shows e exposições em primeira mão</p>
            <Link to={"/login"}><button>Login</button></Link>
            </div>
            <div className="imagem">
            <img src={Luz} className="tras" />
            <img src={Jornal} className="frente" />
            <span className="bola1"></span>
        <span className="bola2"></span>
        </div>
        </div>
        
        <div className="sobre">
            <img src={SP} />
            <h1>Saiba mais sobre nós</h1>
            <p>gostou da nossa ação? <br />
            clique em saiba mais e conheça nossa história! </p>
            <Link to={"/sobre"}><button>saiba mais</button></Link>
        </div>
        <Rodape/>
    </div>

    );
}