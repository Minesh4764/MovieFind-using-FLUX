var Dispatcher = require("flux").Dispatcher;
var assign = require('object-assign');


var  AppDispatcher = assign(new Dispatcher(),{

   var handleViewAction = function(action) {

        var payload = {

           source : 'View_ACTION',
            action :action
        }
        this.dispatch(payload);
    }


});
module.exports = AppDispatcher;