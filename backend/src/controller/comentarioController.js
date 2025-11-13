import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../connection.js"; 
import { createComentario, getComentariosByLugar } from "../repository/comentarioRepository.js";

function autenticar(req, res, next) {
    let token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Token não fornecido" });
    }

    try {
        let decoded = jwt.verify(token, JWT_SECRET);
        req.usuario = decoded;
        next();
    } catch {
        return res.status(403).json({ message: "Token inválido ou expirado" });
    }
}


export function postComentario(req, res) {
    autenticar(req, res, () => {
        let comentario = {
            email: req.usuario.email,
            comentario: req.body.comentario,
            id_lugar: req.params.id,
        };

        if (!comentario.comentario || !comentario.id_lugar) {
            return res.status(400).json({ message: "Comentário e id_lugar são obrigatórios." });
        }

        createComentario(comentario, (err, result) => {
            if (err) {
                res.status(500).json({ error: "Erro ao adicionar comentário", details: err });
            } else {
                res.status(201).json({ message: "Comentário adicionado com sucesso!" });
            }
        });
    });
}

export function getComentarios(req, res) {
    let id_lugar = req.params.id;

    getComentariosByLugar(id_lugar, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Erro ao buscar comentários", details: err });
        } else {
            res.status(200).json(result);
        }
    });
}
