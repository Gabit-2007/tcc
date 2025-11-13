import Cabecalho from "../../components/cabecalho";
import { useNavigate, Link } from "react-router";
import { useState } from "react";
import api from "../../api.js"
import MarcoZ from "../../assets/marcozero.png";
import "./styles.scss"

export default function Login(){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const navigate = useNavigate();

    async function login() {
        try{
            const body = {
                "email": email,
                "senha": senha
            }

            const response = await api.post('/userlogin', body);
            const token = response.data.token;

            localStorage.setItem("TOKEN", token)

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

                <button onClick={login}>Entrar</button>

                <p>Ainda não tem conta?</p>
                <Link to={"/cadastro"}>Cadastre-se agora</Link>
            </div>
        </div>
        </div>
    );
}