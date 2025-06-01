FROM node:18

RUN apt-get update && apt-get install -y \
    git \
    watchman \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

RUN npm install -g expo-cli

EXPOSE 8081 19000 19001 19002

CMD ["bash"]
