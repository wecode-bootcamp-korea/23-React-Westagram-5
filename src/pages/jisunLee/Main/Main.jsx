import React, { Component } from 'react';
import './Main.css';

class Main extends React.Component {
  render() {
    return (
      <div>
        <nav class="header-nav">
          <div class="container">
            <div class="right">
              <div class="logo-icon">
                <a href="#">
                  <img
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png"
                    alt=""
                  />{' '}
                </a>
              </div>
            </div>
            <div class="border"></div>
            <div class="logo-text">
              <a href="#">
                <img
                  src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div class="center">
            <form action="">
              <div class="search-wrap">
                <input type="text" />
              </div>
            </form>
            <div class="search-up">
              <div class="search-icon">
                <img src="finder.png" alt="" />
              </div>
              <span>검색</span>
            </div>
          </div>
          <div class="left">
            <div>
              <a href="#">
                <img
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                  alt=""
                  class="img-explore"
                />
              </a>
            </div>
            <div>
              <a href="#">
                <img
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                  alt=""
                />
              </a>
            </div>
            <div>
              <a href="#">
                <img
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </nav>

        <main>
          <div class="feeds">
            <article>
              <div class="feed-user-id-box">
                <div class="feed-user-pic-wrap">
                  <img src="./public/images/moong.jpg" alt="" />
                </div>
                <div class="feed-user-id">moongchi</div>
                <div class="feed-three-dot-wrap">
                  <div class="three-dot-menu">
                    <a href="#">
                      <img
                        src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div class="feed-img-wrap">
                <img src="chi.jpg" alt="" />
              </div>
              <div class="feed-icons-wrap">
                <div class="feed-icons-left">
                  <div class="icon-heart">
                    <a href="#">
                      <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
                    </a>
                  </div>
                  <div class="icon-balloon">
                    <a href="#">
                      <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png" />
                    </a>
                  </div>
                  <div class="icon-share">
                    <a href="#">
                      <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png" />
                    </a>
                  </div>
                </div>
                <div class="feed-icon-rignt">
                  <div class="icon-bookmark">
                    <a href="#">
                      {' '}
                      <img
                        src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div class="feed-repl-wrap">
                <div class="feed-like-text-wrap">
                  <button>
                    좋아요 <span>999</span>개
                  </button>
                </div>
                <div class="feed-repls">
                  <span>
                    <a href="#" class="user-id">
                      MOONGCHI
                    </a>
                    멍멍 나는 세상에서 제일 귀엽지룽🐶<span>...</span>
                    <button class="all-repl">더보기</button>
                  </span>
                  <span class="mention">
                    <a href="#">댓글 3개 모두보기</a>
                  </span>
                </div>
                <span class="feed-time">1일 전</span>
              </div>
              <div class="send-repl-wrap">
                <div class="form-div">
                  <div class="input-wrap">
                    <input
                      class="repl-input"
                      type="text"
                      placeholder="댓글 달기..."
                    />
                  </div>
                  <div class="submit-wrap">
                    <button class="repl-btn opacity-0-5" type="button">
                      게시
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <div class="main-right">
            <div class="my-profile-wrap">
              <div class="my-pic-wrap">
                <img src="./public/images/moong.jpg" alt="" />
              </div>
              <div class="my-pic-text">
                <div>moongchi</div>
                <div>.... 🕳</div>
              </div>
            </div>
            <div class="side-box">
              <div class="side-title">
                <div>스토리</div>
                <div>모두 보기</div>
              </div>
              <div class="side-list-wrap">
                <div class="side-list">
                  <ul>
                    <li>
                      <a href="#">
                        <div class="user-profile-wrap">
                          <div class="user-pic-wrap">
                            <img src="./public/images/moong.jpg" alt="" />
                          </div>
                          <div class="user-profile-text">
                            <div>moongchi</div>
                            <div>3일 전</div>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="side-box">
              <div class="side-title">
                <div>회원님을 위한 추천</div>
                <div>모두 보기</div>
              </div>
              <div class="side-list-wrap">
                <div class="side-list">
                  <ul>
                    <li>
                      <a href="#">
                        <div class="user-profile-wrap">
                          <div class="user-pic-wrap">
                            <img src="./public/images/moong.jpg" alt="" />
                          </div>
                          <div class="user-profile-text">
                            <div>jisunlee</div>
                            <div>instagram 신규 가입</div>
                          </div>
                          <form action="">
                            <div class="follow-btn">
                              <button type="submit">팔로우</button>
                            </div>
                          </form>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="side-foot">
              <nav>
                <ul>
                  <li>
                    <a href="#">Instagram 정보</a>
                  </li>
                  <li>
                    <a href="#">도움말</a>
                  </li>
                  <li>
                    <a href="#">홍보 센터</a>
                  </li>
                  <li>
                    <a href="#">API</a>
                  </li>
                  <li>
                    <a href="#">채용 정보</a>
                  </li>
                  <li>
                    <a href="#">개인정보처리방침</a>
                  </li>
                  <li>
                    <a href="#">약관</a>
                  </li>
                  <li>
                    <a href="#">디렉터리</a>
                  </li>
                  <li>
                    <a href="#">프로필</a>
                  </li>
                  <li>
                    <a href="#">해시태그</a>
                  </li>
                  <li>
                    <a href="#">언어</a>
                  </li>
                </ul>
              </nav>
              <span>© 2020 INSTAGRAM</span>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
export default Main;
