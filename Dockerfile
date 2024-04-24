FROM httpd:2.4

COPY ./build/  /usr/local/apache2/htdocs/

WORKDIR /usr/local/apache2/

RUN chown -R daemon:daemon htdocs &&\
    chmod -R 755 htdocs