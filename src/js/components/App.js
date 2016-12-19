var React = require('react');
var AppAction= require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var SearchForm = require('./SearchForm');
var MovieResult = require('./MovieResult');


function getAppState() {

    return {
      movies :AppStore.getMovieResult()

    }

}

var App = React.createClass({
      getInitialState:function() {

           return getAppState();
      },

    componentDidMount:function() {

        AppStore.addchangeListener(this._onChange);
    },
    componentWillUnmount:function() {

        AppStore.removeChangeListener(this._onChange);
    },
    render:function() {
      if(this.state.movies=='') {
            var movieResult = '';

      } else {

          movieResult =    <MovieResult movies={this.state.movies}/>
      }
       return(
           <div>
               <SearchForm/>
               {movieResult}
              </div>

       )

    },
    _onChange :function () {
        this.setState(getAppState());
    }

});
module.exports = App;