import React from "react";
import "./styles.scss";


export default function Cartao({ item }){
    return(
        <div className="cartao">
            <img src={item.imagem} />
            <span></span>
            <div className="info">
                <h3>{item.nome}</h3>
                <p>{item.categoria}</p>
                <p>{item.regiao}</p>
                <p>{item.preco}</p>
            </div>
        </div>
    );
}