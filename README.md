# Weather Application

This is a weather application that allows you to search for the current weather for almost any city in the world. You can search by city and country or just by city. Additionally, the application has the capability to display the weather at your exact location.

## Features

- Search for current weather by city and country or just by city.
- Get weather at your exact location using geolocation.
- Detailed information about temperature, weather conditions, wind speed, and more.
- Simple and user-friendly interface.

## Screenshots

[![Weather App](https://i.ibb.co/1bXzrbd/weather-app-cdm.png)](https://weather-app-cdm.netlify.app/)

## How to Use

1. Clone this repository to your local machine.
2. Register at rapidapi.com to obtain a weather API key.
3. Use the Nominatim API freely without an API key. Just follow the API documentation.
4. Create a file named .env in the project's root directory and add your API keys and URLs as follows:

```conf
// .env
API_WEATHER_URL="WEATHER_RAPID_API_URL"
API_WEATHER_KEY="RAPID_API_API_KEY"
API_CITY_URL="NOMINATRIM_API_URL"
```

## How to Run in Development Mode

1. Ensure you have Node.js installed on your system.
2. Install project dependencies by running `npm install` in the terminal from the project's root directory.
3. To run the application in development mode using Webpack DevServer, use the
   following command:

```bash
npm run dev:watch
```

This will start the development server and you will be able to access the application in your browser at http://localhost:8080 or another URL provided in the terminal that you define in the webpack.config.dev.js file within the devServer plugin.

## Technologies Used

- HTML, CSS, and JavaScript for the user interface.
- Rapid Api - WeatherAPI for weather data
- Nominatim to validate the existence of places in the world.
- Webpack bunddle
- Netlify for deploy

## Contributions

Contributions are welcome. If you find any issues or have an improvement in mind, please open an issue or submit a pull request.

## Licencia

This project is under the MIT License. For more details, see the LICENSE file.

Project developed by Carlos Machado - [Linkedin](https://www.linkedin.com/in/carlos-machado-mejia/)

---

# Aplicación de Clima

Esta es una aplicación de clima que te permite buscar el clima actual para casi cualquier ciudad del mundo. Puedes buscar por ciudad y país o solo por ciudad. Además, la aplicación tiene la capacidad de mostrar el clima en tu ubicación exacta.

## Características

- Buscar el clima actual por ciudad y país o solo por ciudad.
- Obtener el clima en tu ubicación exacta utilizando la geolocalización.
- Información detallada sobre la temperatura, condiciones climáticas, velocidad del viento y más.
- Interfaz simple y fácil de usar.

## Capturas de Pantalla

[![Weather App](https://i.ibb.co/1bXzrbd/weather-app-cdm.png)](https://weather-app-cdm.netlify.app/)

## Cómo Usar

1. Clona este repositorio a tu máquina local.
2. Regístrate en [rapidapi.com](https://rapidapi.com/weatherapi/api/weatherapi-com/) para obtener una clave API de clima.
3. Usa libremente la API de [Nominatim](https://nominatim.openstreetmap.org) Sin necesidad de una API KEY, solo has las
4. Crea un archivo `.env` en el directorio raíz del proyecto y agrega tus claves API y URL de la siguiente manera:

```conf
// .env
API_WEATHER_URL="WEATHER_RAPID_API_URL"
API_WEATHER_KEY="RAPID_API_API_KEY"
API_CITY_URL="NOMINATRIM_API_URL"
```

## Cómo Ejecutar en Modo Desarrollo

1. Asegúrate de tener Node.js instalado en tu sistema.
2. Instala las dependencias del proyecto ejecutando npm install en la terminal desde la raíz del proyecto.
3. Para ejecutar la aplicación en modo desarrollo con Webpack DevServer, usa el siguiente comando:

```bash
npm run dev:watch
```

Esto iniciará el servidor de desarrollo y podrás acceder a la aplicación en tu navegador en http://localhost:8080 u otra URL proporcionada en la terminal que tu definas en el archivo webpack.config.dev.js dentro del plugin de devServer.

## Tecnologías Utilizadas

- HTML, CSS y JavaScript para la interfaz de usuario.
- WeatherAPI.com para los datos climáticos.
- Nominatim para validar la existencia de lugares del mundo.
- Webpack bunddle.
- Netlify para el despliegue.

## Contribuciones

Las contribuciones son bienvenidas. Si encuentras algún problema o tienes una mejora en mente, por favor abre un problema o envía una solicitud de extracción.

## Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, consulta el archivo LICENSE.

Proyecto desarrollado por Carlos Machado - [Linkedin](https://www.linkedin.com/in/carlos-machado-mejia/)
