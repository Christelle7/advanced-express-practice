const products =require("../products")

module.exports.list =function (request,response,next){
  return response.json(products)
 };

 module.exports.show = function (request,response,next){
  return response.json(products[request.params.productId-1]);
 };

 module.exports.create = function (request,response,next){
  let newProduct = request.body
  products.push(newProduct);
  return response.json(newProduct)
};