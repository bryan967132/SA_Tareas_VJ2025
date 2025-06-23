import pool from '../Config/DBConnection.js';

export async function getCIs(_, res) {
    const [ rows ] = await pool.query('SELECT * FROM configuration_items');
    res.json(rows);
}

export async function getCI(req, res) {
    const { id } = req.params.id
    const [ rows ] = await pool.query('SELECT * FROM configuration_items WHERE id = ?', [id]);
    res.json(rows);
}

export async function createCI(req, res) {
    const { nombre, tipo, descripcion, estado_actual, ambiente } = req.body;
    const [result] = await pool.query(
        'INSERT INTO configuration_items (nombre, tipo, descripcion, estado_actual, ambiente) VALUES (?, ?, ?, ?, ?)',
        [nombre, tipo, descripcion, estado_actual, ambiente]
    );
    res.status(201).json({ id: result.insertId, ...req.body });
}

export async function updateCI(req, res) {
    const { id } = req.params;
    const { nombre, tipo, descripcion, estado_actual, ambiente } = req.body;
    await pool.query(
        'UPDATE configuration_items SET nombre = ?, tipo = ?, descripcion = ?, estado_actual = ?, ambiente = ? WHERE id = ?',
        [nombre, tipo, descripcion, estado_actual, ambiente, id]
    );
    await pool.query(
        'INSERT INTO ci_cambios (ci_id, descripcion_cambio) VALUES (?, ?)',
        [id, 'Actualización de CI']
    );
    res.json({ message: 'CI actualizado correctamente' });
}

export async function deleteCI(req, res) {
    const { id } = req.params.id
    await pool.query('DELETE FROM configuration_items WHERE id = ?', [id]);
    res.json({ message: 'CI eliminado correctamente' });
}