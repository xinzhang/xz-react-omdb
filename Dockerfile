FROM node:13.7.0-slim as builder

ENV NODE_PATH=src

WORKDIR /var/app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN NODE_ENV=development npm install

COPY public/ public
COPY src/ src
COPY server/ server
COPY .env .env
RUN npm install dotenv-cli -g

RUN NODE_ENV=production \
  && dotenv -e .env npm run build

FROM node:13.7.0-slim

ENV NODE_ENV=production
WORKDIR /var/app
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install --only=production
EXPOSE 3000

COPY --from=builder /var/app/build/ /var/app/build
COPY --from=builder /var/app/server/index.js /var/app/server/index.js

CMD ["npm", "run", "prod"]
