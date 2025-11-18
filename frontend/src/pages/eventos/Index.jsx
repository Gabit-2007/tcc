import "./styles.scss";
import Cabecalho from "../../components/cabecalho";
import Rodape from "../../components/rodape";
import Cidade from "../../assets/cidade.png";
import Cartao from "../../components/cartao/Index.jsx";
import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import api from "../../api.js";

export default function Eventos() {
  const Navigate = useNavigate();

  const [item, setItem] = useState([]);
  const [filtrado, setFiltrado] = useState([]);

  const [regiao, setRegiao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [preco, setPreco] = useState("");

  function verDetalhes(item) {
    Navigate("/detalhe", { state: { item: item } });
  }

  async function listarLugares() {
    const response = await api.get("/lugares");
    setItem(response.data);
    setFiltrado(response.data);
  }

  useEffect(() => {
    listarLugares();
  }, []);

  useEffect(() => {
    let filtradoTemp = item;

    if (regiao !== "") {
      filtradoTemp = filtradoTemp.filter((lugar) => lugar.regiao === regiao);
    }

    if (preco !== "") {
      filtradoTemp = filtradoTemp.filter((lugar) => lugar.preco == preco);
    }

    setFiltrado(filtradoTemp);
  }, [regiao, categoria, preco, item]);


  return (
    <div className="eventos">
      <Cabecalho />

      <div className="categoria">
        <img className="cidade" src={Cidade} />

        <div className="header">
          <h1>encontre o lugar perfeito para você</h1>
          <p>explore nossas opções</p>
        </div>
      </div>

      <div className="filtros">
        <select className="regiao" value={regiao} onChange={(e) => setRegiao(e.target.value)}>
          <option value="">Todas as regiões</option>
          <option value="Zona Norte">Zona Norte</option>
          <option value="Zona Sul">Zona Sul</option>
          <option value="Zona Leste">Zona Leste</option>
          <option value="Zona Oeste">Zona Oeste</option>
          <option value="Centro">Centro</option>
        </select>


        <select className="preco" value={preco} onChange={(e) => setPreco(e.target.value)}>
          <option value="">Todos os preços</option>
          <option value="Gratuito">Gratuito</option>
          <option value="Pago">Pago</option>
        </select>
      </div>

      <div className="lista-cartoes">
        {filtrado.map((item) => (
          <div key={item.id} onClick={() => verDetalhes(item)}>
            <Cartao item={item} />
          </div>
        ))}
      </div>

      <Rodape />
    </div>
  );
}
