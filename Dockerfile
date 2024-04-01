# Use the official Node.js runtime as the base image
FROM node:alpine

# Set the working directory to /app in the container
WORKDIR /app

# Copy the entire application source code into the container
COPY . .

# Install Node.js dependencies
RUN npm install

# Set the entry point to start the Express server when the container starts
CMD ["node", "server.js"]
EXPOSE 3000
