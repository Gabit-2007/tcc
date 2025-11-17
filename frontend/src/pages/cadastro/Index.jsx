import Cabecalho from "../../components/cabecalho";
import { useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import api from "../../api.js"
import Diana from "../../assets/estatua.png";
import "./styles.scss"


export default function Cadastro(){
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mostrarSenha, setMostrarSenha] = useState(false);


    const navigate = useNavigate();

    async function criarUser() {
        try{
            const body = {
                "nome": nome,
                "email": email,
                "senha": senha
            }

            const response = await api.post('/user', body);
            navigate('/login')
        } catch(error) {
            alert(error)
        }
    }


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
                <input 
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)} />
                </div>

                <div className="input">
                <input 
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="input">
                <input
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                type={mostrarSenha ? "text" : "password"} />
                <span className="icon" onClick={() => setMostrarSenha(!mostrarSenha)}>
                {mostrarSenha ? <FaEyeSlash /> : <FaEye />}
                </span>
                </div>

                <button onClick={criarUser}>Entrar</button>

                </div>
        </div>
        </div>
    );
}