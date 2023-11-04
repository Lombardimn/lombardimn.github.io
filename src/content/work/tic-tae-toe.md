---
title: TIC - TAC - TOE
publishDate: 2023-09-25 23:02:00
img: /assets/imgProjects/tic-tac-toe.png
img_alt: Foto donde se muestra la interface del juego que se compone del tablero, botonera e informe de turno
description: |
  Tic Tac Toe es un juego clásico que se utiliza a menudo como ejemplo para enseñar programación y lógica.
tags:
  - React
  - Dev
  - MySQL
---

## Reactivo con un Videojuego

> Que mejor manera que dar los primeros pasos en React que haciendo un videojuego de estrategia

El juego Tic Tac Toe, implementado como una aplicación web en [**React**]('https://es.react.dev/'), es una excelente manera de demostrar el poder de esta biblioteca de JavaScript para crear interfaces de usuario interactivas y reactivas.

Crear el juego en React <span style='background: var(--accent-light); color: var(--accent-text-over)' >implica organizar componentes, gestionar el estado, verificar el ganador, proporcionar una interfaz atractiva y permitir una interacción suave entre los jugadores.</span>

### Herramientas

Para el proyecto he utilizado el empaquetador de aplicaciones Web [**Vite**]('https://vitejs.dev/') el cual es una alternativa a <span style='color: var(--accent-regular)'>**Webpack**</span>, con mayor fluidez y adaptabilidad. Por cuestiones de aprendizaje, el proyecto es creado de forma vanill, es decir, sin pre instalaciones de depencias de React, con el objetivo de dominar todos los aspectos del framework y no depender de los empaquetadores para obtener el punto de entrada de nuestras aplicaciones. Como hemos mencionado, aplicacomos las dependencias correspondientes para el correcto funcionamiento de React:

``` node
npm react
npm react dom -E
```

Esta escrito en React 100% vanilla, conjunto a <span style='color: var(--accent-regular)'>**CSS Standar**</span>. Para mantener un código limpio y consistente he usado <span style='color: var(--accent-regular)'>**Eslint**</span>, el cual facilita encontrar y corregir problemas de estilo, errores de sintaxis y posibles problemas en el código.

* Preferencia: [**JSStandar**]('https://standardjs.com/)

Como herramienta de compilacion, he aplicado **SWC** que esta desarrollado en Rust y es uno de los compiladores mas renombrados en la actualidad.

### Descripción Tecnica

Acontinuacion describire algunos puntos claves del desarrollo de esta aplicacion Web:
***

* **Componentes React:** Para construir el juego Tic Tac Toe, se fracciono en varios componentes. Los componentes clave incluyen el tablero (Board), las celdas (Square), y el componente principal del juego (Game).
<br>

* **State Management:** Utilizamos el estado de React para llevar un seguimiento del estado del juego, como el tablero actual, quién es el jugador actual y el historial de movimientos. Esto se realizo mediante el uso del estado local en los componentes.
<br>

* **Representación del Tablero:** El tablero se renderizo como una matriz de celdas (3x3). Cada celda puede contener el estado actual, que podría ser 'X', 'O' o vacío.
<br>

* **Control de Turnos:** Llevamos un registro del jugador actual y de la alternación de turnos, mediante el uso de un estado para saber quién juega en cada turno.
<br>

* **Verificación de Ganador:** Implementa una función que verifica si hay un ganador después de cada movimiento, realizando la comprobación de las filas, columnas y diagonales del tablero.
<br>

* **Estilos CSS:** Utilizo CSS Vanilla para darle estilo a la aplicación y hacer que se vea atractiva y fácil de usar.
<br>

* **Interacción de Usuario:** Agrego interacciones, como resaltar la celda seleccionada, mostrar un mensaje cuando alguien gane y proporcionar botones para reiniciar el juego y continuar. Tambien he sumado efectos de confettis para resaltar la victoria de un jugador.
<br>

* **Finalización del Juego:** Cuando se determina un ganador o el juego termina en empate, muestra un mensaje indicando el resultado y permite reiniciar el juego.
<br>

* **Gestión de Eventos:** Usa eventos de clic para permitir que los jugadores seleccionen sus movimientos en las celdas del tablero.
<br>

* **Optimización de Rendimiento:** Para una mejor experiencia de usuario, considere la optimización del rendimiento, como el uso de React.memo y React Hooks cuando sea necesario.
<br>

* **Publicación en la Web:** El juego se encuentra deployado en la plataforma de <span style='color: var(--accent-regular)'>**Netlify**</span>.
