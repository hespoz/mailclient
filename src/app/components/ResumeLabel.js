import React from 'react';
import moment from 'moment';

var ResumeLabel = React.createClass({

  componentDidMount : function() {
  },

  render :function () {
  	if(this.props.str.length<=this.props.limit){
  		return (<p>{this.props.str}</p>);
  	}
    var res = this.props.str.substring(0, this.props.limit);
    return (<div>{res}...</div>);	            
  }

});


export default ResumeLabel;