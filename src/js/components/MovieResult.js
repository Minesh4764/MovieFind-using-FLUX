var React = require('react');
var AppAction= require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var Movie = require('./Movie');

var MovieResult = React.createClass({

    render:function() {

        return(
            <div>
                  <h3 className="text-center text-capitalize"> Movies</h3>
                {
                    this.props.movies.map(function(movie,i){

                        return (
                                <Movie movie ={movie} key={i} />
                        )


                     })



                }

            </div>
        )

    },


});
module.exports = MovieResult;