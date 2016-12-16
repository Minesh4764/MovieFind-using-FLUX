var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var EventEmitter = require('events').EventEmitter;

var assign = require('object-assign');

var AppApi =  require('../api/AppApi');


var CHANGE_EVENT= 'change';

var _movies = [];

var _selected='';

var AppStore =  assign({},EventEmitter.prototype,{
     setMovieResult:function(movies) {
         _movies= movies;

     }
    emitChange :function () {
         this.emit(CHANGE_EVENT);

    },
    addchangeListener :function (callback) {
        this.on('change',callback)
    },
    removeChangeListener :function (callback) {
           this.removeListener('change',callback)

    }

});

AppDispatcher.register(function(payload){
    var action = payload.action;

    switch(action.actionType) {
        case AppConstants.SEARCH_MOVIES:
            console.log('searching for movie' +action.movie.title);
            AppApi.searchMovies(action.movie)
            AppStore.emit(CHANGE_EVENT);
            break;


        case AppConstants.RECEIVE_MOVIE_RESULTS:
             AppStore.setMovieResult(action.movies)
            AppApi.searchMovies(action.movie);

            break;
    }

  return true;
});
module.exports = AppStore;