import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import api from "../../../api.js";
import "./styles.scss";

export default function AdicionarRota(){

    const navigate = useNavigate();

    useEffect(() => {
        const nomeUsuario = localStorage.getItem("USUARIO")
        const token = localStorage.getItem("TOKEN")

        if (!token || !nomeUsuario) {
            navigate('/')
        }
    }, [])

    function sair() {
        localStorage.removeItem("USUARIO");
        localStorage.removeItem("TOKEN");

        navigate('/')
    };

    const [nome, setNome] = useState("");
    const [localizacao, setLocalizacao] = useState("");
    const [rota, setRota] = useState("");
    const [imagem, setImagem] = useState("");
    const [avaliacao, setAvaliacao] = useState("");
    const [horario, setHorario] = useState("");
    const [classificacao, setClassificacao] = useState("");
    const [categoria, setCategoria] = useState("");
    const [preco, setPreco] = useState("");
    const [regiao, setRegiao] = useState("");

    async function adicionar() {
            try {
                const body = {
                    "nome": nome,
                    "localizacao": localizacao,
                    "rota": rota,
                    "imagem": imagem,
                    "avaliacao": avaliacao,
                    "horario": horario,
                    "classificacao": classificacao,
                    "categoria": categoria,
                    "preco": preco,
                    "regiao": regiao
                }
    
                const response = await api.post('/lugares', body);
                alert("Evento criado!");
                } catch (error) {
            alert(error)
        }
    }

    return(
        <div className="main">
            <h1>Adicionar</h1>

            <div className="input">
                <input 
                    placeholder="nome" 
                    value={nome} 
                    onChange={(e) => setNome(e.target.value)} />
                </div>
                <div className="input">
                <input 
                    placeholder="localizacao" 
                    value={localizacao} 
                    onChange={(e) => setLocalizacao(e.target.value)} />
                </div>
                <div className="input">
                <input 
                    placeholder="rota" 
                    value={rota} 
                    onChange={(e) => setRota(e.target.value)} />
                </div>
                <div className="input">
                <input 
                    placeholder="imagem" 
                    value={imagem} 
                    onChange={(e) => setImagem(e.target.value)} />
                </div>
                <div className="input">
                <input 
                    placeholder="preco" 
                    value={preco} 
                    onChange={(e) => setPreco(e.target.value)} />
                </div>
                <div className="input">
                <input 
                    placeholder="Avaliação" 
                    value={avaliacao} 
                    onChange={(e) => setAvaliacao(e.target.value)} />
                </div>
                <div className="input">
                <input 
                    placeholder="horario" 
                    value={horario} 
                    onChange={(e) => setHorario(e.target.value)} />
                </div>
                <div className="input">
                <input 
                    placeholder="classificacao" 
                    value={classificacao} 
                    onChange={(e) => setClassificacao(e.target.value)} />
                </div>
                <div className="input">
                <input 
                    placeholder="categoria" 
                    value={categoria} 
                    onChange={(e) => setCategoria(e.target.value)} />
                </div>
                <div className="input">
                <input 
                    placeholder="Regiao" 
                    value={regiao} 
                    onChange={(e) => setRegiao(e.target.value)} />
                </div>

                <button onClick={adicionar}>Adicionar evento</button>
        </div>
    )
}