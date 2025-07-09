# Vertice API

hola bienvenido a la api de vertice aca te dejo una guia rapida para que puedas empezar a probar todo lo que tenemos

la documentacion mas detallada esta en `proyecto/documentation/` por si quieres ver mas a fondo

---

## Endpoints de auth

aca puedes registrarte y loguearte para empezar a usar la api

### registro

usa este endpoint para crear tu cuenta

**POST** a `http://localhost:3000/v1/api/auth/register`

esto es lo que tienes que mandar

```json
{
  "firstnames": "juan jesus",
  "lastnames": "esquives zapata",
  "email": "juanjesus@gmail.com",
  "password": "12346789"
}
```

si todo sale bien te va a devolver tu usuario y un token para que puedas autenticarte

### login

aca te logueas con tu correo y clave

**POST** a `http://localhost:3000/v1/api/auth/login`

manda esto

```json
{
  "email": "juanjesus@gmail.com",
  "password": "12346789"
}
```

si los datos estan bien te devuelve el token para que puedas hacer cosas que requieren estar logueado

---

## endpoints de productos y ordenes

aca puedes ver tus ordenes y crear nuevas

### ver tus ordenes

**GET** a `http://localhost:3000/v1/api/orders/`

tienes que mandar el token en el header Authorization asi

```
Authorization: Bearer tu_token
```

te devuelve todas las ordenes que hiciste

---

### crear una nueva orden

**POST** a `http://localhost:3000/v1/api/orders/`

manda algo asi

```json
{
  "shippingAddress": "Peru - Lima",
  "orderDetails": [
    {
      "quantity": 1,
      "productId": 3
    }
  ]
}
```

si todo esta bien te devuelve la orden creada

---

Para usar este proyecto necesitas tener Node.js y Docker instalados en tu máquina.

La forma más sencilla de ponerlo en marcha es usando el `docker-compose` que ya viene configurado. Esto te permitirá levantar la base de datos, Adminer y la API sin complicaciones. Solo asegúrate de tener tu archivo `.env` con las variables de entorno necesarias.

Sigue estos pasos para empezar:

1. Clona el repositorio.
2. Copia el archivo `.env.example` a `.env` y completa las variables que faltan.
3. Ejecuta `docker-compose up` para levantar todos los servicios.

¡Listo! Ahora tendrás la base de datos y Adminer corriendo para que puedas ver y gestionar los datos fácilmente.
