# Vertice API

Guia rapida para que puedas empezar a probar la api de vertice
s
la documentacion mas tecnica esta en `proyecto/documentation/` por si quieres ver mas a fondo

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

para crear un producto

**GET** a `http://localhost:3000/v1/api/products/`

manda esto

```json
{
  "name": "Product 3",
  "quantity": 20,
  "price": 50.0
}
```

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

## Api en producción

También puedes acceder a la API desplegada en producción a través de Railway en el siguiente enlace:  
[Vertice API en Railway](https://vertice-prueba-tecnica-production.up.railway.app)

Los endpoints disponibles en producción son los mismos que en local:

- **Auth**: `/v1/api/auth/register` y `/v1/api/auth/login`
- **Productos**: `/v1/api/products/`
- **Órdenes**: `/v1/api/orders/`
