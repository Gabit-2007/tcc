import { React, useEffect, useState } from "react";
import { useLocation } from "react-router";
import "./styles.scss";
import Cabecalho from "../../components/cabecalho";

export default function DetalhesPage(){
    const [item, setItem] = useState({});
    const { state } = useLocation();

    useEffect(() => {
        setItem(state.item);
    }, []);

    return(
        <div>
            <Cabecalho></Cabecalho>
        <div className="tudo">
            <div className="imagem"> 
            <img src={item.imagem} />
            </div>
            <div className="info">
                <h1>{item.nome}</h1>
                <div className="peee">
                <p>Localização: {item.localizacao}</p>
                <p>Valor: {item.preco}</p>
                <p>Avaliação: {item.avaliacao}/5</p>
                <p>Horário: {item.horario}</p>
                <p>Classificação: {item.classificacao}</p>
                </div>

                <a href={item.rota}><button>Visitar!</button></a>
            </div>
        </div>
        </div>
    );
}
