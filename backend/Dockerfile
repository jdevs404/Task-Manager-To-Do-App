FROM node:18-alpine
WORKDIR /app

# Install dependencies needed for esbuild/native modules
RUN apk add --no-cache bash git python3 g++ make

COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]
