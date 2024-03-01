FROM node:alpine
WORKDIR /app
COPY . .
RUN npm install -g @angular/cli --legacy-peer-deps
RUN npm install --legacy-peer-deps
CMD ["ng", "serve", "--host", "0.0.0.0"]