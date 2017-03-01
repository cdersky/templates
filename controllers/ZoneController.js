var Zone = require('../models/Zone');


module.exports = {

  find : function(params, cb){
    Zone.find(params, function(err, zones){
      if(err){
        cb(err, null);
        return;
      }
      cb(null, zones);
    })
  },

  findById : function(id, cb){
    Zone.findById(id, function(err, zone){
      if(err){
        cb(err, null);
        return;
      }
      cb(null, zone);
    })
  },

  create : function(params, cb){

    var zips    = params['zipCodes'];
    var zipArr  = zips.split(',');
    var newZips = [];

    zipArr.forEach(function(zip){
      newZips.push(zip.trim());
    });

    params['zipCodes'] = newZips;


    Zone.create(params, function(err, zone){
      if(err){
        cb(err, null);
        return;
      }
      cb(null, zone);
    })
  },

  update : function(id, params, cb){

    Zone.findByIdAndUpdate(id, params, {new: true}, function(err, zone){
      if(err){
        cb(err, null);
        return;
      }
      cb(null, zone);
    })

  },

  delete : function(id){
    Zone.findByIdAndRemove(id, function(err, zone){
      if(err){
        cb(err, null);
        return;
      }

      cb(null, null);

    })
  },
};