FROM node:alpine

WORKDIR /usr/node-app

COPY ./ ./

RUN npm install

CMD ['npm', 'start']