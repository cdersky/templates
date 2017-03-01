var Comment = require('../models/Comment');


module.exports = {

  find : function(params, cb){
    Comment.find(params, function(err, comments){
      if(err){
        cb(err, null);
        return;
      }
      cb(null, comments);
    })
  },

  findById : function(id, cb){
    Comment.findById(id, function(err, comment){
      if(err){
        cb(err, null);
        return;
      }
      cb(null, comment);
    })
  },

  create : function(params, cb){

    Comment.create(params, function(err, comment){
      if(err){
        cb(err, null);
        return;
      }
      cb(null, comment);
    })
  },

  update : function(id, params, cb){

    Comment.findByIdAndUpdate(id, params, {new: true}, function(err, comment){
      if(err){
        cb(err, null);
        return;
      }
      cb(null, comment);
    })

  },

  delete : function(id){
    Comment.findByIdAndRemove(id, function(err, comment){
      if(err){
        cb(err, null);
        return;
      }

      cb(null, null);

    })
  },
};