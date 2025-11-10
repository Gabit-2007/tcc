import { React, useEffect, useState } from "react";
import { useLocation } from "react-router";

export default function Mudar(){
    const [evento, setEvento] = useState({});
    const { state } = useLocation();

    useEffect(() => {
        setEvento(state.evento);
    }, []);

    return(
        <div>
            <div>
                <h1>{evento.nome}</h1>
                <p>Localização: {evento.localizacao}</p>
                <p>Valor: {evento.preco}</p>
                <p>Avaliação: {evento.avaliacao}/5</p>
                <p>Horário: {evento.horario}</p>
                <p>Classificação: {evento.classificacao}</p>

            </div>
        </div>
    );
}
