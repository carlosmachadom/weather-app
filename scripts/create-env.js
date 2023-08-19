const fs = require('fs');
const envContent = `
API_WEATHER_URL=${process.env.API_WEATHER_URL}\n
API_WEATHER_KEY=${process.env.API_WEATHER_KEY}\n
API_CITY_URL=${process.env.API_CITY_URL}\n
`;

fs.writeFileSync('./.env', envContent.trim());