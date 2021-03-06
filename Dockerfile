FROM node:14-slim

WORKDIR /app

COPY ./package.json ./

RUN npm install
RUN npm install -g nodemon
COPY . .

EXPOSE 5000
CMD [ "nodemon", "server.js" ]