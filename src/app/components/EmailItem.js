import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';

import EmailAction from '../actions/EmailAction';
import DateParser from '../components/DateParser';
import ResumeLabel from '../components/ResumeLabel';

const noReadStyle = {
  backgroundColor : '#eaecef',
  fontWeight: 'bold'
};

const deleteButtonStyle = {
  position: 'absolute',
  marginLeft: '81px',
  marginTop: '-10px',
  padding: '0px 4px'
}


var EmailItem = React.createClass({
  
  deleteEmail : function(event){
  	EmailAction.removeEmail(event.target.id);
  },

  selectEmail : function(event){
    EmailAction.selectEmail(event.target.id);
  },

  render : function() {
    return (
      <li className="list-group-item" style={this.props.view != true ? noReadStyle : null}>
        	<Row >
        		<Col md={8} >
					     <a id={this.props.uid} href="javascript:void(0);" onClick={this.selectEmail}>{this.props.sender}</a>
        		</Col>
        		<Col md={4}>
					     <Button id={this.props.uid} bsStyle="link" onClick={this.deleteEmail} style={deleteButtonStyle}>x</Button>
        		</Col>
        	</Row>
			    <Row>
        		<Col md={6}>
              {this.props.subject}
        		</Col>
        		<Col md={6}>
              <DateParser timeSent={this.props.time_sent}/>
        		</Col>
        	</Row>
      </li>
    );
  }
});

export default EmailItem;