import connection from '../connection.js';


export function createComentario(comentario, callback) {
    let sql = 'insert into comentario (email, comentario, id_lugar ) values (?, ?, ?)';
    let values = [comentario.email, comentario.comentario, comentario.id_lugar];
    connection.query(sql, values, callback);
}

export function getComentariosByLugar(id_lugar, callback) {
    let sql = 'SELECT c.id_comentario, u.nome AS nome_usuario, c.comentario FROM comentario c JOIN usuario u ON c.email = u.email WHERE c.id_lugar = ?';
    connection.query(sql, [id_lugar], callback);
}
