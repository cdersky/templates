var express = require('express');
var router = express.Router();
var ZoneController = require('../controllers/ZoneController');
var controllers = require('../controllers/index');


router.get('/:resource', function(req, res, next){

  var resource = req.params.resource;
  var controller = controllers[resource];

  if(!controller){
    res.json({
      confirmation : 'fail',
      message : 'invalid resource request: ' + resource
    });
    return;
  }

  controller.find(resource, function(err, results){
    if(err){
      res.json({
        confirmation: 'fail',
        message: err
      });
      return;
    }

    res.json({
      confirmation : 'success',
      results : results
    })
  });

});

router.get('/:resource/:id', function(req, res, next){

  var resource = req.params.resource;
  var id = req.params.id;

  if(resource == 'zone'){
    ZoneController.findById(id, function(err, results){
      if(err){
        res.json({
          confirmation: 'fail',
          message: 'Not Found'
        });
        return;
      }

      res.json({
        confirmation : 'success',
        results : results
      })
    })
  }
});

router.post('/:resource', function(req, res, next){

  var resource = req.params.resource;
  // var id = req.params.id;

  if(resource == 'zone'){
    ZoneController.create(req.body, function(err, result){
      if(err){
        res.json({
          confirmation: 'fail',
          message: err
        });
        return;
      }

      res.json({
        confirmation : 'success',
        results : result
      })
    })
  }
});

module.exports = router;