import { useNavigate, Link } from "react-router";
import { useEffect, useState } from "react";
import api from "../../../api.js";
import "./styles.scss";


export default function Editar(){
    const navigate = useNavigate();
    const [evento, setEvento] = useState([]);

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
    }

    async function listarLugares() {
        const reponse = await api.get('/lugares')
        setEvento(reponse.data)
    }

    async function deletarLugares(id) {
    try {
        const response = await api.delete(`/lugares/${id}`);
        alert("Lugar deletado com sucesso!");
        listarLugares();
    } catch (error) {
        alert("Erro ao deletar: " + error);
    }
}


    function verMudar( evento ){
      navigate("/mudar", { state: { evento: evento }});
   }

    useEffect(() => {
      listarLugares();
    }, []);

    return(
        <div>
            <h1>Area administrativa</h1>

            {evento.map((evento) => <div>
                <h3>{evento.nome}</h3>
                <button onClick={() => verMudar(evento)}>Alterar</button>
                <button onClick={() => deletarLugares(evento.id)}>Deletar</button>
            </div>)}

            <Link to={"/add"}><button>Adicionar</button></Link>
        </div>
    )
}