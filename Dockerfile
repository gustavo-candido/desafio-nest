FROM node:12.14.0-alpine3.11

COPY . . 

RUN npm install

RUN npm i -g @nestjs/cli@7.4.1

RUN npm install react-scripts@3.4.0

RUN npm run typeorm migration:run

RUN npm run build

RUN node build/main.js

EXPOSE 3000