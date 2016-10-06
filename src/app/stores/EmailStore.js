import AppDispatcher from '../dispatchers/AppDispatcher';
import { EventEmitter } from 'events';
import assign from 'object-assign';
import $ from "jquery";
import moment from 'moment';

var CHANGE_EVENT = 'change';

var _EmailList = [];

var _EmailSelected = null;


var EmailStore = assign({}, EventEmitter.prototype, {
  
  getEmailList: function() {
    return _EmailList;
  },

  getEmailSelected : function() {
    return _EmailSelected;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }


});

AppDispatcher.register( function( payload ) {
    
    switch( payload.actionName ) {

        case 'getEmailList':


            $.getJSON( "/messages_sample.json", function( data ) {
              _EmailList = data;
              EmailStore.emitChange();
            });

        	
            break;

        case 'removeEmail':
    			for(var i=0;i<_EmailList.messages.length;i++){
    				if(_EmailList.messages[i].uid==payload.data.uid){
    					_EmailList.messages.splice(i,1);
              if(_EmailSelected!=null && _EmailSelected.uid==payload.data.uid){
                _EmailSelected=null;
              }
    				}
    			}
    			EmailStore.emitChange();
        	break;
        
        case 'selectEmail':
          console.log("select");
          for(var i=0;i<_EmailList.messages.length;i++){
            if(_EmailList.messages[i].uid==payload.data.uid){
              _EmailSelected = _EmailList.messages[i];
              _EmailList.messages[i].view = true;
            }
          }
          EmailStore.emitChange();
          

          break;            

    }

});

module.exports = EmailStore;