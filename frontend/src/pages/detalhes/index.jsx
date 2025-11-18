import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import api from "../../api";
import "./styles.scss";
import Cabecalho from "../../components/cabecalho";

export default function DetalhesPage() {
  const [item, setItem] = useState({});
  const [coment, setComent] = useState([]);
  const [novocom, setNovocom] = useState("");
  const { state } = useLocation();
  const navigate = useNavigate();

  async function listarComentarios(id_lugar) {
    try {
      const response = await api.get(`/comentario/${id_lugar}`);
      setComent(response.data);
    } catch (error) {
      console.error("Erro ao listar comentários:", error);
    }
  }

  async function adicionarComentario() {
    const nomeUsuario = localStorage.getItem("NOME_USUARIO");
    const token = localStorage.getItem("TOKEN");

    if (!token || !nomeUsuario) {
      alert("Você não está logado. Faça login para comentar!");
      navigate("/login")
      return;
    }

    try {
      await api.post(`/comentario/${item.id}`, {
        comentario: novocom,
      });
      alert("Comentário publicado com sucesso!");
      setNovocom("");
      listarComentarios(item.id);
    } catch (error) {
      console.error(error);
      alert("Erro ao publicar comentário.");
    }
  }

  useEffect(() => {
    if (state?.item) {
      setItem(state.item);
      listarComentarios(state.item.id);
    }
  }, [state]);

  return (
    <div>
      <Cabecalho />
      <div className="tudo">
        <div className="imagem">
          <img src={item.imagem} alt={item.nome} />
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

          <a href={item.rota}>
            <button>Visitar!</button>
          </a>

          <div className="coment">
    <h2>Comentários</h2>
    <textarea
      placeholder="Comente sobre este lugar!"
      value={novocom}
      onChange={(e) => {
        setNovocom(e.target.value);
        e.target.style.height = "auto";
        e.target.style.height = e.target.scrollHeight + "px"; 
      }}
      rows={1} 
      className="textarea-coment"
    />
    <button className="publ" onClick={adicionarComentario}>Publicar</button>
  </div>
        </div>

         <div className="listarComen">
            {coment.length > 0 ? (
              coment.map((c, i) => (
                <div className="coments" key={i}>
                  <h3>{c.nome_usuario}</h3>
                  <p>{c.comentario}</p>
                </div>
              ))
            ) : (
              <p>Sem comentários ainda.</p>
            )}
          </div>
      </div>
    </div>
  );
}
