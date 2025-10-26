# ✍️ Bitácora de Desarrollo

Este documento registra los pasos y decisiones clave tomadas durante la construcción de la API, permitiendo reconstruir el proceso de pensamiento en el futuro.

## Fase 1: Configuración Inicial del Proyecto
*Fecha: 2025-SEP-23*

1.  **Inicialización del Proyecto:** Se inicializó un nuevo proyecto de Node.js con `npm init -y`.
2.  **Instalación de Nodemon:** Se añadió Nodemon (`npm i -D nodemon`) para reiniciar automáticamente el servidor durante el desarrollo.
3.  **Configuración de TypeScript:** Se instaló TypeScript (`npm i -D typescript @types/node`) y se configuró generando un archivo `tsconfig.json` (`npx tsc --init --outDir dist/ --rootDir src`).
4.  **Scripts de NPM:** Se definieron los scripts `dev`, `build` y `start` en `package.json` para facilitar el flujo de trabajo de desarrollo y producción.
5.  **Gestión de Entorno:** Se instaló `dotenv` (`npm i dotenv`) para gestionar de forma segura las variables de entorno.

## Fase 2: Configuración de la Base de Datos con Prisma
*Fecha: 2025-SEP-23*

1.  **Instalación de Prisma:** Se añadió la CLI de Prisma como dependencia de desarrollo (`npm i -D prisma`).
2.  **Inicialización de Prisma:** Se ejecutó `npx prisma init --datasource-provider PostgreSQL` para configurar Prisma con una base de datos PostgreSQL.
3.  **Migración Inicial:** Se ejecutó `npx prisma migrate dev` para crear la primera migración y aplicar el esquema a la base de datos.

## Fase 3: Creación del Servidor Web con Express
*Fecha: 2025-OCT-02*

1.  **Instalación de Express:** Se instaló el framework Express (`npm i express`) junto con sus tipos de TypeScript (`npm i -D @types/express`).
2.  **Servidor de Archivos Estáticos:** Se creó una carpeta `public` para servir archivos estáticos, como una página de bienvenida (`index.html`).
3.  **Clase `Server`:** La lógica del servidor Express se encapsuló en una clase `Server` en `src/server.ts` para una mejor organización y reutilización.
4.  **Punto de Entrada:** Se creó el archivo `src/app.ts` como punto de entrada de la aplicación, responsable de instanciar y arrancar el servidor.

## Fase 4: Implementación de Arquitectura Limpia
*Fecha: 2025-OCT-25*

El proyecto fue reestructurado para seguir los principios de la Arquitectura Limpia, separando el código en las siguientes capas:

*   **`domain`**: Contiene la lógica de negocio pura, incluyendo:
    *   `entities`: Objetos de negocio.
    *   `repositories`: Interfaces que definen cómo se accede a los datos.
*   **`application`**: Orquesta los casos de uso de la aplicación.
    *   `use-cases`: Implementan la lógica de funcionalidades específicas.
    *   `dtos`: (Data Transfer Objects) para transferir datos entre capas.
*   **`infrastructure`**: Contiene las implementaciones concretas de las abstracciones del dominio.
    *   `datasource`: Implementación de repositorios (ej. con Prisma).
*   **`presentation`**: La capa más externa, responsable de la interacción con el usuario (API REST).
    *   `controllers`: Manejan las peticiones y respuestas HTTP.
    *   `routes`: Definen las rutas de la API.
*   **`config`**: Contiene la configuración de la aplicación, como la carga de variables de entorno.

Durante esta fase, se resolvió un problema de compatibilidad entre los módulos de `ECMAScript` (import/export) y `CommonJS` ajustando `package.json` con `"type": "module"` y actualizando `tsconfig.json` para usar `"module": "NodeNext"` y `"moduleResolution": "NodeNext"`.

## Fase 5: Refactorización para una Plantilla Genérica
*Fecha: 2025-OCT-25*

El proyecto fue refactorizado para servir como una plantilla neutral para la creación de nuevos microservicios.

1.  **Renombrar Componentes:** Todos los componentes relacionados con "inventory" fueron renombrados a un término más genérico, "resource".
    *   `inventory_controller.ts` -> `resource_controller.ts`
    *   `inventory_routes.ts` -> `resource_routes.ts`
2.  **Código Actualizado:** El código fue actualizado para reflejar la nueva convención de nomenclatura.
3.  **`package.json` Actualizado:** El nombre del proyecto fue cambiado de `inventory-service` a `base-service`.