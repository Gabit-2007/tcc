export default function Detalhes(imagem, nome, detalhe, localizacao, rotas, valor, avaliacao, horario){
    return(
        <div>
            <img src={imagem} />
            <h1>{nome}</h1>
            <h2>{detalhe}</h2>

            <p>{localizacao}</p>
            <p>{rotas}</p>
            <p>{valor}</p>
            <p>{avaliacao}</p>
            <p>{horario}</p>
        </div>
    );
}