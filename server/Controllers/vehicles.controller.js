const vehicles =require("../vehicles");

module.exports.list =function (request,response,next){
   return response.json(vehicles)
 };

module.exports.show = function (request,response,next){
  return response.json(vehicles[request.params.vehicleId-1]);
 };

module.exports.create = function (request,response,next){
  let newVehicle = request.body
  vehicles.push(newVehicle);
   return response.json(newVehicle);
 };