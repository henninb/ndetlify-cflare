#!/bin/sh

TOKEN=$(cat token)
docker context create remote-webserver-ssh --docker "host=ssh://henninb@192.168.10.15"
docker context create remote-webserver-tcp --docker "host=tcp://192.168.10.15:2375"
#npm install
mkdir -p ssl
npm run build
docker build -t react-app .
# docker build -f Dockerfile-nginx -t react-app-nginx .
docker save react-app | docker --context remote-webserver-tcp load

export DOCKER_HOST=tcp://192.168.10.15:2375
docker rm -f react-app
docker run --name=react-app -h react-app --restart unless-stopped -p 3000:3000 -d react-app
docker ps -a

# docker rm -f cloudflared
# docker run -d --name cloudflared --restart=unless-stopped cloudflare/cloudflared:latest tunnel --no-autoupdate run --token ${TOKEN}

# docker save -o react-app.tar react-app
# scp react-app.tar 192.168.10.15:/home/henninb/react-app.tar
# echo docker load -i react-app.tar

exit 0
