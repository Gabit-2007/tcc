import Cabecalho from "../../components/cabecalho";
import Rodape from "../../components/rodape";
import Cidade from "../../assets/cidade.png";
import Cartao from "../../components/cartao";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import "./styles.scss";
import api from "../../api.js";

export default function Eventos(){
    const Navigate = useNavigate();
    const[item, setItem] = useState([]);

  function verDetalhes( item ){
    Navigate("/detalhe", {state: { item }});
  }

  async function listarLugares() {
    const response = await api.get('/lugares')
    setItem(response.data)
 }

 useEffect(() => {
  listarLugares();
}, []);

    return(
        <div className="eventos">
            <Cabecalho></Cabecalho>
            <div className="categoria"> 
                <img className="cidade" src={Cidade} />
        
        <div className="header">
         <h1>encontre o lugar perfeito para você</h1>
        <p>explore nossas opções</p>
        </div>
            
                  
      </div>

      <div className="lista-cartoes">
        {item.map((item) => 
          <a onClick={() => verDetalhes(item)}>
            <Cartao item={item} /> </a>)
       }
      </div>
            <Rodape></Rodape>
        </div>
    );
}