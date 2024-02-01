const express = require('express')
const path = require('path');
//const axios = require('axios')
const bodyParser = require('body-parser');

const port = 3000
const app = express()

app.use((_request, response, next) => {
  console.log("set header");
  response.header("x-powered-by", "ExpressServer");
  next();
});

app.use(express.static(path.join(__dirname, 'public'), {
}));

app.get('*', (_req,res) =>{
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.listen(port, () => { console.log(`listening on port ${port}`) });

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/login', (request, response) => {
  console.log('Got body:', request.body);
  //response.status(200).json({ message: 'test' });
  response.status(200).json({
    accessToken: 'test',
    roles: ['admin'],
  })
});

