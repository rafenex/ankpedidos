# Usamos imagem oficial do Maven para build multi-stage
FROM maven:3.8.5-openjdk-17 AS build

WORKDIR /app

# Copia arquivos do Maven
COPY pom.xml .
COPY src ./src

# Build do jar (pulamos testes para agilizar)
RUN mvn clean package -DskipTests

# Imagem runtime leve com OpenJDK 17
FROM openjdk:17-jdk-alpine

WORKDIR /app

# Copia o jar gerado do build
COPY --from=build /app/target/pedidos-0.0.1-SNAPSHOT.jar ./app.jar

# Comando padrão para rodar o Spring Boot
ENTRYPOINT ["java", "-jar", "app.jar"]