import * as repository from '../repository/lugaresRepository.js';

export function listar(req, res) {
    repository.getAllLugares((err, results) => {
        if (err) return res.status(500).json({ error: 'Erro ao buscar lugares' });
        res.json(results);
    });
}

export function buscarPorId(req, res) {
    let id = req.params.id;
    repository.getLugarById(id, (err, results) => {
        if (err) return res.status(500).json({ error: 'Erro ao buscar lugar' });
        res.json(results[0]);
    });
}

export function criar(req, res) {
    let novoLugar = req.body;
    repository.createLugar(novoLugar, (err, result) => {
        if (err) return res.status(500).json({ error: 'Erro ao criar lugar' });
        res.status(201).json({ id: result.insertId, ...novoLugar });
    });
}

export function atualizar(req, res) {
    let id = req.params.id;
    let lugarAtualizado = req.body;
    repository.updateLugar(id, lugarAtualizado, (err) => {
        if (err) return res.status(500).json({ error: 'Erro ao atualizar lugar' });
        res.json({ message: 'Lugar atualizado com sucesso' });
    });
}

export function deletar(req, res) {
    let id = req.params.id;
    repository.deleteLugar(id, (err) => {
        if (err) return res.status(500).json({ error: 'Erro ao deletar lugar' });
        res.json({ message: 'Lugar deletado com sucesso' });
    });
}
