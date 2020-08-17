FROM nginx:1.16.0-alpine
COPY ./build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d
EXPOSE 80 443
ENTRYPOINT ["nginx", "-g", "daemon off;"]