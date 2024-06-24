# Decisiones de Desarrollo

## Descripción
Para el proyecto con una aplicación React que maneja de manera intensiva el estado global, autenticación de usuarios y comunicación frecuente con una API REST tendria 2 opciones.

1. *Solucion 1*: Se padria utilizar, React 18 o la version mas reciente, Redux Toolkit para la gestión del estado global, React Query para la comunicación con la API y el manejo del estado de las peticiones, y Axios para realizar las solicitudes HTTP. La autenticación se maneja mediante JSON Web Tokens (JWT).


## Librerías Elegidas y Razones

1. **React 18 o version reciente**:
   - Ayuda a la facilidad de creacion de componentes y no tiene la complejidad de Next
   - Tiene documentacion bastante actualizada con ejemplos.

2. **Redux Toolkit**:
   - Simplifica la configuración y el uso de Redux.
   - Facilita la creación de slices y reducers.
   - Incluye middleware como Redux Thunk para manejar acciones asíncronas.

3. **React Query**:
   - Manejo eficiente del estado de las peticiones a la API.
   - Cacheo de datos, revalidación automática y sincronización en segundo plano.
   - Mejor experiencia de usuario con menos carga en el servidor.

4. **Axios**:
   - Sintaxis clara y fácil de usar.
   - Soporte para interceptores para manejar solicitudes y respuestas de manera global.
   - Compatible con la mayoría de los navegadores.

5. **JWT (JSON Web Tokens)**:
   - Estándar de la industria para la autenticación y autorización.
   - Almacena el token en el almacenamiento local o cookies seguras.
   - Fácil de integrar con React Query para manejar el estado

2. *Solucion 2*: Se padria utilizar, Next, Redux Toolkit para la gestión del estado global, Graphql para la comunicación con las base de datos y el manejo del estado de las peticiones, y apollo client para realizar las solicitudes HTTP. La autenticación se maneja mediante JSON Web Tokens (JWT) y OAuth2.0.


1. **NEXT**:
   - Ayuda a la facilidad de la creacion de rutas.
   - Permite mejorar el SEO de la aplicacio
   - El SSR (Server, Side, Rendering) nos facilita la integracion con bases de datos y actualizaciones

2. **Redux Toolkit**:
   - Simplifica la configuración y el uso de Redux.
   - Facilita la creación de slices y reducers.
   - Incluye middleware como Redux Thunk para manejar acciones asíncronas.

3. **Graphql y Apollo**:
   - Manejo eficiente del estado de las peticiones a la DB.
   - Conexion a multiservicios mas eficientemente.
   - Cacheo de datos, revalidación automática y sincronización en segundo plano.
   - Mejor experiencia de usuario con menos peticiones a las consultas.

4. **JWT (JSON Web Tokens)**:
   - Estándar de la industria para la autenticación y autorización.
   - Almacena el token en el almacenamiento local o cookies seguras.
   - Fácil de integrar con React Query para manejar el estado