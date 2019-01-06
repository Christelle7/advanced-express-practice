let Products =require("../Models/ProductModel")

module.exports.list =function (request,response,next){

  Products.find({}).exec()
  .then(products => {
    return response.send (products);
  })
  .catch(err => {
    console.log('error products')
    return response.send(err)
  });
 };

 module.exports.show = function (request,response,next){
  //return response.json(products[request.params.productId-1]);
  Products.findById(request.params.productId).exec()
  .then(product => {
    return response.send (product);
  })
  .catch(err => {
    console.log('error products')
    return response.send(err)
  });

 };

 module.exports.create = function (request,response,next){
   
  const product = new Products ();

  product.name = request.body.name;
  product.description = request.body.description;

  product.save().then(savedProduct=>{
    return response.send(savedProduct);
  })
  .catch(err => {
    console.log('error product')
    return response.send(err)
  });

 
};