# ----------------------------
# build from source
# ----------------------------
    FROM node:18 AS build

    WORKDIR /app
    
    COPY package*.json ./
    RUN npm ci
    RUN npm instrall -f @angular/cli
    
    COPY . .

    RUN npm run build 
    
    # ----------------------------
    # run with nginx
    # ----------------------------
    FROM nginx:alpine

    COPY ./nginx.conf /etc/nginx/conf.d/default.conf
    COPY --from=build /app/dist/front-end/browser /usr/share/nginx/html
    EXPOSE 80