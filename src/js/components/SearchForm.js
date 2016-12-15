var React = require('react');
var AppAction= require('../actions/AppActions');
var AppStore = require('../stores/AppStore');


var SearchForm = React.createClass({

    render:function() {

        return(
            <div className="search-form">
                <h1 className="text-center"> Search for a movies</h1>
            <form>
                  <div className="form-group">
                      <input type="text" className="form-control" ref="movietitle"
                             placeholder="Enter a Movie Title.."/>
                  </div>
                   <button className="btn btn-primary btn-block">Search Movies</button>

            </form>

            </div>
        )

    }

});
module.exports = SearchForm;