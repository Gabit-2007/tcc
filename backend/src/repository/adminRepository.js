import connection from '../connection.js';

export function getAdminByUsuario(usuario, callback) {
    let sql = 'select * from administrador WHERE usuario = ?';
    connection.query(sql, [usuario], callback);
}
