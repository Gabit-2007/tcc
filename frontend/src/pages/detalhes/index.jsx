import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

export default function DetalhesPage(){
    const [evento, setEvento] = useState({});
    const { state } = useLocation();

    useEffect(() => {
        setEvento(state.evento);
    }, []);

    return(
        <div>
            <img src={evento.imagem} />

            <div>
                <h1>{evento.nome}</h1>
                <p>Localização: {evento.local}</p>
                <p>Valor: {evento.valor}</p>
                <p>Avaliação: {evento.avaliacao}/5</p>
                <p>Horário: {evento.horario}</p>
                <p>Classificação: {evento.classificacao}</p>

                <a href={evento.rotas}><button>Visitar!</button></a>
            </div>
        </div>
    );
}
