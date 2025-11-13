import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../connection.js";
import { createUsuario, getUsuarioEmail, getAllUsuarios } from "../repository/usuarioRepository.js";


export function postUsuario(req, res) {
    let usuario = req.body;

    if (!usuario.nome || !usuario.email || !usuario.senha) {
        return res.status(400).json({ message: "Preencha todos os campos." });
    }

    createUsuario(usuario, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Erro ao cadastrar usuário", details: err });
        } else {
            res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
        }
    });
}

export function loginUsuario(req, res) {
    let { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(400).json({ message: "Informe email e senha." });
    }

    getUsuarioEmail(email, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        if (result.length === 0) return res.status(404).json({ message: "Usuário não encontrado" });

        let usuario = result[0];

        if (senha !== usuario.senha) {
            return res.status(401).json({ message: "Senha incorreta" });
        }

        let token = jwt.sign(
            { id: usuario.id, email: usuario.email },
            JWT_SECRET,
            { expiresIn: "2h" }
        );

        res.status(200).json({
            message: "Login realizado com sucesso",
            token
        });
    });
}


export function getUsuarios(req, res) {
    getAllUsuarios((err, result) => {
        if (err) res.status(500).json({ error: err });
        else res.status(200).json(result);
    });
}
