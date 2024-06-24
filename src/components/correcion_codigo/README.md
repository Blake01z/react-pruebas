# Corrección de Código de Typescript

## Descripción
1. **Interpolación de Cadenas:**
   - **Problema:** La interpolación de cadenas en la llamada a `fetch` no estaba correctamente delimitada por comillas invertidas.
   - **Corrección:** Se corrigió la delimitación de comillas invertidas.

2. **Tipo de Parámetro `userId`:**
   - **Problema:** El parámetro `userId` estaba declarado como `string` pero se estaba pasando un valor de tipo `number`.
   - **Corrección:** Se cambió el tipo de `userId` a `number`.

3. **Acceso a la Propiedad `name`:**
   - **Problema:** En la función `logUserName`, la propiedad `name` del objeto `User` estaba mal escrita como `Name`.
   - **Corrección:** Se cambió `user.Name` a `user.name`.

4. **Manejo de Errores:**
   - **Problema:** No se manejaban errores en la llamada a la API.
   - **Corrección:** Se añadió un bloque `try-catch` para manejar errores y se agregó un manejo de errores en la promesa devuelta por `fetchUserData`.