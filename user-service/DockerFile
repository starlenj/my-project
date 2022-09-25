FROM node:12

WORKDIR /src

COPY package.json /src

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000