# Stage 0, for downloading project’s npm dependencies, building and compiling the app.
FROM node:18.18 as node

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add .bin to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install package.json (o sea las dependencies)
COPY package.json /usr/src/app/package.json
RUN npm install
RUN npm install -g @angular/cli@17.2.0 

# add app
COPY . /usr/src/app

# start app
RUN npm run build

# Stage 1, for copying the compiled app from the previous step and making it ready for production with Nginx
FROM nginx:alpine
COPY --from=node /usr/src/app/dist/front-end /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf