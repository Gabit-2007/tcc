import express from 'express';
import jwt from 'jsonwebtoken';
import * as lugaresController from './controller/lugaresController.js';
import * as adminController from './controller/adminController.js';
import * as userController from './controller/usuariocontroller.js';
import * as comentarioController from './controller/comentarioController.js'

let router = express.Router();
let secret = 'rotacult_secret_key';


function autenticarToken(req, res, next) {
    let authHeader = req.headers['authorization'];
    let token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).json({ error: 'Token não fornecido' });

    jwt.verify(token, secret, (err, user) => {
        if (err) return res.status(403).json({ error: 'Token inválido ou expirado' });
        req.user = user;
        next();
    });
}


router.post('/login', adminController.login);
router.get('/lugares', lugaresController.listar);
router.get('/lugares/:id', lugaresController.buscarPorId);
router.get('/comentario/:id', comentarioController.getComentarios);
router.post('/user', userController.postUsuario);
router.get('/user', userController.getUsuarios);
router.post('/userlogin', userController.loginUsuario)

// Rotas protegidas
router.post('/lugares', autenticarToken, lugaresController.criar);
router.put('/lugares/:id', autenticarToken, lugaresController.atualizar);
router.delete('/lugares/:id', autenticarToken, lugaresController.deletar);
router.post('/comentario/:id', autenticarToken, comentarioController.postComentario);

export default router;
