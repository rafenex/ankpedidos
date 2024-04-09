FROM node:20-alpine as angular
WORKDIR /ng-app
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine

RUN mkdir -p /usr/share/nginx/html

COPY --from=angular /ng-app/dist/front-end/browser /usr/share/nginx/html
EXPOSE 80