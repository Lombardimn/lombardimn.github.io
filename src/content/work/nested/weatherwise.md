---
title: Weather Wise
publishDate: 2024-05-09 00:00:00
idImg: '5'
img: /assets/imgProjects/weather-wise.jpg
img_alt: Primera plana de la pagina vista como App en tablets
description: |
  Una PWA (Progressive Web App) para consultar el clima de una ciudad, mediante la API de OpenWeather.
url: https://lombardidev-weatherwise.netlify.app/
tags:
  - API REST
  - Astro
  - PWA
---

## El clima exacto, al instante 🌞

> Aplicación Web para consultar el clima de una ciudad, mediante la API de OpenWeather.

Con el objetivo de realizar una aplicación Web que reluzcan mis conocimientos en el uso de conexiones a APIs externas y conocimientos de JavaScript, he creado **Weather Wise**, desarrollado en el metaframework **Astro**. En este proyecto, he aplicado los conocimientos de componetización, gestión de eventos, optimización de rendimiento, publicación en la web y desarrollo de una PWA.

### Requerimientos

✅ Visual didactico para el usuario.<br>
✅ Diseño bien definido y responsive.<br>
✅ Que automaticamente verifique la ubicación del usuario.<br>
✅ Que el rendimiento sea optimizado.<br>
✅ Que se complemente con las herramientas de los dispositivos.<br>
✅ Que maneje franjas horarias.<br>

Primera iteración:

✅ Evitar que se haga la misma búsqueda dos veces seguidas.<br>
✅ Haz que la búsqueda se haga automáticamente al escribir.<br>
✅ Evita que se haga la búsqueda continuamente al escribir (debounce)<br>

### Herramientas

He utilizado el empaquetador de aplicaciones Web <a href='https://vitejs.dev/' target="_blank" rel="noopener noreferrer">**Vite**</a> el cual es una alternativa a <span style='color: var(--accent-regular)'>**Webpack**</span>, con mayor fluidez y adaptabilidad. Como mencione anteriormente, he desarrollado la PWA con ASTRO, 100% vainilla, con el objetivo de dominar todos los aspectos del framework y no depender de los empaquetadores para obtener el punto de entrada de nuestras aplicaciones.

``` node
npm astro
```

Para los estilos he aplicado <span style='color: var(--accent-regular)'>**Tailwind CSS**</span> que reduce el tiempo de desarrollo. Para mantener un código limpio y consistente he usado <span style='color: var(--accent-regular)'>**Eslint**</span>, el cual facilita encontrar y corregir problemas de estilo, errores de sintaxis y posibles problemas en el código.

* Preferencia: <a href='https://standardjs.com/' target="_blank" rel="noopener noreferrer">**JSStandar**</a>

Como herramienta de compilacion, he aplicado **SWC** que esta desarrollado en Rust y es uno de los compiladores mas renombrados en la actualidad.

### Descripción Técnica

Acontinuacion describire algunos puntos claves del desarrollo de esta aplicacion Web:
***

* **Diseño de la Interfaz:**  Implementa una interfaz sencilla dado al tiempo de desarrollo, en el cual se puede realizar la interacción mínima para su funcionamiento.
<br>

* **Visualización de Resultados:** Desarrollé la lógica para mostrar los resultados de búsqueda en un grid responsive, el cual conjunto con Flexbox proporcionan una experiencia de usuario fluida.
<br>

* **Implementación del Formulario:** Aseguré el funcionamiento del formulario para realizar búsquedas, gestionando los eventos de entrada y clic.
<br>

* **Evitar Búsquedas Redundantes:** Implementé una lógica que evita realizar la misma búsqueda dos veces seguidas, mejorando la eficiencia.
<br>

* **Experiencia de Usuario:** La habilitación de la búsqueda automática proporciona al usuario una experiencia más dinámica,además se implemento búsquedas continuas al escribir mediante la implementación de un debounce, optimizando la carga de la API.
<br>

Este enfoque técnico garantiza un rendimiento eficiente, una experiencia de usuario fluida y un mantenimiento sencillo en el desarrollo de la PWA con Astro, conectándolo a la API de OpenWeather para obtener información actualizada sobre las ciudades.
