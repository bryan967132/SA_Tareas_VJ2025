import { Router } from 'express';
import { getCIs, getCI, createCI, updateCI, deleteCI } from '../Controllers/ci.controller.js';

const router = Router();

/**
 * @swagger
 * /cis:
 *   get:
 *     summary: Obtener todos los Configuration Items
 *     responses:
 *       200:
 *         description: Lista de CIs
 */
router.get('/cis', getCIs);

/**
 * @swagger
 * /cis/{id}:
 *   get:
 *     summary: Obtener un CI por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: CI encontrado
 *       404:
 *         description: CI no encontrado
 */
router.get('/cis/:id', getCI);

/**
 * @swagger
 * /cis:
 *   post:
 *     summary: Crear un nuevo CI
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *               - tipo
 *               - estado_actual
 *               - ambiente
 *             properties:
 *               nombre:
 *                 type: string
 *               tipo:
 *                 type: string
 *               descripcion:
 *                 type: string
 *               estado_actual:
 *                 type: string
 *               ambiente:
 *                 type: string
 *     responses:
 *       201:
 *         description: CI creado exitosamente
 */
router.post('/cis', createCI);

/**
 * @swagger
 * /cis/{id}:
 *   put:
 *     summary: Actualizar un CI
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               tipo:
 *                 type: string
 *               descripcion:
 *                 type: string
 *               estado_actual:
 *                 type: string
 *               ambiente:
 *                 type: string
 *     responses:
 *       200:
 *         description: CI actualizado correctamente
 */
router.put('/cis/:id', updateCI);

/**
 * @swagger
 * /cis/{id}:
 *   delete:
 *     summary: Eliminar un CI
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: CI eliminado correctamente
 */
router.delete('/cis/:id', deleteCI);

export default router;