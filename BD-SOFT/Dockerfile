FROM postgres:latest

ENV POSTGRES_USER=postgres
ENV DB_HOST=db
ENV POSTGRES_PASSWORD=miguel
ENV POSTGRES_DB=Bd_Videojuego
COPY init.sql /docker-entrypoint-initdb.d/

EXPOSE 5432

CMD ["postgres"]