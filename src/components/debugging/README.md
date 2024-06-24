# Debugging del Componente Counter

## Descripción
Para el proceso de debugging realizado para encontrar y solucionar un bug en el componente `Counter`. El componente presenta un bug que causa un bucle infinito en la ejecución del `useEffect`.

## Proceso de Debugging

### Herramientas Utilizadas

- **React DevTools**: Utilizado para inspeccionar el estado y los efectos del componente.
- **Console Logs**: Añadidos para imprimir valores de estado y verificar la ejecución del `useEffect`.

### Pasos Realizados

1. **Inspección Inicial**:
    - Se abrió la aplicación en el navegador y se utilizó React DevTools para inspeccionar el componente `Counter`.
    - Se verificó el estado `count` y su actualización al hacer clic en los botones de incremento y decremento.

2. **Revisión del `useEffect`**:
    - Se añadió `console.log` dentro del `useEffect` para verificar cuándo y por qué se ejecuta.
    - Se identificó que el `useEffect` se ejecuta en cada renderizado, lo cual no es el comportamiento deseado.

3. **Análisis de Dependencias del `useEffect`**:
    - Se revisaron las dependencias del `useEffect`. Se notó que `increment` y `decrement` estaban en la lista de dependencias.
    - Se comprendió que las funciones `increment` y `decrement` se recrean en cada renderizado, provocando que el `useEffect` se ejecute constantemente.

4. **Solución Propuesta**:
    - Se modificó la lista de dependencias del `useEffect` para incluir solo `count`, ya que es la variable que debe desencadenar el efecto cuando cambia.
