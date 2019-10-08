FROM daocloud.io/node:10.15.2-stretch
WORKDIR /app
COPY . /app/
EXPOSE 8080
RUN npm config set registry https://registry.npm.taobao.org && npm install
ENTRYPOINT ["npm","run","dev"]



