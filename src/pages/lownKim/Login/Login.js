import React from 'react';
import './Login.scss';

class Loginlw extends React.Component {
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
    console.log(this.state.pw);

    return (
      <div className="wrapAll">
        <section className="container">
          <h1>
            <span className="loginTitle">Westagram</span>
          </h1>
          <div className="infoWrapper">
            <div className="inputWrap">
              <input
                id="email"
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onChange={this.handleIdInput}
              />
            </div>
            <div className="inputWrap">
              <input
                id="password"
                type="password"
                placeholder="비밀번호"
                onChange={this.handlePwInput}
              />
            </div>
          </div>
          <div className="buttonWrapper">
            <button className="button" disabled>
              로그인
            </button>
          </div>
          <div className="forget">비밀번호를 잊으셨나요?</div>
        </section>
      </div>
    );
  }
}

export default Loginlw;
