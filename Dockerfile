FROM node:alpine

WORKDIR /app
COPY server/ .
COPY client/build public
RUN npm install

CMD ["node", "server.js"]
