import Cabecalho from "../../components/cabecalho";
import Rodape from "../../components/rodape";
import Cidade from "../../assets/cidade.png";
import Cartao from "../../components/cartao";
import Pateo from "../../assets/pateo.png";
import Masp from "../../assets/masp1.png";
import Ipiranga from "../../assets/ipiranga.png";
import Pinacoteca from "../../assets/pinacoteca.png";
import MlinguaPort from "../../assets/mlingpor.png";
import BBatman from "../../assets/becodobatman.png";
import PracaSol from "../../assets/pracasol.png";
import MAfroBr from "../../assets/mafrobrasil.png";
import MuFutebol from "../../assets/museufutebol.png";
import Catavento from "../../assets/catavento.png";
import Butantan from "../../assets/butantan.png";
import CasaRosa from "../../assets/casadasrosas.png";
import ItauCult from "../../assets/itaucult.png";
import MIS from "../../assets/mis.png";
import MuseuFav from "../../assets/favelas.png";
import MuIndig from "../../assets/cultind.png";
import MImigracao from "../../assets/mimigracao.png";
import CCBB from "../../assets/ccbb.png";
import React, { useState } from "react";
import "./styles.scss";


export default function Eventos(){
    const [categoria, setCategoria] = useState("Todos");
    const [regiao, setRegiao] = useState("Todos");
    const [preco, setPreco] = useState("Todos");

    const categorias = ["Todos", "Museu", "Parque", "Atividade", "Rua"];
    const precos = ["Todos", "Até 10", "Até 20", "Até 30", "Acima de 30"];
    const regioes = ["Todos", "Zona Sul", "Zona Norte", "Zona Leste", "Zona Oeste", "Centro"];

      const itens = [
    { id: 1, nome: "MASP", categoria: "Museu", preco: 70, regiao: "Centro", imagem: Masp },
    { id: 2, nome: "Pateo do Collegio", categoria: "Museu", preco: 0, regiao: "Centro", imagem: Pateo },
    { id: 3, nome: "Museu do Ipiranga", categoria: "Museu", preco: 30, regiao: "Zona Sul", imagem: Ipiranga },
    { id: 4, nome: "Pinacoteca", categoria: "Museu", preco: 30, regiao: "Centro", imagem: Pinacoteca },
    { id: 5, nome: "Museu da Língua Portuguesa", categoria: "Museu", preco: 24, regiao: "Centro", imagem: MlinguaPort },
    { id: 6, nome: "Beco do Batman", categoria: "Rua", preco: 0, regiao: "Zona Oeste", imagem: BBatman },
    { id: 7, nome: "Praça Por do Sol", categoria: "Parque", preco: 0, regiao: "Zona Oeste", imagem: PracaSol },
    { id: 8, nome: "Museu Afro Brasil", categoria: "Museu", preco: 15, regiao: "Zona Sul", imagem: MAfroBr },
    { id: 9, nome: "Museu do Futebol", categoria: "Museu", preco: 24, regiao: "Zona Oeste", imagem: MuFutebol },
    { id: 10, nome: "Museu Catavento", categoria: "Museu", preco: 18, regiao: "Centro", imagem: Catavento },
    { id: 11, nome: "Instituto Butantan", categoria: "Museu", preco: 0, regiao: "Zona Oeste", imagem: Butantan },
    { id: 12, nome: "Casa das Rosas", categoria: "Museu", preco: 0, regiao: "Centro", imagem: CasaRosa },
    { id: 13, nome: "Itaú Cultural", categoria: "Museu", preco: 0, regiao: "Centro", imagem: ItauCult },
    { id: 14, nome: "MIS", categoria: "Museu", preco: 0, regiao: "Zona Oeste", imagem: MIS },
    { id: 15, nome: "Museu das Favelas", categoria: "Museu", preco: 0, regiao: "Centro", imagem: MuseuFav },
    { id: 16, nome: "Museu das Culturas Indigenas", categoria: "Museu", preco: 15, regiao: "Zona Oeste", imagem: MuIndig },
    { id: 17, nome: "Museu da Imigração", categoria: "Museu", preco: 16, regiao: "Zona Leste", imagem: MImigracao },
    { id: 18, nome: "CCBB", categoria: "Museu", preco: 0, regiao: "Centro", imagem: CCBB },
    ];

    const itensFiltrados = itens.filter((item) => {
    const filtraCategoria = categoria === "Todos" || item.categoria === categoria;
    const filtraPreco =
      preco === "Todos" ||
      (preco === "Até 10" && item.preco <= 10) ||
      (preco === "Até 20" && item.preco <= 20) ||
      (preco === "Até 30" && item.preco <= 30) ||
      (preco === "Acima de 30" && item.preco > 30);
    const filtraRegiao = regiao === "Todos" || item.regiao === regiao;
    return filtraCategoria && filtraPreco && filtraRegiao;
  });

    return(
        <div className="eventos">
            <Cabecalho></Cabecalho>
            <div className="categoria"> 
                <img src={Cidade} />
            
                  <div className="filtros">
        <div className="filtro">
          <label>Categoria:</label>
          <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
            {categorias.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>

        <div className="filtro">
          <label>Preço:</label>
          <select value={preco} onChange={(e) => setPreco(e.target.value)}>
            {precos.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </div>

        <div className="filtro">
          <label>Região:</label>
          <select value={regiao} onChange={(e) => setRegiao(e.target.value)}>
            {regioes.map((a) => (
              <option key={a}>{a}</option>
            ))}
          </select>
        </div>
      </div>
      </div>

      <div className="lista-cartoes">
        {itensFiltrados.length > 0 ? (
          itensFiltrados.map((item) => <Cartao key={item.id} item={item} />)
        ) : (
          <p className="vazio">Nenhum item encontrado.</p>
        )}
      </div>
            <Rodape></Rodape>
        </div>
    );
}