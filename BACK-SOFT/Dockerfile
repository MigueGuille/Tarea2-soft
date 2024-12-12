FROM node:20.14.0

# Instalar cliente de Postgres
RUN apt-get update && apt-get install -y postgresql-client

WORKDIR /usr/src/app

# Copiar el archivo package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias de Node.js
RUN npm install

# Copiar el resto de los archivos del proyecto
COPY . .

# Descargar el script wait-for-it
COPY wait-for-it.sh /usr/local/bin/wait-for-it.sh
RUN chmod +x /usr/local/bin/wait-for-it.sh

EXPOSE 7878

# Comando para ejecutar wait-for-it antes de iniciar el backend
CMD ["/usr/local/bin/wait-for-it.sh", "db:5432", "--", "node", "index.js"]

