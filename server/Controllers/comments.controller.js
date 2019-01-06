let Comments = require ("../Models/CommentModel");

module.exports.list = function (request,response,next){
  Comments.find({}).exec()
  .then(comments => {
    return response.send (comments);
  })
  .catch(err => {
    console.log('error comments')
    return response.send(err)
  });

 };

 module.exports.show = function (request,response,next){
  // return response.json(comments[request.params.commentId-1]);
  Comments.findById(request.params.commentId).exec()
  .then(comment => {
    return response.send (comment);
  })
  .catch(err => {
    console.log('error comments')
    return response.send(err)
  });

 };

 module.exports.create = function (request,response,next){

  const comment = new Comments ();

  comment.body = request.body.body;

  comment.save().then(savedComment=>{
    return response.send(savedComment);
  })
  .catch(err => {
    console.log('error comments')
    return response.send(err)
  });
  
 };



