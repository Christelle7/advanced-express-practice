let express = require("express");
let mongoose = require("mongoose");
let bodyParser = require("body-parser");


const app = express();

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://ACA:graduation2019@ds131903.mlab.com:31903/express-practice");


let commentsRoutes = require("./routes/comments.route");
let productsRoutes = require("./routes/products.route");
let vehiclesRoutes = require("./routes/vehicles.route");
let ContactRoutes  = require("./routes/contacts.route");



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
 
   
