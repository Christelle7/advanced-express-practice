
const comments =require("../comments");

module.exports.list = function (request,response,next){
  return response.json(comments)
 };

 module.exports.show = function (request,response,next){
  return response.json(comments[request.params.commentId-1]);
 };

 module.exports.create = function (request,response,next){
  let newComment = request.body
  comments.push(newComment);
   return response.json(newComment);
 };



