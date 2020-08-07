import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Style.css';

/*This is for checking vlaid email pattern*/
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

export default class Email extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      errors: {
        email: ''
      }
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      default:
        break;
    }
    this.setState({errors, [name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
      alert('Valid Form')
    }else{
      alert('Invalid Form')
    }
  }

  render() {
    const {errors} = this.state;
    return (
      <div className='wrapper'>
        <div className='form-wrapper'>
          <h2>Checks Valid Email pattern</h2>
          <Form onSubmit={this.handleSubmit} noValidate>
          <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input type='email' name='email' onChange={this.handleChange} noValidate />
              {errors.email.length > 0 && 
                <span className='error'>{errors.email}</span>}
            </FormGroup>
            <div className='submit'>
              <Button>Check Email</Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}
