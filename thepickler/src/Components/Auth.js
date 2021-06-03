import axios from 'axios';
import {connect} from 'react-redux';
import {saveUser} from '../redux/authReducer';
import {Component} from 'react';


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

  register= () => {
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
      <div className= "title">
      Login
      </div>
      <div className="loginContainer">
        <input 
        type="text"
        placeholder="email"
        value={email}
        onChange={e => this.handleEmailInput(e.target.value)}
        />
        <br>
        </br>

        <input
        type="text"
        placeholder="password"
        value={password}
        onChange={e => this.handlePasswordInput(e.target.value)}
        />
        <br></br>
        <button className= 'login-button' onClick={this.login}>Login</button>

        <button className= 'register-button' onClick={this.register}>Register</button>
      </div>
      







    </div>
    );
  }
}
  export default connect(null, {saveUser})(Auth);