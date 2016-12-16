var React = require('react');
var AppAction= require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var SearchForm = require('./SearchForm');



function getAppState() {

    return {

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

       return(
           <div>
               <SearchForm/>
              </div>

       )

    },
    _onChange :function () {
        this.setState(getAppState());
    }

});
module.exports = App;