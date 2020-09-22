---
id: microfrontends-concept
title: Descripción general de Microfrontends
sidebar_label: Descripción general
---

# Concepto: Microfrontends

Video tutorial : [Youtube](https://www.youtube.com/watch?v=3EUfbnHi6Wg&list=PLLUD8RtHvsAOhtHnyGx57EYXoaNsxGrTU&index=1) / [Bilibili](https://www.bilibili.com/video/av83619684)

Un microfrontend es un microservicio que existe dentro de un navegador.

Microfrontends son secciones de tu interfaz de usuario, que a menudo constan de docenas de componentes, que usan frameworks como React, Vue y Angular para renderizar sus componentes. Cada microfrontend puede ser administrado por un equipo diferente y podría ser implementado usando su propio framework. Es práctico y se sugiere usar un solo framework para todos tus microfrontends, aunque podrías agregar frameworks adicionales al migrar o al experimentar.  

Cada microfrontend tiene su propio repositorio de git, su propio archivo `package.json` y su propia configuración de herramienta de compilación. Como resultado, cada microfrontend tiene **un proceso de compilación independiente** y **un despliegue / CI independiente**. Esto generalmente significa que cada repositorio tiene tiempos de compilación rápidos.

## Comparación con Microservices

Los microservicios son servicios de backend que se ejecutan en su propio proceso de sistema operativo, controlan sus propias bases de datos y se comunican entre sí a través de la red.

Comparado con los microfrontends, todos ellos existen dentro de una sola pestaña del navegador: todo el código JavaScript del navegador dentro de una pestaña existe en un solo proceso del sistema operativo (¡e incluso en un hilo!). El JavaScript del navegador generalmente no accede directamente a las bases de datos y la comunicación dentro de una pestaña del navegador ocurre en la memoria en lugar de la red.

Entonces, ¿qué tienen en común?

Construcciones e implementaciones independientes. Piensa en el DOM como el recurso compartido que poseen tus microfrontends. El DOM de un microfrontend no debe ser tocado por otro microfrontend, similar a como la base de datos de un microservicio de backend no debe ser tocada por ningún microservicio excepto el que lo posee / controla.

## Definición técnica concreta

En el contexto de single-spa, un microfrontend suele ser un módulo de JavaScript en el navegador. Puedes leer más sobre esto [en la configuración recomendada](/docs/recommended-setup#in-browser-versus-build-time-modules).

## Tipos de Microfrontends

En el contexto de single-spa, hay tres tipos de microfrontends:

1. [aplicaciones single-spa](/docs/building-applications): Microfrontends que renderizan componentes para un conjunto de rutas específicas.
2. [paquetes single-spa](/docs/parcels-overview): Microfrontends que renderizan componentes sin controlar rutas.
3. [módulos de utilidad](/docs/recommended-setup#utility-modules-styleguide-api-etc): Microfrontends que epoxrtan logica JavaScript compartida sin renderizar componentes.

Una aplicación web puede incluir uno o más tipos de micro-extensiones. Mira [una comparación en profundidad](/docs/module-types) y nuestras recomendaciones para [elegir entre los tipos de microfrontends](/docs/recommended-setup#applications-versus-parcels-versus-utility-modules). 

## Comunicación entre Microfrontends

`import { thing } from 'other-microfrontend'` es la forma preferida de comunicarse entre microfrontends. [Aquí hay más documentación](/docs/recommended-setup#inter-app-communication) que trata esto con más detalle.

## Relación con single-spa

single-spa es un pequeño paquete de 5kb (gzipped) que orquesta el montaje y desmontaje de tus microfrontends. Sabe cuando montar la aplicación basandose en [funciones de actividad](/docs/api/#registerapplication) y puede hacerlo de una forma agnostica al framework con la ayuda de pequeñas [librerias adaptadoras](/docs/ecosystem).

## Rendimiento

Los Microfrontends suelen ser más eficientes que los monolitos de los que se originan. Esto se debe a la carga diferida (a través de [funciones de carga](/docs/api/#registerapplication)) y otras mejoras prácticas relacionadas con el rendimiento. Tu monolito probablemente tiene "estructuras en su closet" - Los microfrontends te brindan una ruta de migración que expondrán y resolverán los problemas causados por esas estructuras. Una consideración importante sobre el rendimiento es compartir una sola instancia de grandes librerías (como React, Vue, or Angular), lo cuál es muy recomendable. Para hacerlo, mira nuestra [configuración recomendada](/docs/recommended-setup#shared-dependencies).
