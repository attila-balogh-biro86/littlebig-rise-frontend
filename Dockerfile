FROM node:lts-alpine3.20 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g @angular/cli

COPY . .

ENV NODE_OPTIONS="--openssl-legacy-provider"

RUN ng build --configuration=production

FROM nginx:stable-alpine3.20

COPY --from=build app/dist/angular-forms /usr/share/nginx/html

EXPOSE 80
