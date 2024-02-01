FROM node:alpine

WORKDIR /app
COPY server/ .
RUN npm install
#CMD ["node", "server.js"]
# CMD ["npm", "start"]
CMD ["node", "server.js"]
