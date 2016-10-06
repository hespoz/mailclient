import React from 'react';
import {render} from 'react-dom';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import {ListGroup} from 'react-bootstrap';

//Import components
import EmailItem from '../components/EmailItem';

var EmailList = React.createClass({

  render :function () {
  	console.log(this.props)

  	if(this.props.emailList.messages.length==0){
  		return (<h3>There is not new messages</h3>)
  	}

    return (
 
				<Row>
					<Col md={12}>
						<ListGroup componentClass="ul">
						    {this.props.emailList.messages.map(function(row, i) {
			                      return (  
									<EmailItem uid={row.uid} sender={row.sender} subject={row.subject} time_sent={row.time_sent} view={row.view}/>
			                      );
			                })}
			            </ListGroup>    
		            </Col>
	            </Row>
			    
		
    	
    );
  }
});


export default EmailList;
