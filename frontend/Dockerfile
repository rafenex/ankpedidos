# syntax=docker/dockerfile:1
FROM node:20-alpine as angular
WORKDIR /ng-app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:stable
ARG name
COPY --from=angular /ng-app/dist/front-end/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80