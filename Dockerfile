FROM node:alpine
COPY . /app
WORKDIR /app
RUN chown node:node ./
USER node
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV
RUN npm ci && npm cache clean --force
EXPOSE 8080
CMD ["node", "./app.js"]
