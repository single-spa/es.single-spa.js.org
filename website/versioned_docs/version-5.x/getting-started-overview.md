---
id: getting-started-overview
title: Empezando con single-spa
sidebar_label: Descripción general de single-spa
---

## JavaScript Microfrontends

<<<<<<< HEAD
[Únete al chat en Slack](https://join.slack.com/t/single-spa/shared_invite/enQtODAwNTIyMzc4OTE1LWUxMTUwY2M1MTY0ZGMzOTUzMGNkMzI1NzRiYzYwOWM1MTEzZDM1NDAyNWM3ZmViOTAzZThkMDcwMWZmNTFmMWQ)
=======
[Join the chat on Slack](https://join.slack.com/t/single-spa/shared_invite/zt-mafdeybq-0v1aIm3KKaqyVCT2xeny3Q)
>>>>>>> 0b73651904c4cc72f5c94f8e2e5a4019fe33c477

single-spa es un framework que permite reunir múltiples microfrontends de JavaScript en una aplicación frontend. Crear la arquitectura de tu frontend usando single-spa te permite muchos beneficios, como:

- [Usar múltiples frameworks](ecosystem.md#help-for-frameworks) en la misma página [sin refrescarla](building-applications.md)
  ([React](ecosystem-react.md), [AngularJS](ecosystem-angularjs.md), [Angular](ecosystem-angular.md), [Ember](ecosystem-ember.md), o cualquiera que estés usando)
- Desplegar tus microfrontends independientemente.
- Escribir código usando un nuevo framework, sin tener que re escribir tu aplicación existente.
- Cargar el código con Lazy Loading, para mejorar el tiempo de carga inicial.

## Demostraciones y Ejemplos

Mira [nuestra página de ejemplos](/docs/examples).

## Descripción de la Arquitectura

<<<<<<< HEAD
single-spa se inspira en el ciclo de vida de frameworks modernos, aplicando ciclos de vida a aplicaciones completas.
Nació del deseo de Canopy para utilizar React + react-router en lugar de quedarse atascado por siempre con AngularJS + ui-router, y ahora single-spa soporta casi cualquier framework. Dado que JavaScript es conocido por la corta vida de muchos de sus frameworks, hemos decidido facilitar su uso para cualquier framework que quieras.  
=======
single-spa takes inspiration from modern framework component lifecycles by abstracting lifecycles for entire applications.
Born out of Canopy's desire to use React + react-router instead of being forever stuck with our AngularJS + ui-router application, single-spa is now a mature library that enables frontend microservices architecture aka "microfrontends". Microfrontends enable many benefits such as independent deployments, migration and experimentation, and resilient applications.
>>>>>>> 0b73651904c4cc72f5c94f8e2e5a4019fe33c477

Las aplicaciones de single-spa consisten en:

<<<<<<< HEAD
1. [Aplicaciones](building-applications.md), cada una de las cuales es un SPA completo en sí. Cada aplicación puede responder a eventos de enrutamiento de una URL y sabe cómo arrancar, montarse y desmontarse así mismo desde el DOM. La principal diferencia entre un SPA tradicional y las aplicaciones single-spa es que deben ser capaces de coexistir con otras aplicaciones, y no tienen su propia página HTML.

    Por ejemplo, tu SPA de React o Angular son aplicaciones. Cuando se activan, escuchan los eventos de enrutamiento de la URL y colocan el contenido en el DOM. Cuando están inactivos, no escuchan los eventos de enrutamiento de la URL y se eliminan por completo del DOM.
2. Un [single-spa-config](configuration), el cuál es la página de HTML y Javascript que registra las aplicaciones con single-spa. Cada aplicación es registrada con 3 cosas:
    - Un nombre
    - Una función para cargar el código de la aplicación.
    - Una función que determina cuando la aplicación está activa/inactiva.
=======
1. A [single-spa root config](configuration), which renders the HTML page _and_ the JavaScript that registers applications. Each application is registered with three things:
   - A name
   - A function to load the application's code
   - A function that determines when the application is active/inactive
1. [Applications](building-applications.md) which can be thought of as single-page applications packaged up into modules. Each application must know how to bootstrap, mount, and unmount itself from the DOM. The main difference between a traditional SPA and single-spa applications is that they must be able to coexist with other applications as they do not each have their own HTML page.

   For example, your React or Angular SPAs are applications. When active, they can listen to url routing events and put content on the DOM. When inactive, they do not listen to url routing events and are totally removed from the DOM.
>>>>>>> 0b73651904c4cc72f5c94f8e2e5a4019fe33c477

## La configuración recomendada

El equipo principal de single-spa ha reunido la documentación, herramientas, y videos que muestran las mejores prácticas recomendadas con single-spa. Revisa [esta documentación](/docs/recommended-setup/) para más información.

## ¿Qué tan difícil es usar single-spa?

single-spa funciona con ES5, ES6 +, TypeScript, Webpack, SystemJS, Gulp, Grunt, Bower, ember-cli o cualquier sistema de compilación disponible. Puedes instalarlo con `npm` o incluso usar una etiqueta `<script>` si lo prefieres.

<<<<<<< HEAD
Nuestro objetivo es hacer el uso de single-spa tan fácil como sea posible. Pero también debemos señalar que esta es una arquitectura avanzada y que es diferente a la forma en que normalmente se realizan las aplicaciones de front-end.
=======
While our objective is to make using single-spa as easy as possible, we should also note that this is an _advanced architecture_ that is different from how front-end applications are typically done. This will require changes to existing paradigms as well as understanding of underlying tools.
>>>>>>> 0b73651904c4cc72f5c94f8e2e5a4019fe33c477

Si no estás empezando tu aplicación desde cero, tendrás que [migrar tu SPA](migrating-existing-spas.md) para convertirla en una aplicación single-spa.

<<<<<<< HEAD
single-spa funciona en Chrome, Firefox, Safari, IE11 y Edge.
=======
single-spa works in Chrome, Firefox, Safari, Edge, and IE11 (with polyfills).
>>>>>>> 0b73651904c4cc72f5c94f8e2e5a4019fe33c477

## ¿No es single-spa un nombre redundante?

Sip.

## Documentación

La documentación está dividida en varias secciones:

<<<<<<< HEAD
* [Empezando con single-spa](getting-started-overview.md)
* [Aplicaciones single-spa](building-applications.md)
* [Paquetes single-spa](parcels-overview.md)
* [Ejemplos](examples.md)
* [Ecosistema](ecosystem.md)
* [Guia de Contribución](contributing-overview.md)
* [Blog](https://single-spa.js.org/blog/)
* [¿Dónde obtener soporte?](https://single-spa.js.org/help/)
=======
- [Getting Started](getting-started-overview.md)
- [single-spa Applications](building-applications.md)
- [single-spa Parcels](parcels-overview.md)
- [Examples](examples.md)
- [Ecosystem](ecosystem.md)
- [Contributing Guide](contributing-overview.md)
- [Blog](https://single-spa.js.org/blog/)
- [Where to Get Support](https://single-spa.js.org/help/)
>>>>>>> 0b73651904c4cc72f5c94f8e2e5a4019fe33c477

Puedes ayudar a mejorar el sitio web de single-spa enviando un pull request al [repositorio de `single-spa.js.org`](https://github.com/single-spa/single-spa.js.org).

<<<<<<< HEAD
## Uso Simple

Para un completo ejemplo, consulta [este ejemplo simple con webpack](https://github.com/joeldenning/simple-single-spa-webpack-example) o [estos ejemplos](/docs/examples/).

Para crear una aplicación de single-spa, deberás hacer tres cosas:

1. Crear un archivo HTML.
=======
## Quick start

To help beginners to single-spa get started quickly we have developed [`create-single-spa`](/docs/create-single-spa/), a utility for generating starter code. This guide will cover creating the root-config and your first single-spa application. Let's get started.

:::note
Once you've gotten some of the basics down, refer to these other [single-spa examples](/docs/examples/) to see more advanced usage.
:::

### Create a root config
>>>>>>> 0b73651904c4cc72f5c94f8e2e5a4019fe33c477

1.  Invoke `create-single-spa` to generate a root-config by running:

<<<<<<< HEAD
2. Crear un archivo single-spa-config. Consulta la [documentación](configuration) para más detalles.
=======
        npx create-single-spa --moduleType root-config
>>>>>>> 0b73651904c4cc72f5c94f8e2e5a4019fe33c477

    Follow the remaining prompts with a few things in mind:

    - [single-spa Layout Engine](https://single-spa.js.org/docs/layout-overview) is optional at this time but is recommended if you foresee utilizing [server side rendering](https://single-spa.js.org/docs/ssr-overview)
    - the `orgName` should be the same across all of your applications as it is used as a namespace to enable [in-browser module resolution](https://single-spa.js.org/docs/recommended-setup/#in-browser-versus-build-time-modules)

1.  Once created, navigate into the newly created root-config folder
1.  Run the `start` script using your preferred package manager
1.  Navigate to http://localhost:9000/ in your browser
1.  You now have a working root-config!

**Be sure to review the comments inside the generated code as well as the information in the Welcome application** even if some of the content is duplicated in this guide.

:::tip
[single-spa-playground.org](http://single-spa-playground.org/playground) is an alternative guide to run an application without needing to create your own root-config.
:::

### Create a single-spa application

1.  Invoke `create-single-spa` to generate a single-spa application by running:

        npx create-single-spa --moduleType app-parcel

    Follow the remaining prompts to generate a single-spa application using your framework of choice

1.  Once created, navigate into the newly created application folder
1.  Run the `start` script using your preferred package manager

<<<<<<< HEAD
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
=======
### Add shared dependencies

[Shared dependencies](https://single-spa.js.org/docs/recommended-setup/#shared-dependencies) are used to improve performance by sharing a module in the browser through [import maps](https://single-spa.js.org/docs/recommended-setup/#import-maps) declared in the root-config. Adding these at this point is _conditionally optional_, depending on if the generated application expects any shared dependencies.

For example, if using React the generated Webpack config already expects `React` and `ReactDOM` to be shared dependencies, so you must add these to the import map. Vue, Angular, and Svelte don't require shared dependencies at this time.

```json
"react": "https://cdn.jsdelivr.net/npm/react@16.13.1/umd/react.production.min.js",
"react-dom": "https://cdn.jsdelivr.net/npm/react-dom@16.13.1/umd/react-dom.production.min.js"
>>>>>>> 0b73651904c4cc72f5c94f8e2e5a4019fe33c477
```

As your architecture matures, you may add more shared dependencies in the future so don't stress about leveraging these perfectly at first.

### Register the application

1. Return to the root-config and add your application to the import map in `src/index.ejs`

   <small>The application's package.json name field is recommended</small>

1. Register as a single-spa application

   if **not** using single-spa Layout Engine

   - Open `src/root-config.js`
   - Remove the code for registering `@single-spa/welcome` as an application
   - Uncomment the sample `registerApplication` code and update it with the module name of your application

   if using single-spa Layout Engine

   - Remove the existing `<application name="@single-spa/welcome"></application>` element
   - Add your own `<application name=""></application>` element using the `name` the module name used in the import map from the previous step

Thats it! Your first single-spa application should now be running in your root-config.

---

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

