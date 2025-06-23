import { Router } from 'express';
import { createRelacion, getRelaciones } from '../Controllers/relacion.controller.js';

const router = Router();

/**
 * @swagger
 * /relaciones:
 *   post:
 *     summary: Crear una relación entre CIs
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - ci_padre_id
 *               - ci_hijo_id
 *               - tipo_relacion
 *             properties:
 *               ci_padre_id:
 *                 type: integer
 *               ci_hijo_id:
 *                 type: integer
 *               tipo_relacion:
 *                 type: string
 *     responses:
 *       201:
 *         description: Relación creada exitosamente
 */
router.post('/relaciones', createRelacion);

/**
 * @swagger
 * /relaciones/{id}:
 *   get:
 *     summary: Obtener todas las relaciones de un CI
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de relaciones
 */
router.get('/relaciones/:id', getRelaciones);

export default router;