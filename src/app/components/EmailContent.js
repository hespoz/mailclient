import React from 'react';
import {render} from 'react-dom';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import {PageHeader} from 'react-bootstrap';
import DateParser from '../components/DateParser';

const emailListStyle = {
  maxHeight : '90%',
  overflowY: 'scroll'
};

var EmailContent = React.createClass({

  render :function () {
  	if(this.props.email == null || this.props.email == {}){
      return <h3>Welcome to your Inbox!!!</h3>;
    }

    return (
 

					<Col md={12}>
							<div style={emailListStyle}>
								<PageHeader>{this.props.email.subject} <small> - {this.props.email.sender}</small></PageHeader>
								<Row>
									<Col mdOffset={1}><b><DateParser timeSent={this.props.email.time_sent}/></b></Col>
								</Row>
								<Row>
									<Col mdOffset={1}>{this.props.email.message}</Col>
								</Row>
							</div>
		            </Col>
    );
  }
});


export default EmailContent;