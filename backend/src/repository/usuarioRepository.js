import connection from '../connection.js';

export function createUsuario(usuario, callback) {
    let sql = 'insert into usuario (nome, email, senha) values (?, ?, ?)';
    let values = [usuario.nome, usuario.email, usuario.senha];
    connection.query(sql, values, callback);
}

export function getUsuarioEmail(email, callback) {
    let sql = 'select * from usuario where email = ?';
    connection.query(sql, [email], callback);
}

export function getAllUsuarios(callback) {
    let sql = 'select id, nome, email, senha from usuario';
    connection.query(sql, callback);
}
