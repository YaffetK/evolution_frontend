FROM node:alpine
COPY . /src
WORKDIR /src

CMD ["executable", "Hello", "Yaffet"]