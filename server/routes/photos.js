const express = require('express');
const router = express.Router();
let FlickerAPI = require('flickrapi');
/*const config = require('../config');*/

//TODO Need to use destructuring here to clean up code
const flickrOptions = {
  api_key: process.env.apiKey || config.apiKey,
  secret: process.env.apiSecret || config.apiSecret,
  user_id: process.env.userID || config.userID,
  progress: false
};

/* GET api listing. */
router.get('/', (req, res) => {

  FlickerAPI.tokenOnly(flickrOptions, function(error, flickr) {
    if(error){
      console.log(error)
    }
    else{
      flickr.people.getPublicPhotos({
        user_id: flickr.options.user_id,
        page: 1,
        per_page: 300
      }, function(err, result) {
        if(err){
          console.log(err)
        }
        else{
          res.setHeader('Content-Type', 'application/json');
          res.json(result.photos.photo)
        }
      });
    }
  });
});

module.exports = router;
