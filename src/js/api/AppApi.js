var AppActions = require('../actions/AppActions');


module.exports = {


    searchMovies :function(movies){
     console.log('at api' + movies.title);
         $.ajax({
             url:'http://www.omdbapi.com/?s='+movies.title,
             dataType:'json',
             cache:false,
             success:function (data) {
                 console.log(data);
                 AppActions.receiveMovieResults(data.Search);

             }.bind(this),
             error:function(xhr,status,err){

                 alert(err);
             }.bind(this)

         });
    },

};