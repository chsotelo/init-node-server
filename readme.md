# server-init

Este proyecto es una API REST construida con Node.js y Express. La API incluye autenticación JWT, validación de datos, manejo de errores y conexión a una base de datos MongoDB.

Es la base / inicializacion para proyectos futuros.

## Estructura del Proyecto

### Archivos y Directorios Principales

- **config/**: Contiene la configuración del proyecto.

  - `config.js`: Configuración de variables de entorno.

- **env/**: Contiene ejemplos de archivos de entorno.

  - `.env.example`: Ejemplo de archivo de configuración de entorno.

- **libs/**: Librerías y utilidades.

  - `db.js`: Conexión a la base de datos MongoDB.

- **middlewares/**: Middlewares para la API.

  - `auth.handler.js`: Middleware para la autenticación JWT.
  - `error.handler.js`: Middlewares para el manejo de errores.
  - `validator.handler.js`: Middleware para la validación de datos.

- **models/**: Modelos de datos.

  - `example.js`: Modelo de ejemplo.

- **routes/**: Rutas de la API.

  - `example.router.js`: Rutas de ejemplo.
  - `index.js`: Archivo principal de rutas.

- **schemas/**: Esquemas de validación.

  - `example.schema.js`: Esquema de validación de ejemplo.

- **services/**: Servicios de la API.

  - `example.service.js`: Servicio de ejemplo.

- **server.js**: Configuración y arranque del servidor.

## Instalación

1. Clona el repositorio:

   ```sh
   git clone <URL_DEL_REPOSITORIO>
   cd ch-server-init

   ```

2. Instala las dependencias:

   ```
   npm install
   ```

3. Configura las variables de entorno:

   - Copia el archivo .env.example y renómbralo según el entorno (.env.development, .env.production, etc.).
   - Llena las variables de entorno necesarias en el archivo copiado.

## Scripts de NPM

- `npm run demo`: Ejecuta el servidor en modo demo.
- `npm run dev`: Ejecuta el servidor en modo desarrollo.
- `npm run prod`: Ejecuta el servidor en modo producción.
- `npm run start`: Inicia el servidor.
- `npm run lint`: Ejecuta ESLint para analizar el código.

## USAR
