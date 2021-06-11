import axios from 'axios';
import {connect} from 'react-redux';
import {saveUser} from '../redux/authReducer';
import {Component} from 'react';
import '../Sass/Auth.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



class Auth extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      admin: false
    };
  }

  handleEmailInput(value) {
    this.setState({ email: value });
  }

  handlePasswordInput(value) {
    this.setState({ password: value });
  }

  login = () => {
    axios.post('/auth/login', this.state)
    .then (res => {
      console.log(res.data)
      this.props.saveUser(res.data)
      this.props.history.push('/products')
    }) 
    .catch (err => {
      console.log(err)
    })
  }

  register = () => {
    axios.post('/auth/register', this.state)
    .then(res => {
      this.props.saveUser(res.data)
      this.props.history.push('/products')
    })
    .catch (err => {
      console.log(err)
    })
  }


  render(){
    const {email, password} = this.state

    return(
    <div className="Auth">
      
      <div className="loginContainer">
        <br></br>
        <br></br>
        <br></br>
        <TextField 
        id="email-input"
        label= "Email"
        variant= "outlined"
        type="text"
        placeholder="email"
        value={email}
        onChange={e => this.handleEmailInput(e.target.value)}
        />
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>

        <TextField
        id="password-input"
        label= "Password"
        variant= "outlined"
        type= "password"
        placeholder="password"
        value={password}
        onChange={e => this.handlePasswordInput(e.target.value)}
        />
        <br></br>
        <br></br>
        

        <Button className= 'login-button' onClick={this.login}>Login</Button>
        <br></br>
        <br></br>
        New User?
        <br></br>
        <br></br>


        <Button className= 'register-button' onClick={this.register}>Register</Button>

        
        </div>
      </div>
      
      



     
    );
  }
}
  export default connect(null, {saveUser})(Auth);