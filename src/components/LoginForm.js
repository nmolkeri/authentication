import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';


class LoginForm extends Component{
  state = { email: '' };
  state = { password: ''};
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            secureTextEntry={false}
            label="Email"
            placeHolderVar="user@gmail.com"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
           />
        </CardSection>
        <CardSection>
        <Input
          secureTextEntry={true}
          label="Password"
          placeHolderVar="password"
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
         />
        </CardSection>
        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
