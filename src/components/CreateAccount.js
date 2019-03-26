import React from 'react'
import { connect } from 'react-redux'
import { creatingNewUser } from '../redux/actions'
import { Form, Grid, Header, Segment, Button } from 'semantic-ui-react'
import Nav from './Nav'

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
      [event.currentTarget.name]: event.currentTarget.value
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
            }`}
          </style>

        <Nav />
          <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 500 }}>
              <Segment inverted>
                <Header inverted size='large'>
                  Create an Account
                </Header>
              <Form inverted size='large' onSubmit={this.handleSubmit}>
                <Segment stacked inverted>
                  <Form.Group widths='equal'>
                    <Form.Input
                      fluid
                      icon='user'
                      iconPosition='left'
                      label='Enter Your Name'
                      name='name'
                      placeholder='Name'
                      onChange={this.handleChange}/>
                  </Form.Group>
                  <Form.Group widths='equal'>
                    <Form.Input
                      fluid
                      icon='user'
                      iconPosition='left'
                      label='Enter Your Username'
                      name='username'
                      placeholder='Username'
                      onChange={this.handleChange}/>
                    <Form.Input
                      fluid
                      icon='lock'
                      iconPosition='left'
                      label='Enter Your Email'
                      name='email'
                      placeholder='Email'
                      onChange={this.handleChange}/>
                  </Form.Group>
                  <Form.Group widths='equal'>
                    <Form.Input
                      fluid
                      icon='lock'
                      iconPosition='left'
                      label='Enter Your Password'
                      name='password'
                      type='password'
                      onChange={this.handleChange}/>
                  </Form.Group>
                <Button fluid> Submit </Button>
              </Segment>
            </Form>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default connect(null, { creatingNewUser })(CreateAccount)
