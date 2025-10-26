# Plantilla Base de API de Servicio

![GitHub](https://img.shields.io/github/license/your-username/your-repo)
![npm](https://img.shields.io/npm/v/base-service)
![GitHub last commit](https://img.shields.io/github/last-commit/your-username/your-repo)

Esta es una plantilla fundamental para construir APIs robustas y escalables en Node.js, utilizando una arquitectura limpia y tecnologías modernas. El proyecto está preconfigurado para agilizar el desarrollo, las pruebas y el despliegue.

## ✨ Características

*   **Arquitectura Limpia:** El código está organizado en capas (Dominio, Aplicación, Infraestructura y Presentación) para asegurar una clara separación de responsabilidades y un bajo acoplamiento.
*   **TypeScript:** Todo el proyecto está escrito en TypeScript, proporcionando tipado estático para un desarrollo más seguro y mantenible.
*   **Base de Datos con Prisma:** Utiliza Prisma como ORM para una interacción sencilla y segura con una base de datos PostgreSQL.
*   **Servidor con Express:** Implementa un servidor web rápido y minimalista con Express.
*   **Variables de Entorno:** Gestiona la configuración de la aplicación a través de variables de entorno con `dotenv`.

## 🚀 Stack Tecnológico

*   **Node.js:** Entorno de ejecución de JavaScript.
*   **Express:** Framework para la creación de APIs web.
*   **TypeScript:** Superset de JavaScript que añade tipado estático.
*   **Prisma:** ORM para Node.js y TypeScript.
*   **PostgreSQL:** Base de datos relacional.
*   **Nodemon:** Herramienta para reiniciar automáticamente el servidor durante el desarrollo.

## 📂 Estructura del Proyecto

El proyecto sigue una arquitectura limpia, dividiendo el código en las siguientes capas:

*   `src/domain`: Contiene la lógica de negocio principal, incluyendo entidades y repositorios (interfaces).
*   `src/application`: Orquesta los casos de uso de la aplicación, utilizando los repositorios del dominio.
*   `src/infrastructure`: Implementa los detalles técnicos, como la base de datos (Prisma) y servicios externos.
*   `src/presentation`: Expone la aplicación al mundo exterior, manejando las peticiones HTTP (controladores y rutas de Express).
*   `src/config`: Contiene la configuración de la aplicación, como la gestión de variables de entorno.
*   `prisma/`: Contiene el esquema de la base de datos y las migraciones.

## 🏁 Cómo Empezar

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local.

### 1. Prerrequisitos

*   Node.js (v18 o superior)
*   NPM
*   Docker (opcional, para ejecutar una base de datos PostgreSQL)

### 2. Clonar el Repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd base-service
```

### 3. Instalar Dependencias

```bash
npm install
```

### 4. Configurar Variables de Entorno

Copia el archivo `.env.template` y renómbralo a `.env`. Luego, actualiza las variables con tus credenciales de la base de datos.

```bash
cp .env.template .env
```

### 5. Aplicar Migraciones de la Base de Datos

Asegúrate de que tu base de datos PostgreSQL esté en funcionamiento y luego ejecuta el siguiente comando para crear las tablas:

```bash
npx prisma migrate dev
```

### 6. Iniciar el Servidor de Desarrollo

```bash
npm run dev
```

El servidor se iniciará en el puerto especificado en tu archivo `.env` (por defecto, el puerto 3000).

## 📜 Scripts Disponibles

*   `npm run dev`: Inicia el servidor en modo de desarrollo con Nodemon.
*   `npm run build`: Compila el código de TypeScript a JavaScript.
*   `npm run start`: Ejecuta la versión de producción del proyecto (compilada).

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.
