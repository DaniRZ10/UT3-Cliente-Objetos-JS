# Análisis: objetos predefinidos (Hito 0)

## 1. `window` frente a `Math` y `JSON`

`window` es un **objeto del navegador**: forma parte del BOM (Browser Object Model) y representa la ventana en la que se ejecuta la página. Lo crea el navegador, no el lenguaje, y es el objeto global y padre del resto de objetos del BOM (`document`, `location`, `navigator`, `screen`, `history`). Fuera del navegador, por ejemplo en Node.js, no existe.

`Math` y `JSON` son **objetos nativos**: pertenecen al núcleo del lenguaje JavaScript y están disponibles en cualquier entorno donde se ejecute JS. `Math` ofrece operaciones matemáticas y `JSON` convierte objetos en texto y viceversa.

No hace falta escribir `window.Math` porque `window` actúa como ámbito global (*global scope*): todo lo que está en el ámbito global es una propiedad de `window`, incluidos los objetos nativos. Por eso `window.Math === Math` devuelve `true` y `window` se puede omitir, igual que escribimos `alert()` en lugar de `window.alert()`.

## 2. Categoría de cada instrucción

| Instrucción | Categoría | Motivo |
|---|---|---|
| `window.open()` | BOM | Método de `window` que abre una nueva ventana del navegador. |
| `parseFloat()` | Objeto nativo de JS | Función global del lenguaje que convierte un texto en número decimal (equivale a `Number.parseFloat()`). |
| `Math.floor()` | Objeto nativo de JS | Método del objeto nativo `Math` que redondea hacia abajo. |
| `navigator.userAgent` | BOM | Propiedad del objeto `navigator` (`window.navigator`) con la identificación del navegador y del sistema operativo. |