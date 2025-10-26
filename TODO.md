# 📝 TODO - Mejoras Futuras

Este archivo lista las mejoras sugeridas para hacer esta plantilla de API aún más robusta y lista para producción.

## 1. Pruebas Automatizadas

-   **Descripción:** El proyecto actualmente carece de una suite de pruebas automatizadas. Añadir pruebas es crucial para asegurar la calidad del código, prevenir regresiones y facilitar la refactorización.
-   **Recomendación:** Integrar un framework de pruebas como **Jest** o **Vitest**. Empezar escribiendo pruebas unitarias para las capas de dominio y aplicación, y luego añadir pruebas de integración para la capa de presentación.

## 2. Validación de Entradas

-   **Descripción:** No hay validación para los datos de entrada en los controladores. Esto puede llevar a errores y vulnerabilidades de seguridad.
-   **Recomendación:** Usar una librería como **Zod** para definir esquemas y validar el cuerpo de la petición, los parámetros y las consultas. Esto hará tu API más robusta y prevendrá que datos incorrectos entren en tu sistema.

## 3. Manejo de Errores Centralizado

-   **Descripción:** El proyecto se beneficiaría de un middleware de manejo de errores global. Esto te permitiría capturar todos los errores en un solo lugar y enviar una respuesta de error consistente al cliente.
-   **Recomendación:** Crear un middleware de manejo de errores personalizado en Express para capturar y procesar errores.

## 4. Logging Estructurado

-   **Descripción:** Para una aplicación lista para producción, necesitas un mecanismo de logging estructurado para depuración y monitoreo.
-   **Recomendación:** Integrar una librería de logging como **Winston** o **Pino** para registrar información importante, como errores, advertencias y peticiones.

## 5. Contenerización con Docker

-   **Descripción:** Para una arquitectura de microservicios, es altamente recomendable contenerizar tus aplicaciones.
-   **Recomendación:** Crear un `Dockerfile` para construir una imagen de Docker de tu aplicación. Esto te permitirá ejecutar tu aplicación en un entorno consistente y aislado.

## 6. Pipeline de CI/CD

-   **Descripción:** Para automatizar el proceso de pruebas y despliegue, deberías configurar un pipeline de CI/CD.
-   **Recomendación:** Usar una herramienta como **GitHub Actions**, **GitLab CI**, o **Jenkins** para crear un pipeline que automáticamente ejecute las pruebas y despliegue tu aplicación cuando subas nuevo código.
