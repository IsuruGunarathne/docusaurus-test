# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: Serve
FROM nginx:alpine

RUN apk upgrade --no-cache \
    && sed -i 's|/var/run/nginx.pid|/tmp/nginx.pid|' /etc/nginx/nginx.conf \
    && sed -i '/^user /d' /etc/nginx/nginx.conf \
    && rm /docker-entrypoint.d/10-listen-on-ipv6-by-default.sh

COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN adduser -u 10014 -D -H -G nginx appuser \
    && chown -R 10014:nginx /usr/share/nginx/html \
    && chown -R 10014:nginx /var/log/nginx \
    && chown -R 10014:nginx /etc/nginx/conf.d

USER 10014

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
