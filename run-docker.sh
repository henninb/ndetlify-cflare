#!/bin/sh

docker context create remote-webserver --docker "host=ssh://henninb@192.168.10.15"
#npm install
npm run build
docker build -t react-app .
docker save react-app | docker --context remote-webserver load

export DOCKER_HOST=tcp://192.168.10.15:2375
docker rm -f react-app
docker run --name=react-app -h react-app --restart unless-stopped -p 3000:3000 -d react-app

# docker save -o react-app.tar react-app
# scp react-app.tar 192.168.10.15:/home/henninb/react-app.tar
# echo docker load -i react-app.tar

exit 0
