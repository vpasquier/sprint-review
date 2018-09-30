import React, {Component} from 'react'
import {Button, Form, Icon, Message} from 'semantic-ui-react'
import URLS from '../utils/URLS';
import styled from 'styled-components'
import CenterStyle from '../utils/Styles'

const CustomCenter = styled.div`${CenterStyle}`

class Register extends Component {
  render() {

    return (
      <div>
        <CustomCenter>
          <Message
            attached
            header='Welcome to our site!'
            content='Fill out the form below to sign-up for a new account'
          />
          <Form className='attached fluid segment'>
            <Form.Group widths='equal'>
              <Form.Input fluid label='First Name' placeholder='First Name' type='text'/>
              <Form.Input fluid label='Last Name' placeholder='Last Name' type='text'/>
            </Form.Group>
            <Form.Input label='Username' placeholder='Username' type='text'/>
            <Form.Input label='Password' type='password'/>
            <Form.Checkbox inline label='I agree to the terms and conditions'/>
            <Button color='blue'>Submit</Button>
          </Form>
          <Message attached='bottom' warning>
            <Icon name='help'/>
            Already signed up?&nbsp;<a href={URLS.LOGIN}>Login here</a>&nbsp;instead.
          </Message>
        </CustomCenter>
      </div>
    );
  }
}

export default Register;
