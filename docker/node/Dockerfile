FROM node:20.14.0

ENV LANG C.UTF-8
ENV TZ Asia/Tokyo

WORKDIR /app
COPY ["./app/node/package.json", "./app/node/package-lock.json*", "./"]
RUN ["npm", "install"]
