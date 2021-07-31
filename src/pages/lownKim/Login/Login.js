// state에 값이 입력 될 때
// 아이디값은 골뱅이가 들어있는지, 패스워드는 5글자 이상인지 판별해야함
// 두 조건 모두 true라면
// 버튼의 class명을 newButton으로 변경해야함
// 그렇지 않으면 버튼 class명은 그대로 button

// ex. ID - @ 포함 / PW - 5글자 이상
// 만약 아이디 값 안에 골뱅이가 들어있고 패스워드가 5글자 이상이라면
// if(this.state.email.includes("@") && this.state.password.length >= 5){
// }

// javascript.includes(java);  javascript에 java가 들어있나 확인하는 방법!

import React from 'react';
import './Login.scss';

class Loginlw extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      changeButton: 'button',
    };
  }

  // 1. 기존코드 안되던 이유 이해
  // 2. 도현님이 써주신 코드 이해

  handleIdInput = e => {
    this.setState({
      email: e.target.value,
    });
  };

  handlepasswordInput = e => {
    this.setState(
      {
        password: e.target.value,
      },
      () => {
        this.state.email.includes('@') && this.state.password.length >= 5
          ? this.setState({ changeButton: 'newButton' })
          : this.setState({ changeButton: 'button' });
      }
    );
    // if (this.state.email.includes('@') && this.state.password.length >= 5) {
    //   this.setState({ changeButton: 'newButton' });
    // } else {
    //   this.setState({ changeButton: 'button' });
    // }
  };

  render() {
    //   let idValidation = false;
    //   if (this.state.id.length > 5) {
    //     idValidation = true;
    //   }

    let idValidation = this.state.email.includes('@') ? true : false;
    // email에 입력된 값이 @를 포함하는지 판별하는 idValidation을 선언
    let pwValidation = this.state.password.length >= 5 ? true : false;
    // password에 입력된 값의 자릿수가 5 이상인지 판별하는 pwValidation을 선언

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
                onChange={this.handlepasswordInput}
              />
            </div>
          </div>
          <div className="buttonWrapper">
            <button
              // className={this.state.changeButton}
              className={idValidation && pwValidation ? 'newButton' : 'button'}
              onClick={() => {
                // console.log(this.state.email, this.state.password);
                fetch('http://10.58.3.21:8000/userssignup', {
                  method: 'Post',
                  body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password,
                  }),
                })
                  .then(response => response.json())
                  .then(result => {
                    if (result.TOKEN) {
                      window.location.href = 'http://localhost:3000/mainlw';
                    }
                    return null;
                    // console.log('결과 : ', result);
                  });
              }}
            >
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
