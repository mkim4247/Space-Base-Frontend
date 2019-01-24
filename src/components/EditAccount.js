import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { editingCurrentUser } from '../redux/actions'
import { Form, Grid, Header, Segment, Button } from 'semantic-ui-react'
import Nav from './Nav'

class EditAccount extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: props.currentUser.name,
      username: props.currentUser.username,
      email: props.currentUser.email,
      submitted: false
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  handleSubmit = (event) => {
    this.props.editingCurrentUser(this.state)
    this.setState({ submitted: true })
  };

  render(){
    return(

      this.state.submitted ?
        <Redirect to='/' /> :

    <div className='edit-form'>
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
                Edit Your Account
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
                    value={this.state.name}
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
                    value={this.state.username}
                    onChange={this.handleChange}/>
                  <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    label='Enter Your Email'
                    name='email'
                    value={this.state.email}
                    placeholder='Email'
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

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, { editingCurrentUser })(EditAccount)
