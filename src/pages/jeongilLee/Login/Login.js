import React from 'react';
import './Login.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      pw: '',
      buttonChange: 'logInButton',
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

  btnChange = () => {
    this.state.id.includes('@') && this.state.pw.length >= 5
      ? this.setState({ buttonChange: 'logAfterButton' })
      : this.setState({ buttonChange: 'logInButton' });
  };

  goToMain = () => {
    if (this.state.buttonChange === 'logAfterButton') {
      this.props.history.push('/mainji');
    } else {
      alert('아이디와 비밀번호를 확인해 주세요');
    }
  };

  render() {
    // setstate로 입력된 값은 setstate 객체에 저장되고, this.state.key로 접근해서 setstate에 저장된 값을 불러올수있다.
    return (
      <div className="Login">
        <div className="LoginContainer" onKeyUp={this.btnChange}>
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
            <button onClick={this.goToMain} className={this.state.buttonChange}>
              로그인
            </button>
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
