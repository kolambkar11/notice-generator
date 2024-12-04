# Use a lightweight Node.js base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Install curl and bash (required for Bun installation)
RUN apk add --no-cache curl bash

# Install Bun
RUN curl -fsSL https://bun.sh/install | bash

# Add Bun to PATH
ENV PATH="/root/.bun/bin:$PATH"

# Copy the frontend source code to the container
COPY . .

# Install dependencies using Bun
# RUN bun install

# Expose the frontend development server port
EXPOSE 3000

# Start the development server
CMD ["bun", "start"]
