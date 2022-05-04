const movieModel = require("../models/movieModel");

  function showHomepage (req, res) {
    movieModel.find({}, function(err, movies){
      res.render('index.ejs', {
        moviesList: movies
      })
    })
  }


// Opens a card with movie info on the same page (lightbox?)
function showMovieInfo (req, res) {
  movieModel.findOne({_id: req.params.id}, function(err, movies) {
        res.render('movieInfo.ejs', {
          moviesList: movies 
        })
    })
  }


module.exports = {showHomepage, showMovieInfo};