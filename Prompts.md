1. Esta es la historia de usuario que hay que trabajar. Quiero que crees 3 tickets de trabajo bien definidos donde especifiques cada una de las tareas a realizar (backend, frontend y base de datos)

Añadir Candidato al Sistema
Como reclutador,
Quiero tener la capacidad de añadir candidatos al sistema ATS,
Para que pueda gestionar sus datos y procesos de selección de manera eficiente.

Criterios de Aceptación:

Accesibilidad de la función: Debe haber un botón o enlace claramente visible para añadir un nuevo candidato desde la página principal del dashboard del reclutador.
Formulario de ingreso de datos: Al seleccionar la opción de añadir candidato, se debe presentar un formulario que incluya los campos necesarios para capturar la información del candidato como nombre, apellido, correo electrónico, teléfono, dirección, educación y experiencia laboral.
Validación de datos: El formulario debe validar los datos ingresados para asegurar que son completos y correctos. Por ejemplo, el correo electrónico debe tener un formato válido y los campos obligatorios no deben estar vacíos.
Carga de documentos: El reclutador debe tener la opción de cargar el CV del candidato en formato PDF o DOCX.
Confirmación de añadido: Una vez completado el formulario y enviada la información, debe aparecer un mensaje de confirmación indicando que el candidato ha sido añadido exitosamente al sistema.
Errores y manejo de excepciones: En caso de error (por ejemplo, fallo en la conexión con el servidor), el sistema debe mostrar un mensaje adecuado al usuario para informarle del problema.
Accesibilidad y compatibilidad: La funcionalidad debe ser accesible y compatible con diferentes dispositivos y navegadores web.
Notas:

La interfaz debe ser intuitiva y fácil de usar para minimizar el tiempo de entrenamiento necesario para los nuevos reclutadores.
Considerar la posibilidad de integrar funcionalidades de autocompletado para los campos de educación y experiencia laboral, basados en datos preexistentes en el sistema.
Tareas Técnicas:

Implementar la interfaz de usuario para el formulario de añadir candidato.
Desarrollar el backend necesario para procesar la información ingresada en el formulario.
Asegurar la seguridad y privacidad de los datos del candidato.
Como ves, hay 3 tareas técnicas necesarias: desarrollar el backend, el frontend y la base de datos. Dado que no hay nada aún en el proyecto base, requerirá tareas extra como crear el modelo de datos, lanzar la migración en PostgreSQL, etc.

2. Voy a crear 3 tickets de trabajo bien definidos para la funcionalidad de "Añadir Candidato al Sistema" basados en el análisis de la historia de usuario proporcionada.

## Análisis de la Funcionalidad

La historia de usuario requiere implementar una funcionalidad completa para añadir candidatos al sistema ATS (Applicant Tracking System). Basándome en las tareas técnicas mencionadas, necesito crear 3 tickets separados:

1. __Backend__: Implementar la lógica de negocio y API para gestionar candidatos
2. __Frontend__: Desarrollar la interfaz de usuario para el formulario de añadir candidato
3. __Base de Datos__: Crear el modelo de datos y migraciones necesarias

## Ticket 1: Backend - Implementación de API para Gestión de Candidatos

### Descripción

Implementar el backend necesario para procesar la información de nuevos candidatos, incluyendo endpoints REST y lógica de negocio.

### Tareas Técnicas:

- Crear endpoint POST /api/candidates para crear nuevos candidatos
- Implementar validación de datos en el backend
- Configurar conexión con base de datos PostgreSQL mediante Prisma
- Implementar manejo de errores y excepciones
- Crear lógica de negocio para procesar datos de candidatos
- Implementar carga de documentos (CV) en el backend
- Asegurar seguridad y privacidad de los datos

### Criterios de Aceptación:

- Endpoint REST funcional para crear candidatos
- Validación de datos implementada
- Manejo adecuado de errores
- Integración con base de datos funcional
- Seguridad de datos implementada

## Ticket 2: Frontend - Interfaz de Usuario para Añadir Candidatos

### Descripción

Desarrollar la interfaz de usuario intuitiva para que los reclutadores puedan añadir candidatos al sistema.

### Tareas Técnicas:

- Crear formulario de añadir candidato con todos los campos requeridos
- Implementar validación de formulario en tiempo real
- Diseñar interfaz responsive y accesible
- Implementar funcionalidad de carga de documentos (PDF/DOCX)
- Crear mensaje de confirmación tras éxito
- Implementar manejo de errores y mensajes de usuario
- Integrar con API backend

### Criterios de Aceptación:

- Formulario visible en dashboard principal
- Campos obligatorios validados
- Funcionalidad de carga de documentos implementada
- Mensaje de confirmación adecuado
- Manejo de errores funcional
- Compatible con diferentes dispositivos y navegadores

## Ticket 3: Base de Datos - Modelo de Datos para Candidatos

### Descripción

Crear la estructura de base de datos necesaria para almacenar información de candidatos.

### Tareas Técnicas:

- Definir modelo de datos para candidatos en Prisma
- Crear migración para tabla de candidatos
- Configurar relaciones con otras entidades (si aplica)
- Definir índices para campos frecuentemente consultados
- Implementar campos para: nombre, apellido, correo, teléfono, dirección, educación, experiencia laboral
- Configurar campos para almacenamiento de documentos
- Asegurar integridad referencial

### Criterios de Aceptación:

- Modelo de datos completo en Prisma
- Migración funcional
- Campos requeridos definidos
- Índices optimizados
- Estructura de datos consistente con requerimientos
- Integración con backend funcional

3. Ir corrigiendo errores con la ayuda del agente cline.