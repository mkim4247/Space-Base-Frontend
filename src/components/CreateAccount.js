import React from 'react'
import { Form } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {creatingNewUser} from '../redux/actions'
import {Grid, Header, Segment, Button, Message} from 'semantic-ui-react'

class CreateAccount extends React.Component {
  constructor(){
    super()
    this.state = {
      name: "",
      username: "",
      email: "",
      password: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    this.props.creatingNewUser(this.state)
  };

  render(){
    return(
      <div className='create-form'>
      <style>{`
        body > div,
        body > div > div,
        body > div > div > div.create-form {
        height: 100%;
      }`}</style>

      <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 500 }}>
        <Header id='login-header' color='black' textAlign='center' size='huge'>
          Create an Account
        </Header>
        <Form size='large' onSubmit={this.handleSubmit}>
        <Segment stacked>
          <Form.Group widths='equal'>
            <Form.Input fluid icon='user' iconPosition='left' label='Enter Your Name' name='name' placeholder='Name' onChange={this.handleChange}/>
            <Form.Input fluid icon='user' iconPosition='left' label='Enter Your Username' name='username' placeholder='Username' onChange={this.handleChange}/>
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input fluid icon='lock' iconPosition='left' label='Enter Your Password' name='password' type='password' onChange={this.handleChange}/>
            <Form.Input fluid icon='lock' iconPosition='left' label='Enter Your Email' name='email' placeholder='Email' onChange={this.handleChange}/>
          </Form.Group>
          <Button fluid> Create Account </Button>
          </Segment>
        </Form>
        </Grid.Column>
        </Grid>
      </div>
    )
  }

}

export default connect(null, {creatingNewUser})(CreateAccount)
