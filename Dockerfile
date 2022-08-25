FROM node:alpine as application

ENV NODE_ENV production
ARG GOOGLE_APPLICATION_CREDENTIALS
ENV GOOGLE_APPLICATION_CREDENTIALS $GOOGLE_APPLICATION_CREDENTIALS

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY .npmrc .

RUN npx google-artifactregistry-auth
RUN npm install
COPY . .

RUN npm build

# Bundle static assets with nginx
FROM nginx:latest as production
ENV NODE_ENV production

COPY --from=application /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]