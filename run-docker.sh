#!/bin/sh

#npm install
npm run build
docker build -t react-app .
docker rm -f react-app
docker run --name=react-app -h react-app --restart unless-stopped -p 3000:3000 -d react-app
docker rm -f react-app

docker save -o react-app.tar react-app
scp react-app.tar 192.168.10.15:/home/henninb/react-app.tar
echo docker load -i react-app.tar

exit 0
