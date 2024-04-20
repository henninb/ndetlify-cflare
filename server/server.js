const express = require('express')
const path = require('path');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const axios = require('axios');

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

// Handle React routing, return all requests to React app, except api and img
app.get(/^(?!\/api|img).*/, (request, response) => {
  console.log("handle request");
  // console.log(request.params);
  // request.params.transactionId = 5;
  // console.log(request.params);
  // response.sendFile(path.join(__dirname+'/public'));
  response.sendFile(path.join(__dirname+'/public/index.html'));
});

// app.get('*', (_req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

app.listen(port, () => { console.log(`listening on port ${port}`) });

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/nhl', (_request, response) => {
  const url = 'https://fixturedownload.com/feed/json/nhl-2023/minnesota-wild';

  axios.get(url)
    .then(res => {
      // If the request is successful, send the JSON response back to the client
      response.status(200).json(res.data);
    })
    .catch(error => {
      console.error('Error fetching NHL schedule:', error);
      response.status(500).send('Error fetching data');
    });
});

app.post('/api/login', (request, response) => {
  console.log('body:', request.body);
  const { email, password } = request.body;
  // console.log('email:', request.body.email);

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

    response.set('x-custom-brian', '1');
    response.status(200).json( {
      token: token,
    });
  } else {
    response.status(403).json({
      message: 'failed login attempt.',
    });
  }
});

// POST endpoint for Fahrenheit to Celsius conversion
//  curl -X POST http://localhost:3000/api/tocelsius -H "Content-Type: application/json" -d '{"fahrenheit":32}'
app.post('/api/tocelsius', (req, res) => {
  // Extract Fahrenheit temperature from request body
  const { fahrenheit } = req.body;

  // Check if Fahrenheit temperature is provided
  if (!fahrenheit) {
    return res.status(400).json({ error: 'Fahrenheit temperature is required' });
  }

  // Convert Fahrenheit to Celsius
  const celsius = (fahrenheit - 32) * (5/9);

  // Send the result back
  res.json({ celsius });
});


// Function to calculate Easter Sunday
function calculateEasterSunday(year) {
    const a = year % 19;
    const b = Math.floor(year / 100);
    const c = year % 100;
    const d = Math.floor(b / 4);
    const e = b % 4;
    const f = Math.floor((b + 8) / 25);
    const g = Math.floor((b - f + 1) / 3);
    const h = (19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4);
    const k = c % 4;
    const l = (32 + 2 * e + 2 * i - h - k) % 7;
    const m = Math.floor((a + 11 * h + 22 * l) / 451);
    const month = Math.floor((h + l - 7 * m + 114) / 31);
    const day = ((h + l - 7 * m + 114) % 31) + 1;
    return new Date(year, month - 1, day);
}

// POST endpoint for computing Easter Sunday
// curl -X POST http://localhost:3000/api/easter -H "Content-Type: application/json" -d '{"year":2024}'
app.post('/api/easter', (req, res) => {
    // Extract year from request body
    const { year } = req.body;

    // Check if year is provided
    if (!year) {
        return res.status(400).json({ error: 'Year is required' });
    }

    // Calculate Easter Sunday
    const easterSunday = calculateEasterSunday(year);

    // Send the result back
    res.json({ easterSunday });
});
