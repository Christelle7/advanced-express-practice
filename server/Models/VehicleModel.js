const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
  year :{
    type: String
  },
  make:{
    type : String
  },
   model:{
    type: String
  }

});

module.exports = mongoose.model("vehicles", vehicleSchema);