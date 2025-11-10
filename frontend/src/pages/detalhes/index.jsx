import { React, useEffect, useState } from "react";
import { useLocation } from "react-router";

export default function DetalhesPage(){
    const [item, setItem] = useState({});
    const { state } = useLocation();

    useEffect(() => {
        setItem(state.item);
    }, []);

    return(
        <div>
            <img src={item.imagem} />
            <div>
                <h1>{item.nome}</h1>
                <p>Localização: {item.localizacao}</p>
                <p>Valor: {item.preco}</p>
                <p>Avaliação: {item.avaliacao}/5</p>
                <p>Horário: {item.horario}</p>
                <p>Classificação: {item.classificacao}</p>

                <a href={item.rota}><button>Visitar!</button></a>
            </div>
        </div>
    );
}
