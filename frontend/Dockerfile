# Build stage
FROM node:20-alpine AS build
WORKDIR /app

RUN apk add --no-cache bash git python3 g++ make

COPY package*.json ./

# Install deps (ignore peer conflicts safely in Docker)
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

# Serve stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]