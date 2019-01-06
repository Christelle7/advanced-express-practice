let Contacts = require ("../Models/ContactModel");

module.exports.list = function (request, response){
  Contacts.find({}).exec()
  .then(contacts => {
    return response.send (contacts);
  })
  .catch(err => {
    console.log('error contacts')
    return response.send(err)
  });
  
};

module.exports.show = function (request,response,next){
  //return response.json(contacts[request.params.contactId-1]);

  Contacts.findById(request.params.contactId).exec()
  .then(contact => {
    return response.send (contact);
  })
  .catch(err => {
    console.log('error contacts')
    return response.send(err)
  });
};

module.exports.create = function (request,response,next){

  const contact = new Contacts ();
  contact.name = request.body.name;
  contact.occupation = request.body.occupation;
  contact.avatar = request.body.avatar;


  contact.save().then(savedContact=>{
    return response.send(savedContact);
  })
  .catch(err => {
    console.log('error contacts')
    return response.send(err)
  });
  
};
 