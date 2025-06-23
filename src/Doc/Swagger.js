import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'API CMDB',
        version: '1.0.0',
        description: 'API RESTful para la gestión de Configuration Items (CIs) y sus relaciones.',
    },
    servers: [
        {
            url: 'http://localhost:3000/api',
        },
    ],
};

const options = {
    swaggerDefinition,
    apis: ['./src/Routes/*.js'], // Aquí apunta a donde están tus rutas
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerSpec, swaggerUi };