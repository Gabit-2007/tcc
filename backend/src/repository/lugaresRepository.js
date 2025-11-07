import connection from '../connection.js';

export function getAllLugares(callback) {
    let sql = 'select * from lugares';
    connection.query(sql, callback);
}

export function getLugarById(id, callback) {
    let sql = 'select * from lugares where id = ?';
    connection.query(sql, [id], callback);
}

export function createLugar(lugar, callback) {
    let sql = 'insert into lugares (nome, localizacao, rota, imagem, avaliacao, horario, classificacao, categoria, preco, regiao) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    let values = [lugar.nome, lugar.localizacao, lugar.rota, lugar.imagem, lugar.avaliacao, lugar.horario, lugar.classificacao, lugar.categoria, lugar.preco, lugar.regiao];
    connection.query(sql, values, callback);
}

export function updateLugar(id, lugar, callback) {
    let sql = 'update lugares set nome=?, localizacao=?, rota=?, imagem=?, avaliacao=?, horario=?, classificacao=?, categoria=?, preco=?, regiao=? where id=?';
    let values = [lugar.nome, lugar.localizacao, lugar.rota, lugar.imagem, lugar.avaliacao, lugar.horario, lugar.classificacao, lugar.categoria, lugar.preco, lugar.regiao, id];
    connection.query(sql, values, callback);
}

export function deleteLugar(id, callback) {
    let sql = 'delete from lugares where id=?';
    connection.query(sql, [id], callback);
}
