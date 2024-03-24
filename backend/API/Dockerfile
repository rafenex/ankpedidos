FROM maven:3.8.4-openjdk-17 as builder
WORKDIR /app
COPY ./API/pom.xml /app/pom.xml
RUN mvn verify clean --fail-never
COPY ./API/src /app/src
RUN mvn clean package

FROM openjdk:17
WORKDIR /app
COPY --from=builder /app/target/pedidos-0.0.1-SNAPSHOT.jar pedidos-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java", "-jar", "/app/pedidos-0.0.1-SNAPSHOT.jar"]
