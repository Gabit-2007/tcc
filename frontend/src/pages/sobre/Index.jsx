import Cabecalho from "../../components/cabecalho";
import Rodape from "../../components/rodape";
import Museu from "../../assets/museu.png";
import Masp from "../../assets/masp2.png";
import Missao from "../../assets/missao.png";
import Visao from "../../assets/visao.png";
import Valores from "../../assets/valores.png";
import "./styles.scss"

export default function Sobre(){
    return(
        <div className="sobre">
            <Cabecalho></Cabecalho>
            <div className="museu">
                <img src={Museu} />
                <div className="texto">
                <span></span>
                <h1>Democratizando o acesso à cultura para a população vulnerável</h1>
                </div>
            </div>
            <span className="separar vermelho"></span>
            <div className="hist">
                <img src={Masp} />
                <span></span>
                <div className="texto">
                <h1>Nossa História</h1>
                <p>O RotaCult nasceu do desejo de ampliar o acesso à cultura e a apreciação da arte</p>
                <p>Com dicas de passeios economicos e divertidos, o site oferece uma programação acessível à todos os bolsos</p>
                <p>Porque a arte retrata a realidade, e suas obras preservam a história</p>
                <p>- Amanda</p>
                </div>
            </div>
            <span className="separar verde"></span>
            <span className="separar azul"></span>
            <div className="empre">

                <h1>Conheça mais sobre nós</h1>

                <div className="cartoes">
                <div className="cartao amarelo">
                    <img src={Missao} alt="" />
                    <h2>missão</h2>
                    <p>visamos ampliar o acesso à cultura para pessoas de baixa renda, promovendo o lazer e preservação desses espaços.</p>
                </div>

                <div className="cartao laranja">
                    <img src={Visao} />
                    <h2>visão</h2>
                    <p>criar um futuro onde espaços culturais sejam valorizados e respeitados, e a população vulnerável tenha livre acesso à esses locais</p>
                </div>

                <div className="cartao vermelho">
                    <img src={Valores} />
                    <h2>valores</h2>
                    <ul>
                        <li>Inclusão</li>
                        <li>Respeito</li>
                        <li>Equidade</li>
                        <li>Responsabilidade Social</li>
                        <li>Ética e Integridade</li>
                    </ul>
                </div>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <Rodape></Rodape>
        </div>
    );
}