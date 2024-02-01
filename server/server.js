const express = require('express')
const path = require('path');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const port = 3000
const app = express();

app.use(express.json());

const EMAIL = 'henninb@gmail.com'; // Replace with your email
const PASSWORD = 'monday1'; // Replace with your password
const JWT_KEY = 'your_jwt_key'; // Replace with your JWT key

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
  console.log('body:', request.body);
  const { email, password } = request.body;
  console.log('email:', request.body.email);

  if (email === EMAIL && password === PASSWORD) {
    const token = jwt.sign(
      {
        email: email,
        password: password,
        nbf: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000) + 1 * (60 * 60), // Expires: Now + 1h
      },
      JWT_KEY,
    );

    response.set('X-Custom-Brian', '1');
    response.status(200).json( {
      token: token,
    });
  } else {
    response.status(200).json({
      accessToken: 'test',
      roles: ['admin'],
    });
  }
});

