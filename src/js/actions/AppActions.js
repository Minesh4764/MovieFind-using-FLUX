var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');


var AppActions  = {

  searchMovies :function(movie) {
        console.log('Searching for Movie' + movie.title)
        AppDispatcher.handleViewAction({
             actionType:AppConstants.SEARCH_MOVIES,
              Movie:movie

        })

  }

};

module.exports = AppActions;