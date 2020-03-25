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



// app.all('/getCompany', (req, res) => {
//     proxy.web(req, res, { target: 'http://localhost:3000' });
// })

// app.all('/getItems', (req, res) => {
//     proxy.web(req, res, { target: 'http://localhost:3000' });
// });

// app.all('/getPhotos', (req, res) => {
//     proxy.web(req, res, { target: 'http://localhost:3000' });
// })

// app.all('/arrow.png', (req, res) => {
//     res.sendFile('/Users/michellelao/Desktop/FECproject/popular-dishes/server/arrow.png');
// });

// app.all('/leftarrow.png', (req, res) => {
//     res.sendFile('/Users/michellelao/Desktop/FECproject/popular-dishes/server/leftarrow.png');
// });

app.all('/popularDishes/*', (req, res) => {
    proxy.web(req, res, { target: 'http://localhost:3000' });
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