---
date: 2021-05-31
title: Estrategia de Granjas de rendimiento en la red de MATIC
rootPage: /blog
sidebar: Blog
showTitle: true
hideAnchor: true
---

<!-- [Next Blog](/blog/first-blog) -->

## Introducción

En el poco tiempo que he estado en inversiones (alrededor de 6 meses) me he dado cuenta que la única manera de ganarle al mercado es **tener una estrategia**, y **seguirla** al pie de la letra, además encontré que es un excelente negocio: **aportar liquidéz** a los protocolos para generar algo de dinero

Este post es para compartirles mi estrategia de **Granjas de rendimiento en la red de MATIC**.

Soy una persona que le gusta tener el **control**, por lo tanto me gustan las estrategias en las que yo soy el que **controla mis ganancias**, y no tanto el mercado, por lo tanto generé esta estrategia que lo que hace es sacar **ventaja de las granjas**, que al tener poca liquidéz generan **APR's altos** de yield farming.

Para estar en el mismo canal, me gustaría proponer un glosario (porque puedo entender algunos términos diferentes a como los entiendes tú)

## Glosario

(Si quieres, puedes hacer un PR con estas definiciones)

- **APR**
- **APY**
- **Yield Farming**
- **Granjas de rendimiento / Granjas / Farms**
- **Confiar en el código**
- **Moneda de chocolate**
- **Rug pulls**
- **LP Token**
- **Liquidity exploit**

# La estrategia

Para esta estrategia confío en [rugdoctor](https://rugdoctor.io). por lo tanto sólo entro a proyectos auditados por la [Rug Doctor](bit.ly/JoinRugSteemer)  y que tengan una seguridad al menos media.


1. Todos los días entro a [rugdoctor.io](https://rugdoctor.io) y al [telegram de la Rug Doctor](bit.ly/JoinRugSteemer) buscando nuevas granjas **filtrando** sólo las que **no estén en rojo ni en amarillo** y estén en la red de **MATIC**, si aún no ha empezado, es buen momento para revisarla.
1. Entrar al **telegram** del DEX  y buscar **red flags**.
1. Antes de empezar las farms probar que te **permitan retirar y depositar dinero** (con $1 USD)
1. Cuando **empiecen las granjas**, meter en un **lp y en estables** y probar la red (depósitos, retiros y harvest)
1. Meter el **25%** de lo que quieras meter en los farms/pools con mejores apr's de sólo estables
1. Esperar **25 minutos**, meter otro **25%** de lo que quieras meter en los farms/pools con **mejores apr's** de sólo estables (pueden, o no, ser los que elegiste en el paso pasado])
1. Esperar **1 hora**, meter el otro **50%**.
1. Hacer **harvest** (recolectar) cada **15 minutos** (o cuando te sientas cómodo) e inmediatamente pasarlo a estable (por el primer día).
1. Días subsecuentes hacer harvest cada **4 u 8 horas** y pasar a estable (repetir hasta encontrar una nueva granja)
1. Si una granja empieza a dar **menos del 100%** de APR, considero sacar el dinero para tener liquidez para una nueva granja
1. Estar atento a que no cambie de status el proyecto en rugdoctor.io, ni ella es perfecta auditando.
1. Estar atento al telegram de la rug doctor y del DEX para ver si hay personas que adviertan sobre posibles scams

Si algo es scam, buscar la manera más segura de sacar los fondos, ya sea desde el contrato o desde la UI (página web)

## Qué considero como moneda estable?

Stable coin o moneda estable son esas monedas que **no varían en el tiempo su valor**, suelen estar **vinculadas al dólar americano** (USD), y para mí deben de tener una **variación** máxima de **1%**, las únicas monedas que conozco con estas características son:

- USDT
- USDC
- DAI

### Excepciones a la regla (pseudo-estables):

- Si hiciste tu análisis técnico y una moneda tiene una **prospección a largo plazo bullish** (al alza) puedes considerar como pseudo-estable a un LP con esa moneda, o a la moneda misma
- Sólo considero pseudo-estables a **monedas que tengan una alta capitalización de mercado** y que me gusten sus **fundamentales**, 
- Por más que la moneda de un exchange tenga una alta capitalización, no la considero pseudo-estable, sino moneda de chocolate (porque pueden ser víctimas de un **liquidity exploit**).
- **Ejemplos** de monedas que podría llegar a llamar pseudo-estables: **MATIC, BTC y ETH**
- Cuando **técnicamente te da una salida** una moneda pseudo-estable (en días), es **momento de salir** del pool/farm y convertir a estables reales
- **Yo** no considero a los pseudo-estables por la regla de dormir bien por las noches, pero **si te sirve a tí, déjame tus comentarios**.

## Cuando es momento de salirse de un pull/farm?

Cuando el **APR de una granja sea menor a 100%** y tengas otra granja que esté dando al menos un **2%** diario (**800% de apr**), puede ser buen momento de salirse de la granja y entrar a la nueva.

## Cómo me protejo de los Rug Pulls

La intención es evadir los rug pulls, para eso tenemos que confiar en el código y no cazarnos con ningún proyecto.

### Qué es un Rug Pull

Un rug pull es cuando se **jala la liquidez de un pull**, lo que hace que:

- Ya no puedas **acceder a los fondos** 😱☣️

O que

-  El valor de un **token se vaya al carajo** (bajar hasta un 99.99% de su valor)

### Tipos de rug pull

- **Hard Rug Pull**: Es cuando depositas en un protocolo y se **llevan todos tus fondos**.😱☣️😭

- **Soft Rug pull**: Es cuando se **roban la liquidez del token nativo de un exchange** (al vender muchísimos tokens), ésto suele hacer que **deje de ser rentable** un pull, pero tus **fondos están a salvo**, éstos normalmente los realiza el desarrollador o un exploit y suelen tener muchas formas.

## Evitando los Hard Rugs

Los soft rug son complicados de encontrar (he caído), por lo tanto mi estrategia nos previene de los Hard rugs (aunque me baso del conocimiento de un tercero para ésto).

El riesgo de esta estrategia **teóricamente** es del **4%** (si me hacen algún hard rug actualizaré este número).

Confío mucho en las auditorías de la [rug doctor](https://bit.ly/JoinRugSteemer), (allí es dónde flaquea mi estrategia porque no estoy haciendo **mi propio research**, pero en algún momento haré mis propias auditorías), tomando esto en cuanta las formas en las que evitamos perder nuestro dinero son.

1. Revisando que haya una auditoría en [rugdoctor.io](https://rugdoctor.io) del proyecto y no esté ni en **rojo ni en amarillo**
1. Probando la liquidez
	- Depositar una cantidad mínima en el pool/farm (yo lo hago con $1) e inmediatamente sacarlo inmediatamente, te deberá regresar el 96% completo del token
	- Probar hacer una recolección (harvest) del token, luego ir al exchange (quickswap o sushi.swap) y convertirlo a estable 
	- Ver que el precio del token sea similar en los exchanges que en el sitio web (si varía mucho quizá están maquillando los números para que metas más liquidez, esto no lo hace inseguro, pero lo hace difícil de manejar)

Recuerda realizar esta prueba muy seguido para que no se vuelen tus fondos.

De momento RugDoctor es SAFU, pero quizá cambie en un futuro.


## Resultados

La **intención** es generar un **30% mensual**, de momento he logrado alrededor de un **17%/mes** (mayo) porque he probado diferentes estrategias, voy a ser más metódico con mi estrategia para ver cuales son los resultados para el siguiente mes (**junio**) y editar este repo.

## Notas

- **Nada de ésto es consejo de inversión**, es una estrategia que me ha funcionado durante 1 mes, puede no funcionarte a tí, y puede que en algún **momento me deje de funcionar**, y **puede que pierda todo** por no tener en cuenta algo.
- Mi estrategia **no funciona** tan bien para **granjas establecidas** (para esas grangas hay otras estrategias)
- Yo **confío sólo en el código**, no en las personas
- Yo **entro al principio de los farms**, el primer día, el primer segundo, 
- La intención (por el momento no he perdido menos en ninguna granja) es que el riesgo potencial sea perder el 4% que te cobran para ingresar a las granjas (no hay forma de asegurarlo, pero hay formas de bajar el riesgo)
- Mi estrategia contempla un **98% farming**, mi trading lo hago en otros lugares, y **hacer farming con monedas de chocolate es exponerme muchísimo al mercado**, lo que ya probé y no me gustó, me gusta dormir tranquilo.
- Nunca entro con el **token nativo** (por más tentador que suena), mi estrategia se basa en **dormir tranquilo** y sacar un **1% diario** (interés compuesto da más del 3000%) completamente sustentable, osea, si hay **riesgo o volatilidad lo evito.**
- En general esta estrategia se parece más a depositar en el banco y que te den intereses a las estrategias de crypto, pero gracias a eso duermo relativamente bien, y puedo meter sueldos enteros
- Es mi estrategia, seguro **hay algo que no este viendo**, pero ojalá que sea **sustentable** para ambos y que al año pueda lograr obtener mi segundo sueldo, todo ésto ha funcionado, porque nunca he caído en un **hard rug**, pero eso puede cambiar en cualquier momento.
- Esta estrategia sólo ha sido probada **en la red de Matic**, para redes con comisiones más altas, no la recomiendo.
- Si te sirve la estrategia, por favor comparteme tus comentarios a @behagoras en twitter
- Eres libre de mandarme tus comentarios para mejorar esta estrategia, además de que puedes hacer un pull request para poder afinar ésto
- Mi estrategia irá mutando, intentaré mantener este blogpost actualizado

> Si generas una **estrategia basada en ésta**, pero para otros contextos, por favor [compártemela en mi twitter](https://twitter.com/behagoras).

> **Nada de ésto es consejo de inversión**, es una estrategia que me ha funcionado durante 1 mes, puede no funcionarte a tí, y puede que en algún **momento me deje de funcionar**, y **puede que pierda todo** por no tener en cuenta algo.

## Happy farming!

![HAppy Farming](https://media.giphy.com/media/RrU8f9lImvJja/source.gif)