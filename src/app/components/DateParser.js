import React from 'react';
import moment from 'moment';

var DateParser = React.createClass({

  componentDidMount : function() {
  },

  render :function () {
    var date = moment(this.props.timeSent).format("ddd DD MMM, hh:mm").toString();
    return (
    	<p>{date}</p>	            
    );
  }
});


export default DateParser;