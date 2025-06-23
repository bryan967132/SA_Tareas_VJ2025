import pool from '../Config/DBConnection.js';

export async function createRelacion(req, res) {
    const { ci_padre_id, ci_hijo_id, tipo_relacion } = req.body;

    const [result] = await pool.query(
        'INSERT INTO ci_relaciones (ci_padre_id, ci_hijo_id, tipo_relacion) VALUES (?, ?, ?)',
        [ci_padre_id, ci_hijo_id, tipo_relacion]
    );

    res.status(201).json({ id: result.insertId, ci_padre_id, ci_hijo_id, tipo_relacion });
}

export async function getRelaciones(req, res) {
    const { id } = req.params;
    const [rows] = await pool.query(
        'SELECT * FROM ci_relaciones WHERE ci_padre_id = ? OR ci_hijo_id = ?',
        [id, id]
    );
    res.json(rows);
}