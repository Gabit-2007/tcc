import Cabecalho from "../../components/cabecalho";
import { useNavigate, Link } from "react-router";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import api from "../../api.js"
import MarcoZ from "../../assets/marcozero.png";
import "./styles.scss"

export default function Login(){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mostrarSenha, setMostrarSenha] = useState(false);


    const navigate = useNavigate();

    async function login() {
        try{
            const body = {
                "email": email,
                "senha": senha
            }

            const response = await api.post('/userlogin', body);
            const token = response.data.token;
            const nomeUsuario = response.data.nome;

            localStorage.setItem("TOKEN", token);
            localStorage.setItem("NOME_USUARIO", nomeUsuario);


            navigate('/eventos')
        } catch(error) {
            alert(error)
        }
    }

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


                <button onClick={login}>Entrar</button>

                <p>Ainda não tem conta?</p>
                <Link to={"/cadastro"}>Cadastre-se agora</Link>
            </div>
        </div>
        </div>
    );
}