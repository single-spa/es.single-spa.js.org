---
id: getting-started-overview
title: Empezando con single-spa
sidebar_label: Descripción general de single-spa
---

## JavaScript Microfrontends

[Únete al chat en Slack](https://join.slack.com/t/single-spa/shared_invite/enQtODAwNTIyMzc4OTE1LWUxMTUwY2M1MTY0ZGMzOTUzMGNkMzI1NzRiYzYwOWM1MTEzZDM1NDAyNWM3ZmViOTAzZThkMDcwMWZmNTFmMWQ)

single-spa es un framework que permite reunir múltiples microfrontends de JavaScript en una aplicación frontend. Crear la arquitectura de tu frontend usando single-spa te permite muchos beneficios, como:

- [Usar múltiples frameworks](ecosystem.md#help-for-frameworks) en la misma página [sin refrescarla](building-applications.md)
  ([React](ecosystem-react.md), [AngularJS](ecosystem-angularjs.md), [Angular](ecosystem-angular.md), [Ember](ecosystem-ember.md), o cualquiera que estés usando)
- Desplegar tus microfrontends independientemente.
- Escribir código usando un nuevo framework, sin tener que re escribir tu aplicación existente.
- Cargar el código con Lazy Loading, para mejorar el tiempo de carga inicial.

## Demostraciones y Ejemplos

Mira [nuestra página de ejemplos](/docs/examples).

## Descripción de la Arquitectura

single-spa se inspira en el ciclo de vida de frameworks modernos, aplicando ciclos de vida a aplicaciones completas.
Nació del deseo de Canopy para utilizar React + react-router en lugar de quedarse atascado por siempre con AngularJS + ui-router, y ahora single-spa soporta casi cualquier framework. Dado que JavaScript es conocido por la corta vida de muchos de sus frameworks, hemos decidido facilitar su uso para cualquier framework que quieras.  

Las aplicaciones de single-spa consisten en:

1. [Aplicaciones](building-applications.md), cada una de las cuales es un SPA completo en sí. Cada aplicación puede responder a eventos de enrutamiento de una URL y sabe cómo arrancar, montarse y desmontarse así mismo desde el DOM. La principal diferencia entre un SPA tradicional y las aplicaciones single-spa es que deben ser capaces de coexistir con otras aplicaciones, y no tienen su propia página HTML.

    Por ejemplo, tu SPA de React o Angular son aplicaciones. Cuando se activan, escuchan los eventos de enrutamiento de la URL y colocan el contenido en el DOM. Cuando están inactivos, no escuchan los eventos de enrutamiento de la URL y se eliminan por completo del DOM.
2. Un [single-spa-config](configuration), el cuál es la página de HTML y Javascript que registra las aplicaciones con single-spa. Cada aplicación es registrada con 3 cosas:
    - Un nombre
    - Una función para cargar el código de la aplicación.
    - Una función que determina cuando la aplicación está activa/inactiva.

## La configuración recomendada

El equipo principal de single-spa ha reunido la documentación, herramientas, y videos que muestran las mejores prácticas recomendadas con single-spa. Revisa [esta documentación](/docs/recommended-setup/) para más información.

## ¿Qué tan díficil será usar single-spa?

single-spa funciona con ES5, ES6 +, TypeScript, Webpack, SystemJS, Gulp, Grunt, Bower, ember-cli o cualquier sistema de compilación disponible. Puedes instalarlo con `npm` o incluso usar una etiqueta `<script>` si lo prefieres.

Nuestro objetivo es hacer el uso de single-spa tan fácil como sea posible. Pero también debemos señalar que esta es una arquitectura avanzada y que es diferente a la forma en que normalmente se realizan las aplicaciones de front-end.

Si no estás empezando tu aplicación desde cero, tendrás que [migrar tu SPA](migrating-existing-spas.md) para convertirla en una aplicación single-spa.

single-spa funciona en Chrome, Firefox, Safari, IE11 y Edge.

## ¿No es single-spa un nombre redundante?

Sip.

## Documentación

La documentación está dividida en varias secciones:

* [Empezando con single-spa](getting-started-overview.md)
* [Aplicaciones single-spa](building-applications.md)
* [Paquetes single-spa](parcels-overview.md)
* [Ejemplos](examples.md)
* [Ecosistema](ecosystem.md)
* [Guia de Contribución](contributing-overview.md)
* [Blog](https://single-spa.js.org/blog/)
* [¿Dónde obtener soporte?](https://single-spa.js.org/help/)

Puedes ayudar a mejorar el sitio web de single-spa enviando un pull request al [repositorio de `single-spa.js.org`](https://github.com/single-spa/single-spa.js.org).

## Uso Simple

Para un completo ejemplo, consulta [este ejemplo simple con webpack](https://github.com/joeldenning/simple-single-spa-webpack-example) o [estos ejemplos](/docs/examples/).

Para crear una aplicación de single-spa, deberás hacer tres cosas:

1. Crear un archivo HTML.

```html
<html>
<body>
	<script src="single-spa-config.js"></script>
</body>
</html>
```

2. Crear un archivo single-spa-config. Consulta la [documentación](configuration) para más detalles.

```js
import * as singleSpa from 'single-spa';

const name = 'app1';

/* The app can be a resolved application or a function that returns a promise that resolves with the JavaScript application module.
 * The purpose of it is to facilitate lazy loading -- single-spa will not download the code for a application until it needs to.
 * In this example, import() is supported in webpack and returns a Promise, but single-spa works with any loading function that returns a Promise.
 */
const app = () => import('./app1/app1.js');

/* single-spa does some top-level routing to determine which application is active for any url. You can implement this routing any way you'd like.
 * One useful convention might be to prefix the url with the name of the app that is active, to keep your top-level routing simple.
 */
const activeWhen = '/app1';

singleSpa.registerApplication({ name, app, activeWhen });

singleSpa.start();
```

3. Crea una aplicación. consulta la [documentación](building-applications.md) para más detalles.

```js
//app1.js

let domEl;

export function bootstrap(props) {
	return Promise
		.resolve()
		.then(() => {
			domEl = document.createElement('div');
			domEl.id = 'app1';
			document.body.appendChild(domEl);
		});
}

export function mount(props) {
	return Promise
		.resolve()
		.then(() => {
			// This is where you would normally use a framework to mount some ui to the dom. See https://single-spa.js.org/docs/ecosystem.html.
			domEl.textContent = 'App 1 is mounted!'
		});
}

export function unmount(props) {
	return Promise
		.resolve()
		.then(() => {
			// This is normally where you would tell the framework to unmount the ui from the dom. See https://single-spa.js.org/docs/ecosystem.html
			domEl.textContent = '';
		})
}
```

## API

Lee más en el [API de single-spa](api.md) y el [API de aplicaciones](building-applications.md#application-lifecycle).

## Contribuir

El objetivo principal de este repositorio es seguir evolucionando single-spa, haciéndolo mejor y más fácil de usar. El desarrollo de single-spa y el [ecosistema de single-spa](ecosystem.md) ocurren como código abierto en GitHub, y estamos agradecidos con la comunidad por contribuir con correcciones de errores y mejoras. Lea a continuación para saber cómo puede participar en la mejora de single-spa.

### [Código de Conducta](CODE_OF_CONDUCT.md)

single-spa ha adoptado un código de conducta que esperamos que cumplan los participantes del proyecto. Por favor lee [el texto completo](CODE_OF_CONDUCT.md) así podrás entender qué acciones se tolerarán y cuáles no.

### [Guia de Contribución](contributing-overview.md)

Lee nuestra [guia de contribución](/docs/contributing-overview/) para aprender sobre nuestro proceso de desarrollo, como proponer la correción de errores o mejoras, y como construir y probar tus cambios para single-spa.

## ¿Quién más está usando single-spa?

Mira la [exhibición de usuarios](/users).

¿Tu empresa o proyecto están usando single-spa? Déjanos saber enviando un PR a [esta sección](https://github.com/single-spa/single-spa.js.org/blob/master/website/src/data/users.js)! 

