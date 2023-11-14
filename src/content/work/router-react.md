---
title: Router para React
publishDate: 2023-11-06 01:54:00
img: /assets/imgProjects/react-router-clon.png
img_alt: Se muestra la pagina principal de NPM, demostrando que el paquete se encuentra activo y disponible.
description: |
  Una versión simplificada del famoso **React Router Dom** pero con todas sus funcionalidades en linea y a disposición del público en general.
url: https://lombardi-shopping-cart.netlify.app/
tags:
  - TypeScript
  - Eslint
  - NPM
---

## Aprendiendo las bases de la navegación en React

> Creando una Ruta Sencilla para Navegación en Aplicaciones React

Exploraremos el proceso de desarrollo y publicación en NPM de una funcionalidad mínima de <a href='https://reactrouter.com/en/main' target="_blank" rel="noopener noreferrer">**React Router**</a>. Desde la conceptualización hasta la implementación y la publicación, cada paso se desglosará para proporcionar una guía clara y concisa.

Crear el el mini Router <span style='background: var(--accent-light); color: var(--accent-text-over)' >implica, realizar una solución estándar para la navegación en aplicaciones React, ofreciendo una gestión de rutas declarativa y eficiente</span>

### Herramientas

Para el proyecto he utilizado el empaquetador de aplicaciones Web <a href='https://vitejs.dev/' target="_blank" rel="noopener noreferrer">**Vite**</a> el cual es una alternativa a <span style='color: var(--accent-regular)'>**Webpack**</span>, con mayor fluidez y adaptabilidad. Por cuestiones de aprendizaje, el proyecto es creado de forma vanilla, es decir, sin pre instalaciones de depencias de React, con el objetivo de dominar todos los aspectos del framework y no depender de los empaquetadores para obtener el punto de entrada de nuestras aplicaciones. Como hemos mencionado, aplicacomos las dependencias correspondientes para el correcto funcionamiento de React:

``` node
npm react
npm react dom -E
```

Esta escrito en React 100% vanilla, conjunto a <span style='color: var(--accent-regular)'>**CSS Standar**</span> para el modelo de prueba. Para mantener un código limpio, robusto y consistente he usado <span style='color: var(--accent-regular)'>**TypeScript**</span>, complementandolo con <span style='color: var(--accent-regular)'>**Eslint**</span>, el cual facilita encontrar y corregir problemas de estilo, errores de sintaxis y posibles problemas en el código.

* Preferencia: <a href='https://typescript-eslint.io/' target="_blank" rel="noopener noreferrer">**Eslint TypeScript**</a>

Como herramienta de compilacion, he aplicado **SWC** que esta desarrollado en Rust y es uno de los compiladores mas renombrados en la actualidad.

Por supuesto, este poryecto contempla la implementacion de un paquete disponible con <span style='color: var(--accent-regular)'>**NPM**</span>

* Link: <a href='https://www.npmjs.com/package/07-lombardi-router' target="_blank" rel="noopener noreferrer">**Pakage NPM**</a>

### Descripción Técnica

Acontinuacion describire algunos puntos claves del desarrollo de esta aplicacion Web:
***

* **Declaratividad en la Navegación:**  permite definir las rutas de la aplicación de manera declarativa, facilitando la comprensión y el mantenimiento del flujo de navegación.
<br>

* **Manejo Eficiente del Estado:** Gracias a su integración con el estado de React, nuestro router gestiona de manera eficiente el estado de la aplicación según la ruta actual, mejorando el rendimiento y la experiencia del usuario.
<br>

* **NPM como Plataforma de Distribución:** La publicación en NPM ofrece una forma estandarizada y accesible de compartir componentes y bibliotecas. Facilita la instalación y actualización de nuestra funcionalidad de React Router en proyectos de otros desarrolladores.
<br>

* **Reutilización y Modularidad:** Al distribuir nuestra funcionalidad como un paquete NPM, fomentamos la reutilización y la modularidad en el desarrollo de aplicaciones. Otros desarrolladores pueden integrar fácilmente nuestra solución en sus proyectos, promoviendo buenas prácticas de desarrollo.
<br>

* **Rutas Anidadas y Jerarquía:** React Router permite la anidación de rutas, lo que facilita la creación de una jerarquía lógica en la navegación de la aplicación. Esto resulta especialmente útil en aplicaciones complejas con múltiples secciones y subsecciones.
<br>

* **Gestión de Parámetros de Ruta:** La capacidad de gestionar parámetros en las rutas permite a los desarrolladores capturar y utilizar dinámicamente valores en las URL. Esto es esencial para construir aplicaciones dinámicas y personalizadas.
<br>

* **Redirecciones y Navegación Programática:** React Router facilita la implementación de redirecciones, lo que permite a los desarrolladores guiar a los usuarios a diferentes rutas según ciertas condiciones. Además, la navegación programática permite manipular la navegación de manera dinámica mediante código, lo que es fundamental para experiencias de usuario más interactivas.
