const contacts=require("../contacts")

module.exports.list = function (request, response){
  console.log('CONTACT ROUTES');
  return response.json(contacts)
};

module.exports.show = function (request,response,next){
  return response.json(contacts[request.params.contactId-1]);
};

module.exports.create = function (request,response,next){
  let newContact = request.body
  contacts.push(newContact);
  return response.json(newContact);
};
 