#!/bin/bash

set -e  # para parar se algo der erro

echo "### Construindo backend ###"
cd backend
mvn clean package
cd ..
echo "### Rebuildando imagens e subindo containers ###"
docker-compose build backend 
docker-compose up -d backend 

echo "### Construindo frontend ###"
cd frontend
npm install
npm run build -- --configuration production
cd ..
echo "### Rebuildando imagens e subindo containers ###"
docker-compose build  frontend
docker-compose up -d  frontend

echo "### Deploy finalizado com sucesso! ###"