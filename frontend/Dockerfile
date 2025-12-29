FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
# SPA fallback
RUN sed -i 's|try_files $uri $uri/ =404;|try_files $uri $uri/ /index.html;|g' /etc/nginx/conf.d/default.conf
