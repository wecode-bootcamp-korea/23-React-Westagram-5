import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      pw: '',
    };
  }

  handleIdInput = e => {
    this.setState({
      id: e.target.value,
    });
  };

  handlePwInput = e => {
    this.setState({
      pw: e.target.value,
    });
  };

  render() {
    return (
      <div className="Login">
        <div className="LoginContainer">
          <header className="logo">
            <h1>westagram</h1>
          </header>
          <section className="buttonContainer">
            <input
              onChange={this.handleIdInput}
              className="btn idBtn"
              type="text"
              placeholder="전화번호,사용자 이름 또는 이메일"
            />
            <input
              onChange={this.handlePwInput}
              className="btn passwordBtn"
              type="password"
              placeholder="비밀번호"
            />
            <Link to="/mainji" className="logInButton">
              로그인
            </Link>
          </section>
          <footer className="forGotPassword">
            <button>비밀번호를 잊으셨나요?</button>
          </footer>
        </div>
      </div>
    );
  }
}

export default Login;
