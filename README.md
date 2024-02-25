# Dev´s Memes

Este proyecto consiste en una aplicación web desarrollada en React para la visualización y gestión de memes. La aplicación permite a los usuarios autenticarse, ver memes, agregar nuevos memes, ver detalles de cada meme y ver los comentarios de cada meme.

## Tech Stack

- React
- React Router
- React Bootstrap
- TypeScript
- Formik

## Installation 

1. Clona el repositorio:

```javascript
git clone https://github.com/mcristina27/eventrid-technical-test
```

2. Instala las dependencias:

```javascript
cd eventrid-technical-test
```
```javascript
npm install
```
3. Desplegar en dev:

```javascript
npm start
```
2. Run Backend
```javascript
npx json-server --watch backend/db.json --port 3005
```

## Characteristics

- **Login:** Permite a los usuarios autenticarse y poder visualizar la información de la pagina. 
- **Listado de memes:** Muestra un listado de memes. imagen, descripcion, cantidad de likes y comentarios.
- **Creacion de memes:** Permite la creacion de memes de los usuarios, insertando el nombre, imagen y descripción.

## Challenges

- Login o mecanismo de seguridad para autentificarse y poder hacer uso del servicio.
```javascript
Usuario logger:
Email: admin@gmail.com
Password: admin
```
*Se protegieron las rutas con la autenticación *
- Desplegar listado de memes, considerando imagen, nombre, cantidad de likes.
        ```
		Después del login, agregué también paginación pero por algún extraño motivo no devuelve el page en la api pero si el limit así que decidí comentarlo.
        ```
- Vista para visualizar meme en detalle el cual además de los datos del punto anterior debe considerar desplegar descripción y cantidad de comentarios
        ```
		Cuando se da click a una imagen de los cards se abre un modal con el detalle.
        ```
- Habilitar formulario para crear un meme considerando los campos mencionados en la sección de backend (para la imagen basta con una url, no es necesario subir una imagen como tal).
		```
        Utilicé un modal con un formulario para registrar los memes.
        ```
- Técnica de optimización implementada
        ```
		Code-Splitting con React.lazy y Suspense para renderizar la iteración de los cards memes.
		Lazy load para la imagen del Login
        ```
- El diseño se deja a libertad, la evaluación estará enfocada a lo funcional más que a lo estético.
		```
        Aquí utilicé memes de desarrolladores, recomiendo revisar todos están bien graciosos jaja
        ```
- Implementación de pruebas unitarias a componentes
		```
        Utilice  test-library para hacer una pequeña prueba con jest.
        ```
