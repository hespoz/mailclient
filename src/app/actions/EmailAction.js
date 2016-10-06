import AppDispatcher from '../dispatchers/AppDispatcher';

var EmailAction = {

  getEmailList: function() {
      AppDispatcher.dispatch({
        actionName: 'getEmailList',
        data: {} // example data
      });
  },

  removeEmail:function(id){
      AppDispatcher.dispatch({
        actionName: 'removeEmail',
        data: {uid:id} // example data
      });
  },

  selectEmail:function(id){
      AppDispatcher.dispatch({
        actionName: 'selectEmail',
        data: {uid:id} // example data
      });
  }
  
}

module.exports = EmailAction;