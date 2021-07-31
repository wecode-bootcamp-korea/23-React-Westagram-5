import React from 'react';
import './Main.scss';

// 1. state에 comment 내용이랑 userid 저장할 수 있는 목록을 만들어야함
// 2. commentList라는 배열 선언 하고
// 3. input창에서 키보드 누르면 onChange이벤트로 this.setState해서 userId'(미리정해놓고)' comment'e.target.value'
// 4. 댓글 입력하고 게시 누르면 빈 배열에 userId랑 comment가 들어가야함

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      comment: '',
      commentList: [],
    };
  }

  getValue = e => {
    this.setState({
      id: 'lown',
      comment: e.target.value,
    });
  };

  goClick = e => {
    this.setState({
      commentList: this.state.commentList.concat([this.state.comment]),
    });
  };

  render() {
    return (
      <div className="wrapAll">
        <header>
          <ul className="nav">
            <div className="navLeft">
              <li>
                <i className="fab fa-instagram"></i>
              </li>
              <span className="westaTitle">Westagram</span>
            </div>
            <div className="navCenter">
              <i className="fas fa-search"></i>
              <input type="search" placeholder="검색" />
            </div>

            <div className="navRight">
              <i className="far fa-compass"></i>
              <i className="far fa-heart"></i>
              <i className="far fa-user"></i>
            </div>
          </ul>
        </header>

        <main>
          <div className="feeds"></div>
          <article className="article">
            <div className="writerIdWrap">
              <img
                className="profilepic"
                alt="dog"
                src="/images/imageslw/flowerpic.jpeg"
              />
              <span className="userID">iamhoony</span>
              <i className="fas fa-ellipsis-h"></i>
            </div>

            <img
              className="bigPic"
              alt="dog"
              src="/images/imageslw/profilepic.png"
            />

            <div className="underbigPic">
              <i className="fas fa-heart"></i>
              <i className="far fa-comment"></i>
              <i className="fas fa-external-link-alt"></i>
              <i className="far fa-bookmark"></i>
            </div>

            <div className="likesInfo">
              <img
                className="profilepicSecond"
                alt="dog"
                src="/images/imageslw/greenpic.jpeg"
              />
              <span className="likes">
                <span className="fontBold">hoonydream</span>님 외
                <span className="fontBold">114,422명</span>이 좋아합니다.
              </span>
            </div>

            <div className="contents">
              <p>
                <span className="fontBold">iamhoony</span> 위워크에서 진행한
                증멍사진 촬영...
                <span className="fontBold">더 보기</span>
              </p>
              <p>
                <span className="fontBold">hoonydream</span> 거봐 좋았잖아~~~
              </p>
              <p className="bolderBolder">10분 전</p>
              <div>
                {this.state.commentList.map((comment, index) => {
                  return <p key={index}> lown :{comment} </p>;
                })}
              </div>
            </div>

            <div className="commentWrapper">
              <input
                onChange={this.getValue}
                type="text"
                className="commentInput bolderBolder"
                placeholder="댓글 달기..."
              />
              <button className="replyButton" onClick={this.goClick}>
                게시
              </button>
            </div>
          </article>

          {/* <!-- main-right --> */}
          <div className="main-right">
            <div className="rightTop">
              <img
                className="profilepicThird"
                alt="dog"
                src="/images/imageslw/flowerpic.jpeg"
              />
              <div className="userInfo">
                <span className="fontBold">iamhoony</span>
                <span>literally amazing doggo</span>
              </div>
            </div>

            {/* <!-- 스토리 목록 --> */}
            <div className="story">
              <div className="storyTop">
                <span className="fontBold">스토리</span>
                <span className="fontBold">모두 보기</span>
              </div>
              <div className="storyList">
                <img
                  className="storyUserPic"
                  alt="dog"
                  src="/images/imageslw/KakaoTalk_Photo_2021-06-10-13-10-54.jpeg"
                />
                <div className="storyUserInfo">
                  <span className="fontBold">hoonythesheltie</span>
                  <br />
                  <span>9분 전</span>
                </div>
              </div>
              <div className="storyList">
                <img
                  className="storyUserPic"
                  alt="dog"
                  src="/images/imageslw/KakaoTalk_Photo_2021-06-10-01-00-46-1.jpeg"
                />
                <div className="storyUserInfo">
                  <span className="fontBold">hoonythecocker</span>
                  <br />
                  <span>6분 전</span>
                </div>
              </div>
              <div className="storyList">
                <img
                  className="storyUserPic"
                  alt="dog"
                  src="/images/imageslw/greenpic.jpeg"
                />
                <div className="storyUserInfo">
                  <span className="fontBold">hoonythesweetie</span>
                  <br />
                  <span>0분 전</span>
                </div>
              </div>
            </div>

            {/* <!-- 회원님을 위한 추천 --> */}
            <div className="recommendation">
              <div className="recoTop">
                <span className="fontBold">회원님을 위한 추천</span>
                <span className="fontBold">모두 보기</span>
              </div>
              <div className="recoList">
                <img
                  className="profilepic"
                  alt="dog"
                  src="/images/imageslw/KakaoTalk_Photo_2021-06-10-01-00-46-3.jpeg"
                />
                <div className="recoUserInfo">
                  <span className="fontBold">hoonythesheltie</span>
                  <br />
                  <span>wideplate3님 외 3명이...</span>
                </div>
                <span className="follow">팔로우</span>
              </div>
              <div className="recoList">
                <img
                  className="profilepic"
                  alt="dog"
                  src="/images/imageslw/KakaoTalk_Photo_2021-06-10-01-00-46-5.png"
                />
                <div className="recoUserInfo">
                  <span className="fontBold">wideplate3</span>
                  <br />
                  <span>hoonyzzang님 외 2명이...</span>
                </div>
                <span className="follow">팔로우</span>
              </div>
              <div className="recoList">
                <img
                  className="profilepic"
                  alt="dog"
                  src="/images/imageslw/KakaoTalk_Photo_2021-06-10-01-00-46-4.jpeg"
                />
                <div className="recoUserInfo">
                  <span className="fontBold">hoonyzzang</span>
                  <br />
                  <span>babohoony 외 6명이...</span>
                </div>
                <span className="follow">팔로우</span>
              </div>
            </div>
            <p className="rightBottom">
              Instagram 정보 ∙ 지원 ∙ 홍보 센터 ∙ API ∙<br />
              채용 정보 ∙ 개인정보처리방침 ∙ 약관 ∙<br />
              디렉터리 ∙ 프로필 ∙ 해시태그 ∙ 언어
              <br />© 2021 Instagram
            </p>
          </div>
        </main>
      </div>
    );
  }
}

export default Main;
