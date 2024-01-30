#!/bin/sh

echo npx create-react-app react-app
npm install
npm start
echo npm run build
echo npx npm-check-updates -u

docker build -t react-app .
docker run --name=react-app -h react-app --restart unless-stopped -p 3000:80 -d react-app

exit 0
