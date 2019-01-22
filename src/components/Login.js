import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { settingCurrentUser } from '../redux/actions'
import { Button, Form, Grid, Header, Segment, Message } from 'semantic-ui-react'

class Login extends React.Component {
  constructor(){
    super()
    this.state = {
      username: "",
      password: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  handleLoginSubmit = (event) => {
    this.props.settingCurrentUser(this.state)
  };

  render(){
    return(
      <div className='login-form'>
        <style>{`
            body > div,
            body > div > div,
            body > div > div > div.login-form {
            height: 100%;
            }`}
        </style>

        <Grid
            textAlign='center'
            style={{ height: '100%' }}
            verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 300 }}>
            <Header
              inverted
              id='login-header'
              color='black'
              textAlign='center'
              size='huge'>
                Login Here
            </Header>
            <Form inverted size='large' onSubmit={this.handleLoginSubmit}>
              <Segment inverted stacked>
                <Form.Input
                  fluid
                  icon='user'
                  iconPosition='left'
                  label='Enter Username:'
                  type='text'
                  name='username'
                  onChange={this.handleChange}
                  placeholder="username"/>
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  label='Password:'
                  type='password'
                  name='password'
                  onChange={this.handleChange}
                  placeholder="password"/>
                <Button> Login </Button>
              </Segment>
            </Form>
            <Segment inverted>
            <Message>
              <Link to='/new'>
                CREATE AN ACCOUNT
              </Link>
            </Message>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    )
  }

}


export default connect(null, { settingCurrentUser })(Login)
