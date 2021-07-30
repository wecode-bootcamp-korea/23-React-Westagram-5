import React, { Component } from 'react';
import './Comment.scss';

export class Comment extends Component {
  render() {
    return (
      <>
        <div className="commentWrapper">
          <p className="comment">
            <b>{this.props.userid}</b> {this.props.reply}
          </p>
          <i className="commentUnLiked far fa-heart"></i>
        </div>
        <p className="beforeTime">23분전</p>
      </>
    );
  }
}

export default Comment;
