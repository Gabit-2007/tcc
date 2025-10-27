import React from "react";
import "./styles.scss";
import { Link } from "react-router";

export default function Cartao({ item }){
    return(
        <div className="cartao">
            <Link to={item.link}><button>
            <img src={item.imagem} height={300}/>
            <span></span>
            <div className="info">
                <h3>{item.nome}</h3>
                <p>{item.categoria}</p>
                <p>{item.regiao}</p>
                <p>{item.preco}</p>
            </div>
            </button></Link>
        </div>
    );
}