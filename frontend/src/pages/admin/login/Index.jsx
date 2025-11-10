import Cabecalho from "../../../components/cabecalho";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import api from "../../../api.js"
import Trabalho from "../../../assets/trabalho.jpg";
import "./styles.scss"

export default function LoginAdm(){

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    const navigate = useNavigate();


    async function entrar() {
        try {
            const body = {
                "usuario": usuario,
                "senha": senha
            }

            const response = await api.post('/login', body);
            const token = response.data.token;
            const nomeUsuario = response.data.usuario.usuario;

            localStorage.setItem("USUARIO", nomeUsuario)
            localStorage.setItem("TOKEN", token)
            
            navigate('/editar')
        } catch (error) {
            alert(error)
        }
    }


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
                <input 
                    placeholder="Usuário" 
                    value={usuario} 
                    onChange={(e) => setUsuario(e.target.value)} />
                </div>

                <div className="input">
                <input 
                    placeholder="Senha" 
                    value={senha} 
                    onChange={(e) => setSenha(e.target.value)} />
                </div>

                <button onClick={entrar}>Entrar</button>

            </div>
        </div>
        </div>
    );
}