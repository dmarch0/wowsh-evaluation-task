FROM node:18.14.2-alpine as build

WORKDIR /app

COPY ./web-client /app/web-client/

RUN cd /app/web-client && npm ci --include=dev

RUN cd /app/web-client && npm run build

FROM nginx:stable-alpine

COPY --from=build /app/web-client/dist /bin/www

COPY ./web-client/build/staging/nginx.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
