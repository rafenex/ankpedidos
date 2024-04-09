
FROM node:18.18-alpine as build


WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build



FROM nginx:latest
# COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/front-end /usr/share/nginx/html
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]