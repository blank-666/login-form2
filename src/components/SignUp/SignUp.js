import React from 'react';
import { Button, Container, Checkbox, CheckboxLabel, NameContainer } from '../styledComponents';
import Header from '../Header/Header';
import Link from '../Link/Link';
import { Input } from '../Input/Input';


class SignUp extends React.Component {
  state = {
    emailValid: true,
    passwordValid: true,
    firstNameValid: true,
    lastNameValid: true,
    formActive: false,
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    hidePassword: true
  }

  validation = (event) => {
    const name = event.target.name;
    const reg = name.includes('Name') ? /[A-Za-z]{3,}/ : (name === 'email' ? /[\w]{3,}@[\w]{2,}\.[\w]{2,}/ : /(?=.*[0-9])(?=.*[\w])(?=.*[A-Z])[0-9a-zA-Z]{8,}/)

    this.setState({
      [name + 'Valid']: reg.test(event.target.value),
      formActive: true
    });
  }

  nameUpdate = (firstName, lastName) => {
    firstName = firstName.slice(0, 1).toUpperCase() + firstName.slice(1).toLowerCase();
    lastName = lastName.slice(0, 1).toUpperCase() + lastName.slice(1).toLowerCase();
    return firstName + ' ' + lastName;
  }

  changePasswordVisibility = () => {
    this.setState((prevState) => ({
      hidePassword: !prevState.hidePassword
    }))
  }

  onFocus = (event) => {
    this.setState({
      [event.target.name + 'Valid']: true
    })
  }

  onSubmit = (event) => {
    if (Object.values(this.state).some((element) => !element) || !this.state.formActive) {
      event.preventDefault()
    } else {
      const user = {
        name: this.nameUpdate(this.state.firstName, this.state.lastName),
        login: this.state.email,
        password: this.state.password
      }
      let users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
    }
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    console.log(this.state)

    return (
      <Container footer='Copyright &#169; Your Webcite 2020.'>
        <Header title='Sign up' />
        <form onSubmit={this.onSubmit}>
          <NameContainer>
            <Input name='firstName'
              placeholder='First name *'
              nameInput
              onBlur={this.validation}
              isValid={this.state.firstNameValid}
              errorMessage='Enter at least 3 characters.'
              onChange={this.onChange}
              value={this.state.firstName}
              onFocus={this.onFocus}
            />
            <Input name='lastName'
              placeholder='Last name *'
              nameInput
              onBlur={this.validation}
              isValid={this.state.lastNameValid}
              errorMessage='Enter at least 3 characters.'
              onChange={this.onChange}
              value={this.state.lastName}
              onFocus={this.onFocus}
            />
          </NameContainer>

          <Input name='email'
            placeholder='Email Address *'
            onBlur={this.validation}
            isValid={this.state.emailValid}
            errorMessage='Invalid email.'
            onChange={this.onChange}
            value={this.state.email}
            onFocus={this.onFocus}
          />
          <Input name='password'
            placeholder='Password *'
            onBlur={this.validation}
            isValid={this.state.passwordValid}
            type={this.state.hidePassword ? 'password' : 'text'}
            errorMessage='The password must contain at least one number and an uppercase Latin letter.'
            onChange={this.onChange}
            value={this.state.password}
            changePasswordVisibility={this.changePasswordVisibility}
            onFocus={this.onFocus}
          />
          <Checkbox name='promotions'></Checkbox>
          <CheckboxLabel htmlFor='promotions '>I want to receive inspiration, marketing promotions and updates via email.</CheckboxLabel>
          <Button type='submit'>SIGN UP</Button>
        </form>
        <Link right path='/sign-in' text='Already have an account? Sign In'></Link>
      </Container>
    );
  }
}

export default SignUp;