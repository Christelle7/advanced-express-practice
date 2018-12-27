let express = require("express");
let commentsRoutes = require("./routes/comments.route");
let productsRoutes = require("./routes/products.route");
let vehiclesRoutes = require("./routes/vehicles.route");
let ContactRoutes  = require("./routes/contacts.route");

const app = express();

let bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(express.static('public'))
console.log('HELLO')

// tells my app to use the routes in contact routes 
app.use(ContactRoutes)
app.use(vehiclesRoutes)
app.use(commentsRoutes)
app.use(productsRoutes)

 app.listen(3002, (err) => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now living in apartment 3002");
  });
 
   
