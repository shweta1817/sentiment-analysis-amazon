# Use Node.js as the base image
FROM node:18-alpine 

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install 

# Copy project files
COPY . .

# Build the project
RUN npm run build

# Use Nginx to serve the built Vite app
FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html

# Expose port 80 for frontend
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
