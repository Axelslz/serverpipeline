FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install -g npm@6.14.18
RUN npm config set cache /home/node/app/.npm-cache --global
RUN mkdir -p /home/node/app/.npm-cache && chown -R node:node /home/node/app/.npm-cache
USER node
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]


