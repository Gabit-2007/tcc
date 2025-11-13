import Cabecalho from "../../components/cabecalho";
import { useNavigate } from "react-router";
import { useState } from "react";
import api from "../../api.js"
import Diana from "../../assets/estatua.png";
import "./styles.scss"


export default function Cadastro(){
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

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
                <label>nome</label>
                <input 
                value={nome}
                onChange={(e) => setNome(e.target.value)} />
                </div>

                <div className="input">
                <label>email</label>
                <input 
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="input">
                <label>senha</label>
                <input 
                value={senha}
                onChange={(e) => setSenha(e.target.value)} />
                </div>

                <button onClick={criarUser}>Entrar</button>

                </div>
        </div>
        </div>
    );
}