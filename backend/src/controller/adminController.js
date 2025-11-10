import jwt from 'jsonwebtoken';
import * as repository from '../repository/adminRepository.js';

let secret = 'rotacult_secret_key';

export function login(req, res) {
    let { usuario, senha } = req.body;

    repository.getAdminByUsuario(usuario, (err, results) => {
        if (err) return res.status(500).json({ error: 'Erro no servidor' });

        if (results.length === 0) {
            return res.status(401).json({ error: 'Usuário não encontrado' });
        }

        let admin = results[0];

        if (admin.senha !== senha) {
            return res.status(401).json({ error: 'Senha incorreta' });
        }

        let token = jwt.sign({ id: admin.id, usuario: admin.usuario }, secret, { expiresIn: '1h' });
        res.json({
    message: 'Login bem-sucedido',
    token,
    usuario: {
        usuario: admin.usuario
    }
});

    });
}
