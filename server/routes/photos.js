const express = require('express');
const router = express.Router();
let FlickerAPI = require('flickrapi');
const flickrOptions = {
  api_key: config.apiKey,
  secret: config.apiSecret,
  user_id: config.userID,
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
