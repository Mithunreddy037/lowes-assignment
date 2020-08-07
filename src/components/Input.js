import React,{Component} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Style.css';
class Demo extends Component {
    constructor(props) {
      super(props);
      this.state = {
        suggestion: '',
        busType: '',
        check:''
      };
    }
  
    handleChange=(e)=> {
        this.setState({
            [e.target.name]: e.target.value,
          })
    }
  
    handleSubmit=(event)=> {
        var newLine = "\r\n"
        var msg = "You have given Suggestion of:"+this.state.suggestion
        msg += newLine;
        msg += "You have selected bus type:"+this.state.busType;
        msg += newLine;
        msg += "I agree:"+this.state.check;
        alert(msg);  
      event.preventDefault();
    }
  
    render() {
      return (
        <div className='wrapper'>
        <div className='form-wrapper'>
          <h2>Fill the input values</h2>
          <Form onSubmit={this.handleSubmit} noValidate>
            <FormGroup>
            <Label>Eneter the text below</Label>
                <textarea name="suggestion" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
            <Label>Select Bus type</Label>
            <select name="busType" onChange={this.handleChange} required>
                <option >select option</option>
                <option value="ksrtc">KSRTC</option>
                <option value="bmtc">BMTC</option>
                <option value="nekrtc">NEKRTC</option>
                <option value="nwkrtc">NWKRTC</option>
            </select>
            </FormGroup>
            <FormGroup check>
                <Input type="checkbox" name="check" value="Yes" onChange={this.handleChange} />
                <Label for="exampleCheck" check>I agree</Label>
            </FormGroup>  
            <div className='submit'>
              <Button>Submit</Button>
            </div>
          </Form>
        </div>
      </div>
      );
    }
  }
  export default Demo;