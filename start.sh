#!/bin/sh
echo "start build mongodb"
sudo docker run -p 27017:27017 --hostname mongodb -v $PWD/db:/data/db -d --name=mongodb --network=api-network mongo:3.2
cd server 
sudo docker run -p 7001:7001 -d --hostname api-server  --name=api-server --network=api-network wm/api-server
cd ../client
sudo docker run -p 83:8080 -d --hostname api-client --name=api-client --network=api-network wm/api-client
echo "build api-platform success"