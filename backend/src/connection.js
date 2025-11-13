import mysql from 'mysql2';

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'rotacult'
});

connection.connect((error) => {
    if (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    } else {
        console.log('Conectado ao banco de dados com sucesso!');
    }
});

export const JWT_SECRET = "rotacult_secret_key";

export default connection;
