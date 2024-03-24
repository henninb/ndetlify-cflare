# server
express app

# client
react app

# api
curl -X -A 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36' POST https://www.bhenning.com/api/login -H "Content-Type: application/json" -d '{"email":"henninb@gmail.com", "password":"monday1"}'
curl -A 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36' -X POST https://www.bhenning.com/api/tocelsius -H "Content-Type: application/json" -d '{"fahrenheit":32}'

# website
https://www.bhenning.com


# docker
todo -- tag this docker repo as bitexplorer/react-app

# gcp container updload
gcloud compute instances create-with-container owasp-juice-shop-app --container-image bkimminich/juice-shop
gcloud compute firewall-rules create juice-rule --allow tcp:3000

