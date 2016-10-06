import AppDispatcher from '../dispatchers/AppDispatcher';

var EmailAction = {

  getEmailList: function() {
      AppDispatcher.dispatch({
        actionName: 'getEmailList',
        data: {} 
      });
  },

  removeEmail:function(id){
      AppDispatcher.dispatch({
        actionName: 'removeEmail',
        data: {uid:id}
      });
  },

  selectEmail:function(id){
      AppDispatcher.dispatch({
        actionName: 'selectEmail',
        data: {uid:id}
      });
  }
  
}

module.exports = EmailAction;