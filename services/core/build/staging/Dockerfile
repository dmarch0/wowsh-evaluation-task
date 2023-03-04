FROM node:18.14.2-alpine

WORKDIR /app
ADD package.json package-lock.json ./
RUN npm ci
ADD . /app

ENTRYPOINT ["npm", "start"]
