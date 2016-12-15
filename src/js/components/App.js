var React = require('react');
var AppAction= require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var SearchForm = require('./SearchForm');

var App = React.createClass({

    render:function() {

       return(
           <div>
               <SearchForm/>
              </div>

       )

    }

});
module.exports = App;