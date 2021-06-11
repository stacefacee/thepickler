import axios from "axios";
import {Component} from 'react';
import '../Sass/Contact.scss'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';




class Contact extends Component {

  constructor(){
    super()
    this.state = {
      name: '',
      email: '',
      message: ''
    }

  }

  handleNameInput(value){
    this.setState({name: value})
  }

  handleEmailInput(value){
    this.setState({email: value})
  }

  handleMsgInput(value){
    this.setState({message: value})
  }

  submitEmail = () => {
    axios.post ('/api/contact', this.state)
    .then(res => {
      console.log(res.data)
      alert ("Message Sent. Thank you for your feedback.")
      this.resetForm()
    })
    .catch (err => {
      console.log(err)
      alert("Error. You Suck.")
    })
  }

  resetForm(){
    this.setState({name: '', email: '', message:''})
  }




  render(){
    const {name, email, message} = this.state
      return(
    <form class= "contact-form">

        <style>
  @import url('https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:wght@300&display=swap');
  </style>
        
          <h2 className="title">Contact Us</h2>
          <TextField 
          placeholder="Name"
          id="name"
          variant="outlined"
          type= "text"
          style= {{width: 1000}}
          className="name-field" 
          value={name}
          onChange= {e => this.handleNameInput(e.target.value)
          }
          />
          <br></br>
          
          <TextField 
          placeholder="Email"
          variant="outlined"
          id="email"
          type= "text"
          style= {{width: 1000}}
          className="email-field" 
          value={email}
          onChange= {e => this.handleEmailInput(e.target.value)}
          />
          <br></br>
          <br></br>
          <br></br>
          <TextField 
          placeholder="Message"
          variant="outlined"
          id="message"
          type= "text"
          style= {{width: 1000}}
          className="message-field" 
          value={message}
          onChange= {e => this.handleMsgInput(e.target.value)}
          />
          
          <br></br>
          <br></br>
          <Button className="submit-button" onClick={this.submitEmail}>Submit</Button>










        </form>
      )
  }

}

export default Contact;