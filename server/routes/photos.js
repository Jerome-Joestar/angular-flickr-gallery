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

  FlickerAPI.tokenOnly(flickrOptions, function (error, flickr) {
    if (error) {
      console.log(error)
    }
    else {
      flickr.people.getPublicPhotos({
        user_id: flickr.options.user_id,
        page: 1,
        per_page: 500,
        extras: [ 'original_format', 'url_l' ]
      }, function (err, result) {
        if (err) {
          console.log(err)
        }
        else {
          const filteredResults = result.photos.photo.filter(photo => {
            return photo.height_l > photo.width_l;
          });
          res.setHeader('Content-Type', 'application/json');
          res.json(filteredResults)
        }
      });
    }
  });
});

module.exports = router;
