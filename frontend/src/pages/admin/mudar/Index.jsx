import { useNavigate, useLocation } from "react-router";
import { useEffect, useState } from "react";
import api from "../../../api.js";
import "./styles.scss";

export default function Mudar(){

    const navigate = useNavigate();
    const { state } = useLocation();

    useEffect(() => {
        const nomeUsuario = localStorage.getItem("USUARIO");
        const token = localStorage.getItem("TOKEN");

        if (!token || !nomeUsuario) {
            navigate('/');
        }
    }, [navigate]);

    const [evento, setEvento] = useState({});

    useEffect(() => {
        if (state && state.evento) {
            setEvento(state.evento);
        }
    }, [state]);

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

    async function mudar() {
        try {
            const body = {
                nome: nome || evento.nome,
                localizacao: localizacao || evento.localizacao,
                rota: rota || evento.rota,
                imagem: imagem || evento.imagem,
                avaliacao: avaliacao || evento.avaliacao,
                horario: horario || evento.horario,
                classificacao: classificacao || evento.classificacao,
                categoria: categoria || evento.categoria,
                preco: preco || evento.preco,
                regiao: regiao || evento.regiao
            };

            await api.put(`/lugares/${evento.id}`, body);

            alert("Evento alterado!");
        } catch (error) {
            alert(error);
        }
    }

    return(
        <div className="main">
            <h1>Editar Evento</h1>

            <div className="input">
                <input 
                    placeholder={evento.nome || ""}
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
            </div>

            <div className="input">
                <input 
                    placeholder={evento.localizacao || ""}
                    value={localizacao}
                    onChange={(e) => setLocalizacao(e.target.value)}
                />
            </div>

            <div className="input">
                <input 
                    placeholder={evento.rota || ""}
                    value={rota}
                    onChange={(e) => setRota(e.target.value)}
                />
            </div>

            <div className="input">
                <input 
                    placeholder={evento.imagem || ""}
                    value={imagem}
                    onChange={(e) => setImagem(e.target.value)}
                />
            </div>

            <div className="input">
                <input 
                    placeholder={evento.preco || ""}
                    value={preco}
                    onChange={(e) => setPreco(e.target.value)}
                />
            </div>

            <div className="input">
                <input 
                    placeholder={evento.avaliacao || ""}
                    value={avaliacao}
                    onChange={(e) => setAvaliacao(e.target.value)}
                />
            </div>

            <div className="input">
                <input 
                    placeholder={evento.horario || ""}
                    value={horario}
                    onChange={(e) => setHorario(e.target.value)}
                />
            </div>

            <div className="input">
                <input 
                    placeholder={evento.classificacao || ""}
                    value={classificacao}
                    onChange={(e) => setClassificacao(e.target.value)}
                />
            </div>

            <div className="input">
                <input 
                    placeholder={evento.categoria || ""}
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                />
            </div>

            <div className="input">
                <input 
                    placeholder={evento.regiao || ""}
                    value={regiao}
                    onChange={(e) => setRegiao(e.target.value)}
                />
            </div>

            <button onClick={mudar}>Alterar evento</button>
        </div>
    )
}
