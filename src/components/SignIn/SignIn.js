import React from 'react';
import { Button, Container, Checkbox, CheckboxLabel, ErrorMessage } from '../styledComponents';
import Header from '../Header/Header';
import Link from '../Link/Link';
import { Input, AutocompleteInput } from '../Input/Input';
import { Redirect } from 'react-router-dom';



class SignIn extends React.Component {
  state = {
    email: '',
    password: '',
    isValid: true,
    referrer: null,
    rememberMe: false,
    autocomplete: '',
  }

  onChange = (event) => {
    if (event.target.name === 'rememberMe') {
      this.setState((prevState) => ({
        rememberMe: !prevState.rememberMe
      }))
    } else {
      this.setState({
        [event.target.name]: event.target.value,
      })
    }
  }

  checkAutocomplete = (event) => {
    this.setState({
      email: event.target.value,
      autocomplete: localStorage.getItem('savedUsers') ? JSON.parse(localStorage.getItem('savedUsers')).filter((item) => item.login.startsWith(event.target.value)) : ''
    })
  }

  hideAutocomplete = () => {
    this.setState({
      autocomplete: ''
    })
  }

  updateData = (login, password) => {
    this.setState({
      email: login,
      password: password
    })
    this.hideAutocomplete()
  }

  onFocus = () => {
    this.setState({
      isValid: true
    })
  }


  onSubmit = (event) => {
    const users = JSON.parse(localStorage.getItem('users'));
    if (users) {
      const userId = users.findIndex(element => Object.values(element).includes(this.state.email));
      if (userId !== -1 && users[userId].password === this.state.password) {
        this.setState({
          isValid: true
        })
        alert(`Welcome, ${users[userId].name}!`);
        this.setState({ referrer: '/page' });

        if (this.state.rememberMe) {
          const savedUser = {
            login: this.state.email,
            password: this.state.password
          }
          if (localStorage.getItem('savedUsers')) {
            let savedUsers = JSON.parse(localStorage.getItem('savedUsers'));
            !localStorage.getItem('savedUsers').includes(savedUser.login) && savedUsers.push(savedUser);
            localStorage.setItem('savedUsers', JSON.stringify(savedUsers));
          } else {
            let savedUsers = [];
            savedUsers.push(savedUser);
            localStorage.setItem('savedUsers', JSON.stringify(savedUsers));
          }
        }
      }
      else {
        event.preventDefault();
        this.setState({
          isValid: false
        })
      }
    }
    else {
      event.preventDefault();
      this.setState({
        isValid: false
      })
    }

  }

  render() {
    console.log(localStorage)
    console.log(this.state)
    if (this.state.referrer) return <Redirect to={this.state.referrer} />;
    return (
      <Container footer='Copyright &#169; Your Webcite 2020.' onClick={this.hideAutocomplete}>
        <Header title='Sign in' />
        <form onSubmit={this.onSubmit}>
          <AutocompleteInput name='email'
            placeholder='Login *'
            isValid={this.state.isValid}
            onChange={this.checkAutocomplete}
            value={this.state.email}
            autocomplete={this.state.autocomplete}
            updateData={this.updateData}
            onFocus={this.onFocus}
          />
          <Input name='password'
            type='password'
            placeholder='Password *'
            isValid={this.state.isValid}
            onChange={this.onChange}
            value={this.state.password}
            onFocus={this.onFocus}
          />
          <Checkbox name='rememberMe'
            onChange={this.onChange}></Checkbox>
          <CheckboxLabel htmlFor='rememberMe'>Remember me</CheckboxLabel>
          <Button type='submit'>SIGN IN</Button>
          <ErrorMessage>{!this.state.isValid && 'Wrong login or password.'}</ErrorMessage>
        </form>
        <Link path='/sign-up' text='Forgot password?'></Link>
        <Link right path='/sign-up' text='Dont have an account? Sign Up'></Link>
      </Container>
    );
  }
}

export default SignIn;