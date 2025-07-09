# Documentación Técnica

Este proyecto ha sido desarrollado utilizando el framework **NestJS** y sigue una arquitectura **hexagonal (puertos y adaptadores)**, lo que permite mantener el código limpio, desacoplado y fácilmente escalable. La estructura modular facilita la incorporación de nuevas funcionalidades y el mantenimiento a largo plazo.

---

## Stack Tecnológico

- **Backend:** [NestJS](https://nestjs.com/) (TypeScript)
- **Base de datos:** [PostgreSQL](https://www.postgresql.org/)
- **Administrador de BD:** [Adminer](https://www.adminer.org/)
- **Contenedores:** [Docker](https://www.docker.com/) (para orquestar y levantar los servicios)
- **Arquitectura:** Hexagonal (Ports & Adapters) + Principios SOLID + DDD (Domain-Driven Design)
- **Documentación de API:** [Swagger](https://swagger.io/) + [Redoc](https://redoc.ly/)
- **Validaciones:** Pipes globales personalizados
- **Variables de entorno:** Uso de archivos `.env` y `.env.example` para configuración segura y flexible
- **Diagramas:** Generados con [D2](https://d2lang.com/) para visualizar la arquitectura y los flujos principales

---

## Principios y buenas prácticas aplicadas

- **Separación de responsabilidades:** Cada módulo y capa tiene una responsabilidad clara.
- **Inyección de dependencias:** Facilita el testeo y desacopla las implementaciones.
- **DTOs y validaciones:** Uso de Data Transfer Objects para validar y tipar la entrada/salida de datos.
- **Gestión de errores:** Excepciones personalizadas para cada dominio.
- **Patrones de diseño:** Uso de patrones como repositorio, servicio, y resultado (Result Pattern).
- **Testing:** Estructura preparada para pruebas unitarias y de integración (no incluidas en este resumen).

---

## Estructura del Proyecto

La estructura sigue el enfoque modular de NestJS, combinada con la arquitectura hexagonal. Cada módulo representa un dominio del negocio y está dividido en capas:

- **application:** Lógica de aplicación, DTOs, servicios, casos de uso.
- **domain:** Entidades, excepciones y puertos (interfaces de entrada y salida).
- **infrastructure:** Controladores, repositorios y adaptadores concretos.
- **shared:** Código reutilizable entre módulos (constantes, decoradores, patrones).

```text
📦src
 ┣ 📂core
 ┃ ┗ 📂configs
 ┃ ┃ ┣ 📜jsonwebtoken.config.ts
 ┃ ┃ ┣ 📜redoc.config.ts
 ┃ ┃ ┣ 📜swagger.config.ts
 ┃ ┃ ┣ 📜typeorm.config.ts
 ┃ ┃ ┗ 📜validation-pipe.config.ts
 ┣ 📂modules
 ┃ ┣ 📂auth
 ┃ ┃ ┣ 📂application
 ┃ ┃ ┃ ┣ 📂dtos
 ┃ ┃ ┃ ┃ ┣ 📜login.dto.ts
 ┃ ┃ ┃ ┃ ┗ 📜register.dto.ts
 ┃ ┃ ┃ ┣ 📂mappers
 ┃ ┃ ┃ ┃ ┗ 📜auth-response.mapper.ts
 ┃ ┃ ┃ ┣ 📂services
 ┃ ┃ ┃ ┃ ┗ 📜auth.service.ts
 ┃ ┃ ┃ ┗ 📂usecases
 ┃ ┃ ┃ ┃ ┣ 📜login-impl.usecase.ts
 ┃ ┃ ┃ ┃ ┗ 📜register-impl.usecase.ts
 ┃ ┃ ┣ 📂domain
 ┃ ┃ ┃ ┣ 📂entities
 ┃ ┃ ┃ ┣ 📂exceptions
 ┃ ┃ ┃ ┃ ┗ 📜invalid-credentials.exception.ts
 ┃ ┃ ┃ ┗ 📂ports
 ┃ ┃ ┃ ┃ ┣ 📂in
 ┃ ┃ ┃ ┃ ┃ ┣ 📜login.usecase.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜register.usecase.ts
 ┃ ┃ ┃ ┃ ┗ 📂out
 ┃ ┃ ┣ 📂infrastructure
 ┃ ┃ ┃ ┣ 📂controllers
 ┃ ┃ ┃ ┃ ┗ 📜auth.controller.ts
 ┃ ┃ ┃ ┣ 📂guards
 ┃ ┃ ┃ ┃ ┗ 📜jsonwebtoken.guard.ts
 ┃ ┃ ┃ ┣ 📂repositories
 ┃ ┃ ┃ ┃ ┣ 📜auth-adapter.repository.ts
 ┃ ┃ ┃ ┃ ┗ 📜auth.repository.ts
 ┃ ┃ ┃ ┗ 📂strategy
 ┃ ┃ ┃ ┃ ┗ 📜jsonwebtoken.strategy.ts
 ┃ ┃ ┗ 📜auth.module.ts
 ┃ ┣ 📂order
 ┃ ┃ ┣ 📂application
 ┃ ┃ ┃ ┣ 📂dtos
 ┃ ┃ ┃ ┃ ┣ 📜create-order-detail.dto.ts
 ┃ ┃ ┃ ┃ ┗ 📜create-order.dto.ts
 ┃ ┃ ┃ ┣ 📂mapper
 ┃ ┃ ┃ ┃ ┗ 📜order-response.mapper.ts
 ┃ ┃ ┃ ┣ 📂services
 ┃ ┃ ┃ ┃ ┗ 📜order.service.ts
 ┃ ┃ ┃ ┗ 📂usecases
 ┃ ┃ ┃ ┃ ┣ 📜create-order-impl.usecase.ts
 ┃ ┃ ┃ ┃ ┗ 📜get-orders-by-user-id-impl.usecase.ts
 ┃ ┃ ┣ 📂domain
 ┃ ┃ ┃ ┣ 📂entities
 ┃ ┃ ┃ ┃ ┣ 📜order-detail.entity.ts
 ┃ ┃ ┃ ┃ ┗ 📜order.entity.ts
 ┃ ┃ ┃ ┣ 📂exceptions
 ┃ ┃ ┃ ┃ ┣ 📜product-no-available.exception.ts
 ┃ ┃ ┃ ┃ ┗ 📜product-not-found.exception.ts
 ┃ ┃ ┃ ┗ 📂ports
 ┃ ┃ ┃ ┃ ┣ 📂in
 ┃ ┃ ┃ ┃ ┃ ┣ 📜create-order.usecase.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜get-orders-by-user-id.usecase.ts
 ┃ ┃ ┃ ┃ ┗ 📂out
 ┃ ┃ ┣ 📂infrastructure
 ┃ ┃ ┃ ┣ 📂controllers
 ┃ ┃ ┃ ┃ ┗ 📜order.controller.ts
 ┃ ┃ ┃ ┗ 📂repositories
 ┃ ┃ ┃ ┃ ┣ 📜order-adapter.repository.ts
 ┃ ┃ ┃ ┃ ┗ 📜order.repository.ts
 ┃ ┃ ┗ 📜order.module.ts
 ┃ ┣ 📂product
 ┃ ┃ ┣ 📂application
 ┃ ┃ ┃ ┣ 📂dtos
 ┃ ┃ ┃ ┃ ┗ 📜create-product.dto.ts
 ┃ ┃ ┃ ┣ 📂services
 ┃ ┃ ┃ ┃ ┗ 📜product.service.ts
 ┃ ┃ ┃ ┗ 📂usecases
 ┃ ┃ ┃ ┃ ┗ 📜create-product-impl.usecase.ts
 ┃ ┃ ┣ 📂domain
 ┃ ┃ ┃ ┣ 📂entities
 ┃ ┃ ┃ ┃ ┗ 📜product.entity.ts
 ┃ ┃ ┃ ┣ 📂exceptions
 ┃ ┃ ┃ ┗ 📂ports
 ┃ ┃ ┃ ┃ ┣ 📂in
 ┃ ┃ ┃ ┃ ┃ ┗ 📜create-product.usecases.ts
 ┃ ┃ ┃ ┃ ┗ 📂out
 ┃ ┃ ┣ 📂infrastructure
 ┃ ┃ ┃ ┣ 📂controllers
 ┃ ┃ ┃ ┃ ┗ 📜product.controller.ts
 ┃ ┃ ┃ ┗ 📂repositories
 ┃ ┃ ┃ ┃ ┣ 📜product-adapter.repository.ts
 ┃ ┃ ┃ ┃ ┗ 📜product.repository.ts
 ┃ ┃ ┗ 📜product.module.ts
 ┃ ┗ 📂user
 ┃ ┃ ┣ 📂application
 ┃ ┃ ┃ ┣ 📂dtos
 ┃ ┃ ┃ ┃ ┗ 📜create-user.dto.ts
 ┃ ┃ ┃ ┣ 📂services
 ┃ ┃ ┃ ┃ ┗ 📜user.service.ts
 ┃ ┃ ┃ ┣ 📂types
 ┃ ┃ ┃ ┃ ┗ 📜user-response.type.ts
 ┃ ┃ ┃ ┗ 📂usecases
 ┃ ┃ ┃ ┃ ┣ 📜create-user-impl.usecase.ts
 ┃ ┃ ┃ ┃ ┣ 📜find-user-by-email-impl.usecase.ts
 ┃ ┃ ┃ ┃ ┗ 📜user-profile.usecase.ts
 ┃ ┃ ┣ 📂domain
 ┃ ┃ ┃ ┣ 📂entities
 ┃ ┃ ┃ ┃ ┗ 📜user.entity.ts
 ┃ ┃ ┃ ┣ 📂exceptions
 ┃ ┃ ┃ ┃ ┣ 📜email-not-found.exception.ts
 ┃ ┃ ┃ ┃ ┣ 📜email-user-already-exists.exception.ts
 ┃ ┃ ┃ ┃ ┗ 📜user-not-found.exception.ts
 ┃ ┃ ┃ ┗ 📂ports
 ┃ ┃ ┃ ┃ ┣ 📂in
 ┃ ┃ ┃ ┃ ┃ ┣ 📜create-user.usecase.ts
 ┃ ┃ ┃ ┃ ┃ ┣ 📜find-user-by-email.usecase.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜user-profile.usecase.ts
 ┃ ┃ ┃ ┃ ┗ 📂out
 ┃ ┃ ┣ 📂infrastructure
 ┃ ┃ ┃ ┣ 📂controllers
 ┃ ┃ ┃ ┃ ┗ 📜user.controller.ts
 ┃ ┃ ┃ ┗ 📂repositories
 ┃ ┃ ┃ ┃ ┣ 📜user-adapter.repository.ts
 ┃ ┃ ┃ ┃ ┗ 📜user.repository.ts
 ┃ ┃ ┗ 📜user.module.ts
 ┣ 📂shared
 ┃ ┣ 📂constants
 ┃ ┃ ┣ 📜decorator-keys.constant.ts
 ┃ ┃ ┗ 📜repository-names.constant.ts
 ┃ ┣ 📂decorators
 ┃ ┃ ┗ 📜public.decorator.ts
 ┃ ┗ 📂patterns
 ┃ ┃ ┗ 📜result.pattern.ts
 ┣ 📜app.module.ts
 ┗ 📜main.ts
```

---

## Descripción de los módulos principales

- **Auth:** Maneja autenticación y registro de usuarios, gestión de tokens JWT, y protección de rutas.
- **Order:** Permite la creación y consulta de órdenes, validando disponibilidad de productos y gestionando detalles de cada pedido.
- **Product:** Gestión de productos, creación y consulta, con validaciones de negocio.
- **User:** Registro, consulta y perfil de usuarios, con validaciones y excepciones específicas.

---

## Configuración y despliegue

1. **Variables de entorno:** Copiar `.env.example` a `.env` y completar los valores necesarios.
2. **Levantamiento de servicios:** Usar `docker-compose up` para iniciar base de datos y Adminer.
3. **Instalación de dependencias:** `npm install`
4. **Ejecución:** `npm run start:dev`
5. **Documentación interactiva:** Acceder a `/api` para Swagger y `/docs` para Redoc.

---

## Diagramas y documentación adicional

- Los diagramas de arquitectura y flujo se encuentran en la carpeta `/documentation/diagrams` y han sido generados con D2.
- Para más detalles sobre endpoints y ejemplos de uso, consultar la documentación Swagger y Redoc generada automáticamente.

---

## Notas finales

Este proyecto está preparado para escalar y adaptarse a nuevas necesidades, siguiendo las mejores prácticas de desarrollo backend moderno. Se recomienda mantener la estructura modular y los principios aplicados para facilitar el mantenimiento y la evolución del sistema.
