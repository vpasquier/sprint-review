import React, {Component} from 'react'
import styled from 'styled-components'
import {Button, Checkbox, Form, Icon, Label, Message} from 'semantic-ui-react'
import URLS from '../utils/URLS';
import CenterStyle, {SmallTopMargin} from "../utils/Styles";

const CustomCenter = styled.div`${CenterStyle}`;
const CustomTopMargin = styled.div`${SmallTopMargin}`;

class Login extends Component {
  render() {
    return (
      <div>
        <CustomCenter>
          <Form className='attached fluid segment'>
            <Form.Field>
              <label>Username</label>
              <input placeholder='Type username'/>
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input placeholder='Type password'/>
            </Form.Field>
            <Form.Field>
              <Checkbox label='Save'/>
            </Form.Field>
            <Button type='submit'>Submit</Button>
            <CustomTopMargin>
              <Label as='a' color='red' image>
                <Icon name='google'/>
                Google
                <Label.Detail>Login</Label.Detail>
              </Label>
              <Label as='a' color='blue' image>
                <Icon name='facebook'/>
                Facebook
                <Label.Detail>Login</Label.Detail>
              </Label>
              <Label as='a' color='black' image>
                <Icon name='github'/>
                Github
                <Label.Detail>Login</Label.Detail>
              </Label>
            </CustomTopMargin>
          </Form>
          <Message attached='bottom' warning>
            <Icon name='help'/>
            Not registered yet?&nbsp;<a href={URLS.REGISTER}>Subscribe here</a>.
          </Message>
        </CustomCenter>
      </div>
    );
  }
}

export default Login;
