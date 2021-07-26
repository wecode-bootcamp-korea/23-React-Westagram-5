/* eslint-disable*/
import React from 'react';
import { Link } from 'react-router-dom';
import './Main.scss';

class Main extends React.Component {
  goMain = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="container">
        <div className="menuContainer">
          <nav>
            <div className="leftWrapper">
              <img
                className="instagramIcon"
                src="./images/jeongil/logo/instagram icon.png"
                alt="instagram icon"
              />
              <div className="middleLine"></div>
              <img
                onClick={this.goMain}
                className="instagramLogo"
                src="./images/jeongil/logo/instagram logo.png"
                alt="instagram logo"
              />
            </div>
            <div className="centerWrapper">
              <i className="fas fa-search"></i>
              <input type="text" placeholder="검색" />
            </div>
            <div className="rightWrapper">
              <img
                className="navExplorIcon"
                src="./images/jeongil/navicon/explore.png"
                alt="explore icon"
              />
              <img
                className="navHeartIcon"
                src="./images/jeongil/navicon/heart.png"
                alt="heart shape like icon"
              />
              <img
                className="navProfileIcon"
                src="./images/jeongil/navicon/profile.png"
                alt="profile menu"
              />
            </div>
          </nav>
        </div>

        <div className="mainContainer">
          <article className="mainFeeds">
            <div className="feedHeader">
              <div className="feedHeaderProfile">
                <img
                  className="profileImage"
                  src="./images/jeongil/profile/profile.jpeg"
                  alt="profileimage"
                />
                <p>201_steve</p>
              </div>
              <div className="feedOption">
                <div className="optionDot"></div>
                <div className="optionDot"></div>
                <div className="optionDot"></div>
              </div>
            </div>
            <div className="feedImage">
              <img
                className="feed"
                src="./images/jeongil/i saw it coming.JPG"
                alt="feedimage"
              />
            </div>
            <div className="articleWrapper">
              <div className="iconWrapper">
                <div className="leftIcons">
                  <img
                    className="redHeartIcon"
                    src="./images/jeongil/feed icon/heart.png"
                    alt="red heart icon"
                  />
                  <img
                    className="commentIcon"
                    src="./images/jeongil/feed icon/chat.png"
                    alt="comment icon"
                  />
                  <img
                    className="upLoadIcon"
                    src="./images/jeongil/feed icon/upload.png"
                    alt="upload icon"
                  />
                </div>
                <img
                  className="bookmarkIcon"
                  src="./images/jeongil/feed icon/bookmark.png"
                  alt="subscribe icon"
                />
              </div>

              <div className="getLike">
                <img
                  className="feedProfile"
                  src="./images/jeongil/logo/wecode_logo.jpeg"
                  alt="feed profile image"
                />
                <p className="someOneLikeYou">
                  <b>wecode_bootcamp</b>님 <b>외 23</b>이 좋아합니다
                </p>
              </div>

              <div className="myArticleWrapper">
                <p className="myArticle">
                  <b>201_steve</b> 위코드에서 진행한 위스타그램 크라스...
                </p>
                <p>더 보기</p>
              </div>

              <div className="commentWrapper">
                <p className="comment">
                  <b>wecode_bootcamp</b> 거봐 좋았잔아~~~~~🙆🏻‍♀️
                </p>
                <img
                  className="commentLiked"
                  src="./images/jeongil/feed icon/emptyheart.png"
                  alt="before like empty heart icon"
                />
              </div>
              <p className="beforeTime">23분전</p>
            </div>

            <div className="feedUserIdHere">
              <input
                className="addComment"
                type="text"
                placeholder="댓글달기..."
              />
              <button className="commentSubmit">게시</button>
            </div>
          </article>

          <div className="main-right">
            <div className="userIdInfo">
              <img
                className="userProfileImage"
                src="./images/jeongil/profile/profile.jpeg"
                alt="user profile image"
              />
              <div className="userWrapper">
                <p className="userId">
                  <b>201_steve</b>
                </p>
                <p className="userInfo"> 23한나라의 23한치킨계장</p>
              </div>
            </div>

            <div className="storyWrapper">
              <div className="storyHeader">
                <h2>스토리</h2>
                <button>모두보기</button>
              </div>

              <div className="storyMain">
                <div className="followersContainer followersProfile1">
                  <img
                    className="followersPicture fp1"
                    src="./images/jeongil/logo/wecode_logo.jpeg"
                    alt="followersProfile1"
                  />
                  <div className="followersStory fs1">
                    <p className="followerId fi1">wecode_bootcamp</p>
                    <p className="followerEditTime fet1">23초전</p>
                  </div>
                </div>

                <div className="followersContainer followersProfile2">
                  <img
                    className="followersPicture fp2"
                    src="./images/jeongil/logo/wework.jpeg"
                    alt="followerProfile2"
                  />
                  <div className="followersStory fs2">
                    <p className="followerId fi2">wework_seonlleung</p>
                    <p className="followerEditTime fet2">23분전</p>
                  </div>
                </div>

                <div className="followersContainer followersProfile3">
                  <img
                    className="followersPicture fp3"
                    src="./images/jeongil/godmento/sir_mentoDH.jpeg"
                    alt="followerProfile3"
                  />
                  <div className="followersStory fs3">
                    <p className="followerId fi3">wecode_god_mento</p>
                    <p className="followerEditTime fet3">23시간전</p>
                  </div>
                </div>

                <div className="followersContainer followersProfile4">
                  <img
                    className="followersPicture fp4"
                    src="./images/jeongil/logo/wechicken.png"
                    alt="followerProfile4"
                  />
                  <div className="followersStory fs4">
                    <p className="followerId fi4">we_chicken</p>
                    <p className="followerEditTime fet4">hidden</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="recommendWrraper">
              <div className="recommendFollower">
                <h2>회원님을 위한 추천</h2>
                <button>모두보기</button>
              </div>

              <div className="recommendList">
                <div className="recommendContainer rc1">
                  <img
                    className="recommendUserPic rup1"
                    src="./images/jeongil/logo/slack.jpeg"
                    alt="recommendProfile1"
                  />
                  <div className="recommendIdWrapper riw1">
                    <p className="recommendId ri1">slackhq</p>
                    <p className="linkedfollower lf1">
                      wecode_bootcamp 님 외 23명이...
                    </p>
                  </div>
                  <button className="followUser fu1">팔로우</button>
                </div>

                <div className="recommendContainer rc2">
                  <img
                    className="recommendUserPic rup2"
                    src="./images/jeongil/logo/notion.jpeg"
                    alt="recommendProfile2"
                  />
                  <div className="recommendIdWrapper riw2">
                    <p className="recommendId ri2">notionhq</p>
                    <p className="linkedfollower lf2">
                      wecode_bootcamp 님 외 23명이...
                    </p>
                  </div>
                  <button className="followUser fu2">팔로우</button>
                </div>

                <div className="recommendContainer rc3">
                  <img
                    className="recommendUserPic rup3"
                    src="./images/jeongil/logo/wecode_socialclub.jpeg"
                    alt="recommendProfile3"
                  />
                  <div className="recommendIdWrapper riw3">
                    <p className="recommendId ri3">wecode-socialclub</p>
                    <p className="linkedfollower lf3">
                      wecode_bootcamp 님 외 23명이...
                    </p>
                  </div>
                  <button className="followUser fu3">팔로우</button>
                </div>
              </div>
            </div>

            <footer>
              <p>
                instagram 정보&middot;지원&middot;홍보 센터&middot;
                API&middot;채용정보&middot; 개인정보처리방침 &middot;
                약관&middot; 디렉터리 &middot;프로필 &middot; 해시태그
                &middot;언어
              </p>
              <p>&copy 2021 INSTAGRAM</p>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
