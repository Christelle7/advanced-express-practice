const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  name :{
    type: String
  },
  occupation:{
    type : String
  },
   avatar:{
    type: String
  }

});

module.exports = mongoose.model("contact", contactSchema);