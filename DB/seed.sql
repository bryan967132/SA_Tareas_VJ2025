INSERT INTO sa_t3.configuration_items (nombre, tipo, descripcion, numero_serie, version, fecha_adquisicion, estado_actual, ubicacion_fisica, propietario_responsable, niveles_seguridad, cumplimiento, estado_configuracion, numero_licencia, fecha_vencimiento, ambiente)
VALUES 
('Servidor Web 1', 'servidor', 'Servidor Apache en QA', 'SN1234', 'v2.4', '2023-01-10', 'activo', 'Data Center 1', 'Juan Pérez', 'Alta', 'ISO 27001', 'Configurado', 'LIC-001', '2026-01-10', 'QA'),
('Servidor Web 2', 'servidor', 'Servidor Nginx en DEV', 'SN5678', 'v1.18', '2023-05-15', 'mantenimiento', 'Data Center 2', 'María Gómez', 'Media', 'Ninguno', 'Configurado', 'LIC-002', '2025-05-15', 'DEV'),
('Base de Datos 1', 'base de datos', 'MySQL 8 para QA', 'SN3456', 'v8.0', '2023-02-20', 'activo', 'Data Center 1', 'Carlos López', 'Alta', 'ISO 27001', 'Configurado', 'LIC-003', '2026-02-20', 'QA'),
('Base de Datos 2', 'base de datos', 'Postgres para DEV', 'SN7890', 'v14', '2023-06-01', 'activo', 'Data Center 2', 'Ana Torres', 'Media', 'GDPR', 'Configurado', 'LIC-004', '2025-06-01', 'DEV'),
('Aplicación Web 1', 'aplicacion', 'Aplicación Node.js QA', 'SN9999', 'v1.0', '2023-03-12', 'activo', 'Oficina Central', 'Luis Morales', 'Alta', 'ISO 27001', 'En pruebas', 'LIC-005', '2025-03-12', 'QA'),
('Aplicación Web 2', 'aplicacion', 'Aplicación Express DEV', 'SN8888', 'v1.1', '2023-07-10', 'activo', 'Oficina Central', 'Pedro Martínez', 'Media', 'Ninguno', 'En desarrollo', 'LIC-006', '2024-07-10', 'DEV');

INSERT INTO sa_t3.relaciones_ci (ci_padre_id, ci_hijo_id, tipo_relacion) VALUES
(1, 3, 'depende de'),
(5, 1, 'se ejecuta en'),
(2, 4, 'depende de'),
(6, 2, 'se ejecuta en');

INSERT INTO sa_t3.cambios_ci (ci_id, fecha, descripcion) VALUES
(1, '2024-01-01', 'Registro inicial del servidor.'),
(2, '2024-01-01', 'Registro inicial del servidor.'),
(3, '2024-01-01', 'Registro inicial de la base de datos.'),
(4, '2024-01-01', 'Registro inicial de la base de datos.'),
(5, '2024-01-01', 'Registro inicial de la aplicación web.'),
(6, '2024-01-01', 'Registro inicial de la aplicación web.');

INSERT INTO sa_t3.documentacion_ci (ci_id, url_documentacion) VALUES
(1, 'https://url_documentacion_ejemplo.com'),
(2, 'https://url_documentacion_ejemplo.com'),
(3, 'https://url_documentacion_ejemplo.com'),
(4, 'https://url_documentacion_ejemplo.com'),
(5, 'https://url_documentacion_ejemplo.com'),
(6, 'https://url_documentacion_ejemplo.com');

INSERT INTO sa_t3.incidentes_problemas_ci (ci_id, enlace) VALUES
(1, 'https://url_incidente_ejemplo.com'),
(3, 'https://url_incidente_ejemplo.com'),
(5, 'https://url_incidente_ejemplo.com'),
(6, 'https://url_incidente_ejemplo.com');