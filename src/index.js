import { swaggerSpec, swaggerUi } from './Doc/Swagger.js';
import express from 'express';
import ciRoutes from './Routes/ci.routes.js';
import relacionRoutes from './Routes/relacion.routes.js';
import dotenv from 'dotenv'

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api', ciRoutes);
app.use('/api', relacionRoutes);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 3000;

app.listen(3000, () => console.log(`Servidor en http://localhost:${PORT}`));