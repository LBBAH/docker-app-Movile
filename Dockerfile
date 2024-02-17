# Use an official Node.js runtime as the base image
FROM node:18.19.1

# Set the working directory inside the container
WORKDIR /

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Expose the port your app will run on
EXPOSE 3100

# Start your React Native app
CMD ["npm", "start"]