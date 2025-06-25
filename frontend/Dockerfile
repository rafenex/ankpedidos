# Build do frontend usando node
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Build para produção (ajuste o comando se seu projeto for diferente)
RUN npm run build -- --configuration production

# Imagem para servir frontend com nginx
FROM nginx:alpine

# Copia os arquivos buildados para o nginx servir
COPY --from=build /app/dist/front-end/browser /usr/share/nginx/html

# Expor porta 80 padrão
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]