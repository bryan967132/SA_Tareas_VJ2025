DROP DATABASE IF EXISTS sa_t3;
CREATE DATABASE IF NOT EXISTS sa_t3;

CREATE TABLE IF NOT EXISTS sa_t3.configuration_items (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    tipo VARCHAR(25) NOT NULL CHECK (tipo IN ('servidor', 'base de datos', 'aplicacion', 'otros')),
    descripcion VARCHAR(200),
    numero_serie VARCHAR(15),
    version VARCHAR(15),
    fecha_adquisicion DATE,
    estado_actual VARCHAR(15) NOT NULL CHECK (estado_actual IN ('activo', 'inactivo', 'mantenimiento', 'retirado')),
    ubicacion_fisica VARCHAR(100),
    propietario_responsable VARCHAR(100),
    niveles_seguridad VARCHAR(15),
    cumplimiento VARCHAR(15),
    estado_configuracion VARCHAR(15),
    numero_licencia VARCHAR(15),
    fecha_vencimiento DATE,
    ambiente VARCHAR(15) NOT NULL CHECK (ambiente IN ('DEV', 'QA', 'PROD')),
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS sa_t3.cambios_ci (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    fecha DATE NOT NULL,
    descripcion VARCHAR(100),
    ci_id INT NOT NULL,
    FOREIGN KEY (ci_id) REFERENCES configuration_items(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS sa_t3.documentacion_ci (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    url_documentacion VARCHAR(200) NOT NULL,
    ci_id INT NOT NULL,
    FOREIGN KEY (ci_id) REFERENCES configuration_items(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS sa_t3.incidentes_problemas_ci (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    enlace VARCHAR(255) NOT NULL,
    ci_id INT NOT NULL,
    FOREIGN KEY (ci_id) REFERENCES configuration_items(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS sa_t3.relaciones_ci (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    tipo_relacion VARCHAR(15) NOT NULL,
    ci_padre_id INT NOT NULL,
    ci_hijo_id INT NOT NULL,
    FOREIGN KEY (ci_padre_id) REFERENCES configuration_items(id) ON DELETE CASCADE,
    FOREIGN KEY (ci_hijo_id) REFERENCES configuration_items(id) ON DELETE CASCADE
);