import connection from '../connection.js';


export function createComentario(comentario, callback) {
    let sql = 'insert into comentario (email, comentario, id_lugar ) values (?, ?, ?)';
    let values = [comentario.email, comentario.comentario, comentario.id_lugar];
    connection.query(sql, values, callback);
}

export function getComentariosByLugar(id_lugar, callback) {
    let sql = 'select id_comentario, email, comentario from comentario where id_lugar = ?';
    connection.query(sql, [id_lugar], callback);
}
