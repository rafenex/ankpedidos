FROM node:18.17.1-alpine As builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install 

COPY . .
RUN npm install -g @angular/cli@17.2.0
RUN npm run build 

FROM nginx:1.15.8-alpine

EXPOSE 8080

COPY ./nginx/nginx-custom.conf /etc/nginx/conf.d/default.conf
RUN chmod g+rwx /var/cache/nginx /var/run /var/log/nginx
RUN sed -i.bak 's/listen\(.*\)80;/listen 8080;/' /etc/nginx/conf.d/default.conf
RUN sed -i.bak 's/^user/#user/' /etc/nginx/nginx.conf

COPY --from=builder /app/dist/comunicacao/ /usr/share/nginx/html
COPY ./nginx/health/health.json /usr/share/nginx/html/health.json

RUN addgroup nginx root
