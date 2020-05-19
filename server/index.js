// const express = require('express')
// const httpProxy = require('http-proxy');
// const cors = require('cors');
// const path = require('path');
// //
// // Create a proxy server with custom application logic
// //
// const app = express();
// const port = 2500;
// var proxy = httpProxy.createProxyServer({});

// app.use(cors());
// app.use(express.static(path.join(__dirname, '../public')));


// app.get('/', (req, res) => res.send('Hello World!'))


// app.all('/currentRestaurant',(req, res) => {
//     // info server
//     proxy.web(req, res, { target: 'http://ec2-3-15-157-241.us-east-2.compute.amazonaws.com' });
//   });

// app.all('/restaurant',(req, res) => {
//     // info server
//     proxy.web(req, res, { target: 'http://ec2-3-15-157-241.us-east-2.compute.amazonaws.com' });
//   });



// app.all('/popularDishes/*', (req, res) => {
//     proxy.web(req, res, { target: 'http://ec2-54-241-229-137.us-west-1.compute.amazonaws.com' });
// })

// app.all('/api/reviews', (req, res) => {
//     proxy.web(req, res, { target: 'http://ec2-13-57-201-62.us-west-1.compute.amazonaws.com/' });    
// });
  
//   app.all('/api/restaurant/:id', (req, res) => {
//     proxy.web(req, res, { target: 'http://ec2-13-57-201-62.us-west-1.compute.amazonaws.com/' });        
//   });
  
//   app.all('/api/restaurants/:id/reviews', (req, res) => {
//     proxy.web(req, res, { target: 'http://ec2-13-57-201-62.us-west-1.compute.amazonaws.com/' });    
//   });
  
//   app.all('/api/restaurants/:id/newreview', (req, res) => {
//     proxy.web(req, res, { target: 'http://ec2-13-57-201-62.us-west-1.compute.amazonaws.com/' });    
//   });

//   app.all('/seeAllPhotos', (req, res) => {
//     proxy.web(req, res, { target: 'http://ec2-18-144-154-4.us-west-1.compute.amazonaws.com' });    
//   });
    
//   app.all('/seeAllPhotos/:photoId', (req, res) => {
//     proxy.web(req, res, { target: 'http://ec2-18-144-154-4.us-west-1.compute.amazonaws.com' });    
//   });
  

// app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const express = require('express')

const httpProxy = require('http-proxy');
const cors = require('cors');
const path = require('path');
//
// Create a proxy server with custom application logic
//
const app = express();
const port = 2500;
var proxy = httpProxy.createProxyServer({});

app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));


app.get('/', (req, res) => res.send('Hello World!'))


app.all('/currentRestaurant',(req, res) => {
    // info server
    proxy.web(req, res, { target: 'http://localhost:8000' });
  });

app.all('/restaurant',(req, res) => {
    // info server
    proxy.web(req, res, { target: 'http://localhost:8000' });
  });

app.all('/popularDishes/*', (req, res) => {
  proxy.web(req, res, { target: 'http://localhost:3001' });
})

app.all('/api/reviews', (req, res) => {
  proxy.web(req, res, { target: 'http://localhost:3003' });    
});

app.all('/api/restaurant/:id', (req, res) => {
  proxy.web(req, res, { target: 'http://localhost:3003' });        
});

app.all('/api/restaurants/:id/reviews', (req, res) => {
  proxy.web(req, res, { target: 'http://localhost:3003' });    
});

app.all('/api/restaurants/:id/newreview', (req, res) => {
  proxy.web(req, res, { target: 'http://localhost:3003' });    
});

app.all('/seeAllPhotos', (req, res) => {
  proxy.web(req, res, { target: 'http://localhost:3004' });    
});

app.all('/seeAllPhotos/:photoId', (req, res) => {
  proxy.web(req, res, { target: 'http://localhost:3004' });    
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));