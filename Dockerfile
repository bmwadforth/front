FROM node:alpine as application

ENV NODE_ENV production
WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY .npmrc .

RUN npm install
COPY . .

RUN npm run build

# Bundle static assets with nginx
FROM nginx:latest as production
ENV NODE_ENV production

COPY --from=application /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]