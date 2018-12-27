let express = require("express");
const router = express.Router();
let {list,show, create} = require("../Controllers/products.controller")

router.get("/products",list);

 router.get("/products/:productId",show);
 
 router.post("/products", create);

 module.exports = router;
