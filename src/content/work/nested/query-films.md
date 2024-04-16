---
title: Buscador de Peliculas -Prueba Técnica
publishDate: 2023-10-27 00:00:00
idImg: '2'
img: /assets/imgProjects/query-films.webp
img_alt: Visual del buscador de peliculas
description: |
  Una prueba técnica, donde abarco desde la interaccion de estados y ciclos de vida en React con la implementacion de una API externa.
url: https://lombardi-query-films.netlify.app/
tags:
  - Prueba Técnica
  - React
  - API REST
---

## Buscar, Filtrar y a pochoclear 🍿

> Muestra de unas de las pruebas técnicas que he realizado para perfeccionarme como desarrollador

En este caso de prueba, he aplicado los conocimientos basicos en <a href='https://reactrouter.com/en/main' target="_blank" rel="noopener noreferrer">**React Router**</a>, donde se evalua la interaccion con una API, el manejo de documentacion, la manipulacion de datos extraidos y su implementacion en los componentes correspondientes.

### Requerimientos de la prueba técnica

✅ Necesita mostrar un input para buscar la película y un botón para buscar.<br>
✅ Lista las películas y muestra el título, año y poster.<br>
✅ Que el formulario funcione<br>
✅ Haz que las películas se muestren en un grid responsive.<br>
✅ Hacer el fetching de datos a la API<br>

Primera iteración:

✅ Evitar que se haga la misma búsqueda dos veces seguidas.<br>
✅ Haz que la búsqueda se haga automáticamente al escribir.<br>
✅ Evita que se haga la búsqueda continuamente al escribir (debounce)<br>

### Herramientas

He utilizado el empaquetador de aplicaciones Web <a href='https://vitejs.dev/' target="_blank" rel="noopener noreferrer">**Vite**</a> el cual es una alternativa a <span style='color: var(--accent-regular)'>**Webpack**</span>, con mayor fluidez y adaptabilidad. Por cuestiones de aprendizaje, el proyecto es creado de forma vanilla, es decir, sin pre instalaciones de depencias de React, con el objetivo de dominar todos los aspectos del framework y no depender de los empaquetadores para obtener el punto de entrada de nuestras aplicaciones. Como hemos mencionado, aplicacomos las dependencias correspondientes para el correcto funcionamiento de React:

``` node
npm react
npm react dom -E
```

Esta escrito en React 100% vanilla, conjunto a <span style='color: var(--accent-regular)'>**CSS Standar**</span>. Para mantener un código limpio y consistente he usado <span style='color: var(--accent-regular)'>**Eslint**</span>, el cual facilita encontrar y corregir problemas de estilo, errores de sintaxis y posibles problemas en el código.

* Preferencia: <a href='https://standardjs.com/' target="_blank" rel="noopener noreferrer">**JSStandar**</a>

Como herramienta de compilacion, he aplicado **SWC** que esta desarrollado en Rust y es uno de los compiladores mas renombrados en la actualidad.

### Descripción Técnica

Acontinuacion describire algunos puntos claves del desarrollo de esta aplicacion Web:
***

* **Diseño de la Interfaz:**  Implementa una interfaz sencilla dado al tiempo de desarrollo, en el cual se puede realizar la interacción mínima para su funcionamiento.
<br>

* **Visualización de Resultados:** Desarrollé la lógica para mostrar los resultados de búsqueda en un grid responsive, mostrando título, año y póster de las películas.
<br>

* **Implementación del Formulario:** Aseguré el funcionamiento del formulario para realizar búsquedas, gestionando los eventos de entrada y clic.
<br>

* **Evitar Búsquedas Redundantes:** Implementé una lógica que evita realizar la misma búsqueda dos veces seguidas, mejorando la eficiencia.
<br>

* **RExperiencia de Usuario:** La habilitación de la búsqueda automática proporciona al usuario una experiencia más dinámica,además se implemento búsquedas continuas al escribir mediante la implementación de un debounce, optimizando la carga de la API.
<br>

Este enfoque técnico garantiza un rendimiento eficiente, una experiencia de usuario fluida y un mantenimiento sencillo en el desarrollo del Shopping Cart con React y Vite, conectándolo a la API de OMDB para obtener información actualizada sobre películas.
