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
WORKDIR /usr/src/app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN npm run sass-deploy
RUN npm run service-worker
RUN npm run build --if-present
RUN make run-no-service-worker

ENV HOST=0.0.0.0
ENV PORT=8080
EXPOSE ${PORT}

CMD ["npm", "dev"]