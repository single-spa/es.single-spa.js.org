(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{144:function(e,n,o){"use strict";o.r(n),o.d(n,"frontMatter",(function(){return i})),o.d(n,"rightToc",(function(){return c})),o.d(n,"default",(function(){return p}));var a=o(1),r=o(9),t=(o(0),o(307)),i={id:"microfrontends-concept",title:"Descripci\xf3n general de Microfrontends",sidebar_label:"Descripci\xf3n general"},c=[{value:"Comparaci\xf3n con Microservices",id:"comparaci\xf3n-con-microservices",children:[]},{value:"Definici\xf3n t\xe9cnica concreta",id:"definici\xf3n-t\xe9cnica-concreta",children:[]},{value:"Tipos de Microfrontends",id:"tipos-de-microfrontends",children:[]},{value:"Comunicaci\xf3n entre Microfrontends",id:"comunicaci\xf3n-entre-microfrontends",children:[]},{value:"Relaci\xf3n con single-spa",id:"relaci\xf3n-con-single-spa",children:[]},{value:"Rendimiento",id:"rendimiento",children:[]}],s={rightToc:c},d="wrapper";function p(e){var n=e.components,o=Object(r.a)(e,["components"]);return Object(t.b)(d,Object(a.a)({},s,o,{components:n,mdxType:"MDXLayout"}),Object(t.b)("h1",{id:"concepto-microfrontends"},"Concepto: Microfrontends"),Object(t.b)("p",null,"Video tutorial : ",Object(t.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=3EUfbnHi6Wg&list=PLLUD8RtHvsAOhtHnyGx57EYXoaNsxGrTU&index=1"}),"Youtube")," / ",Object(t.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.bilibili.com/video/av83619684"}),"Bilibili")),Object(t.b)("p",null,"Un microfrontend es un microservicio que existe dentro de un navegador."),Object(t.b)("p",null,"Microfrontends son secciones de tu interfaz de usuario, que a menudo constan de docenas de componentes, que usan frameworks como React, Vue y Angular para renderizar sus componentes. Cada microfrontend puede ser administrado por un equipo diferente y podr\xeda ser implementado usando su propio framework. Es pr\xe1ctico y se sugiere usar un solo framework para todos tus microfrontends, aunque podr\xedas agregar frameworks adicionales al migrar o al experimentar.  "),Object(t.b)("p",null,"Cada microfrontend tiene su propio repositorio de git, su propio archivo ",Object(t.b)("inlineCode",{parentName:"p"},"package.json")," y su propia configuraci\xf3n de herramienta de compilaci\xf3n. Como resultado, cada microfrontend tiene ",Object(t.b)("strong",{parentName:"p"},"un proceso de compilaci\xf3n independiente")," y ",Object(t.b)("strong",{parentName:"p"},"un despliegue / CI independiente"),". Esto generalmente significa que cada repositorio tiene tiempos de compilaci\xf3n r\xe1pidos."),Object(t.b)("h2",{id:"comparaci\xf3n-con-microservices"},"Comparaci\xf3n con Microservices"),Object(t.b)("p",null,"Los microservicios son servicios de backend que se ejecutan en su propio proceso de sistema operativo, controlan sus propias bases de datos y se comunican entre s\xed a trav\xe9s de la red."),Object(t.b)("p",null,"Comparado con los microfrontends, todos ellos existen dentro de una sola pesta\xf1a del navegador: todo el c\xf3digo JavaScript del navegador dentro de una pesta\xf1a existe en un solo proceso del sistema operativo (\xa1e incluso en un hilo!). El JavaScript del navegador generalmente no accede directamente a las bases de datos y la comunicaci\xf3n dentro de una pesta\xf1a del navegador ocurre en la memoria en lugar de la red."),Object(t.b)("p",null,"Entonces, \xbfqu\xe9 tienen en com\xfan?"),Object(t.b)("p",null,"Construcciones e implementaciones independientes. Piensa en el DOM como el recurso compartido que poseen tus microfrontends. El DOM de un microfrontend no debe ser tocado por otro microfrontend, similar a como la base de datos de un microservicio de backend no debe ser tocada por ning\xfan microservicio excepto el que lo posee / controla."),Object(t.b)("h2",{id:"definici\xf3n-t\xe9cnica-concreta"},"Definici\xf3n t\xe9cnica concreta"),Object(t.b)("p",null,"En el contexto de single-spa, un microfrontend suele ser un m\xf3dulo de JavaScript en el navegador. Puedes leer m\xe1s sobre esto ",Object(t.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/recommended-setup#in-browser-versus-build-time-modules"}),"en la configuraci\xf3n recomendada"),"."),Object(t.b)("h2",{id:"tipos-de-microfrontends"},"Tipos de Microfrontends"),Object(t.b)("p",null,"En el contexto de single-spa, hay tres tipos de microfrontends:"),Object(t.b)("ol",null,Object(t.b)("li",{parentName:"ol"},Object(t.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/building-applications"}),"aplicaciones single-spa"),": Microfrontends que renderizan componentes para un conjunto de rutas espec\xedficas."),Object(t.b)("li",{parentName:"ol"},Object(t.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/parcels-overview"}),"paquetes single-spa"),": Microfrontends que renderizan componentes sin controlar rutas."),Object(t.b)("li",{parentName:"ol"},Object(t.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/recommended-setup#utility-modules-styleguide-api-etc"}),"m\xf3dulos de utilidad"),": Microfrontends que epoxrtan logica JavaScript compartida sin renderizar componentes.")),Object(t.b)("p",null,"Una aplicaci\xf3n web puede incluir uno o m\xe1s tipos de micro-extensiones. Mira ",Object(t.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/module-types"}),"una comparaci\xf3n en profundidad")," y nuestras recomendaciones para ",Object(t.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/recommended-setup#applications-versus-parcels-versus-utility-modules"}),"elegir entre los tipos de microfrontends"),". "),Object(t.b)("h2",{id:"comunicaci\xf3n-entre-microfrontends"},"Comunicaci\xf3n entre Microfrontends"),Object(t.b)("p",null,Object(t.b)("inlineCode",{parentName:"p"},"import { thing } from 'other-microfrontend'")," es la forma preferida de comunicarse entre microfrontends. ",Object(t.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/recommended-setup#inter-app-communication"}),"Aqu\xed hay m\xe1s documentaci\xf3n")," que trata esto con m\xe1s detalle."),Object(t.b)("h2",{id:"relaci\xf3n-con-single-spa"},"Relaci\xf3n con single-spa"),Object(t.b)("p",null,"single-spa es un peque\xf1o paquete de 5kb (gzipped) que orquesta el montaje y desmontaje de tus microfrontends. Sabe cuando montar la aplicaci\xf3n basandose en ",Object(t.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/#registerapplication"}),"funciones de actividad")," y puede hacerlo de una forma agnostica al framework con la ayuda de peque\xf1as ",Object(t.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/ecosystem"}),"librerias adaptadoras"),"."),Object(t.b)("h2",{id:"rendimiento"},"Rendimiento"),Object(t.b)("p",null,"Los Microfrontends suelen ser m\xe1s eficientes que los monolitos de los que se originan. Esto se debe a la carga diferida (a trav\xe9s de ",Object(t.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/#registerapplication"}),"funciones de carga"),') y otras mejoras pr\xe1cticas relacionadas con el rendimiento. Tu monolito probablemente tiene "estructuras en su closet" - Los microfrontends te brindan una ruta de migraci\xf3n que expondr\xe1n y resolver\xe1n los problemas causados por esas estructuras. Una consideraci\xf3n importante sobre el rendimiento es compartir una sola instancia de grandes librer\xedas (como React, Vue, or Angular), lo cu\xe1l es muy recomendable. Para hacerlo, mira nuestra ',Object(t.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/recommended-setup#shared-dependencies"}),"configuraci\xf3n recomendada"),"."))}p.isMDXComponent=!0},307:function(e,n,o){"use strict";o.d(n,"a",(function(){return c})),o.d(n,"b",(function(){return l}));var a=o(0),r=o.n(a),t=r.a.createContext({}),i=function(e){var n=r.a.useContext(t),o=n;return e&&(o="function"==typeof e?e(n):Object.assign({},n,e)),o},c=function(e){var n=i(e.components);return r.a.createElement(t.Provider,{value:n},e.children)};var s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=Object(a.forwardRef)((function(e,n){var o=e.components,a=e.mdxType,t=e.originalType,c=e.parentName,s=function(e,n){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===n.indexOf(a)&&(o[a]=e[a]);return o}(e,["components","mdxType","originalType","parentName"]),p=i(o),l=a,u=p[c+"."+l]||p[l]||d[l]||t;return o?r.a.createElement(u,Object.assign({},{ref:n},s,{components:o})):r.a.createElement(u,Object.assign({},{ref:n},s))}));function l(e,n){var o=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var t=o.length,i=new Array(t);i[0]=p;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c[s]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<t;l++)i[l]=o[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,o)}p.displayName="MDXCreateElement"}}]);