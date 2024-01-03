FROM node:16-slim

RUN apt-get update
RUN apt-get -y upgrade
RUN apt-get install -y --no-install-recommends \
    git \
    libpq-dev \
    gcc \
    linux-libc-dev \
    libc6-dev \
    make
RUN apt-get install -y --no-install-recommends \
    build-essential \
    cmake \
    wget \
    unzip \
    zip \
    ffmpeg
RUN npm install -g npm@9.8

# RUN npm install --global yarn
WORKDIR /usr/src/app
COPY package.json .
# COPY package-lock.json .
COPY yarn.lock .
RUN yarn install
COPY . .
# RUN npm run sass-deploy
RUN yarn build 

ENV HOST=0.0.0.0
ENV PORT=8000
EXPOSE ${PORT}
EXPOSE 8080

CMD ["yarn", "dev"]