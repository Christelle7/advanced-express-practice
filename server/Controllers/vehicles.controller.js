let Vehicles =require("../Models/VehicleModel")

module.exports.list =function (request,response,next){
   
  Vehicles.find({}).exec()
  .then(vehicles => {
    return response.send (vehicles);
  })
  .catch(err => {
    console.log('error vehicles')
    return response.send(err)
  });
 };

module.exports.show = function (request,response,next){
  //return response.json(vehicles[request.params.vehicleId-1]);
  Vehicles.findById(request.params.vehicleId).exec()
  .then(vehicle => {
    return response.send (vehicle);
  })
  .catch(err => {
    console.log('error vehicles')
    return response.send(err)
  });

 };

module.exports.create = function (request,response,next){
  

  const vehicle = new Vehicles();
  vehicle.year  = request.body.year;
  vehicle.make = request.body.make;
  vehicle.model = request.body.model;

  vehicle.save().then(savedVehicle=>{
    return response.send(savedVehicle);
  })
  .catch(err => {
    console.log('error vehicle')
    return response.send(err)
  });

 };