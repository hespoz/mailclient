import React from 'react';
import {render} from 'react-dom';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

//Component references
import EmailList from '../components/EmailList';
import EmailContent from '../components/EmailContent';

//Action reference
import EmailAction from '../actions/EmailAction';
//Store reference
import EmailStore from '../stores/EmailStore';

const emailListStyle = {
  maxHeight : '90%',
  overflowY: 'scroll'
};


function getEmailStoreState() {
  return {
    emailList: EmailStore.getEmailList(),
    emailSelected: EmailStore.getEmailSelected() 
  };
}

var Index = React.createClass({

  getInitialState: function () {
		return {
			emailList: null,
			emailSelected:null
		};
  },

  componentDidMount : function() {
  	EmailStore.addChangeListener(this.onChange.bind(this));
  	EmailAction.getEmailList();
  },

  componentWillUnmount : function() {
    EmailStore.removeChangeListener(this.onChange.bind(this));
  },

  onChange : function() {
  	this.setState(getEmailStoreState());
  },

  render : function() {
  	if(this.state.emailList == null){
      return <p>Loading...</p>;
    }

    return (
    	<div>
    		<Grid>
				<Row>
					<Col md={4}>
						<div style={emailListStyle}>
							<EmailList emailList={this.state.emailList}/> 
						</div>
					</Col>
					<Col md={8}>
						<EmailContent email={this.state.emailSelected}/>
					</Col>
			    </Row>
			</Grid>
    	</div>
    );
  }
});


render(<Index/>, document.getElementById('app'));
