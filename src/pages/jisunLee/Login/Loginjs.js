import React from 'react';

const username = document.querySelector('.username');
const password = document.querySelector('.password');
const loginButton = document.querySelector('.login-button');

class Loginjs extends React.Component {
  // constructor() {
  //   let id = '',
  //     pw = '';
  //   username.addEventListener('input', event => {
  //     id = event.target.value;
  //     if (id.length > 0 && pw.length > 0) {
  //       loginButton.className = 'login-button-active';
  //     } else {
  //       loginButton.className = 'login-button';
  //     }
  //   });
  //   password.addEventListener('input', event => {
  //     pw = event.target.value;
  //     if (id.length > 0 && pw.length > 0) {
  //       loginButton.className = 'login-button-active';
  //     } else {
  //       loginButton.className = 'login-button';
  //     }
  //   });
  // }

  render() {
    return (
      <div class="contentsWrap">
        <div class="logoContainer">
          <h1 class="westagramLogo">westagram</h1>
        </div>
        <div class="inputContainer">
          <form action="main.html">
            <input
              type="text"
              id="loginID"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input type="password" id="loginPW" placeholder="비밀번호" />
          </form>
        </div>
        <button class="loginSubmitBtn"> 로그인 </button>
        <div class="pwForget"> 비밀번호를 잊으셨나요? </div>
      </div>
    );
  }
}

export default Loginjs;
