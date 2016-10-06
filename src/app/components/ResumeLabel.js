import React from 'react';
import moment from 'moment';
/*
This component was created to take a long string and just show the first n letters of the string.
I am not currently using it in this version.
*/
var ResumeLabel = React.createClass({

  render :function () {
  	if(this.props.str.length<=this.props.limit){
  		return (<p>{this.props.str}</p>);
  	}
    var res = this.props.str.substring(0, this.props.limit);
    return (<div>{res}...</div>);	            
  }

});


export default ResumeLabel;