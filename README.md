# cloud_paas_2017
Trabajo cloud de la materia año 2017.

## Motivación:

Realizar un API REST utilizando los servicios de `Google Cloud Platform`, especialmente [Functions](https://firebase.google.com/docs/functions/), [Firebase real time database](https://firebase.google.com/docs/database/) y [Firebase hosting](https://firebase.google.com/docs/hosting/).
Utilizar tecnología [PaaS](https://en.wikipedia.org/wiki/Platform_as_a_service) para desarrollar aplicaciones cloud.

Este repositorio tiene un esqueleto (layout) recomendado para utilizar [Functions](https://firebase.google.com/docs/functions/) junto con el framework web de NodeJS [ExpresJS](https://expressjs.com/).
[Integración de Functions y Express](https://firebase.google.com/docs/functions/http-events#using_existing_express_apps)

La idea es tomar este repositorio como base y asi desarrollar su aplicación.



## Consigna

Cada grupo debe realizar la implementación de una API REST como asi también realizar una UI utilizando tecnologia web.

* API REST: Debe ser realizada utilizando [Firebase functions](https://firebase.google.com/docs/fuctions/)
* Interfaz gráfica: Debe ser realizada utilizando tecnologia web (HTML/CSS/JS) y hosteada utilizando [Firebase hosting](https://firebase.google.com/docs/hosting/)
* Base de Datos: Debe utilizar [Firebase functions](https://firebase.google.com/docs/database/)


## Instalar dependencias necesaria para trabajar

```bash
npm install -g firebase-tools
```


## Iniciar servidor local de desarrollo

```
firebase serve
```

Nota: Todo el ambiente de desarrollo y deploy se contorla desde la herramienta [firebase](https://firebase.google.com/docs/cli/) de linea de comandos

