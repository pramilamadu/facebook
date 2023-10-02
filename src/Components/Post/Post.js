import React from 'react'
import "./post.css"

export default function Post() {
  return (
    <div>
      <div className="post">
        <div className="postContainer">
            <div className="postTop">
                <img src="/images/01.jpg" alt="" className="postImage" />
                <span className="postUserName">Pramila Maduwantha</span>
                <div className="time"></div>
                <span className="postTime">5 mins ago</span>
            </div>
            <div className="postCenter">
                <span className="postCaption">Good Morning Guys.......Have a Nice Day...</span>
                <img src="/images/01.jpg" alt="" className="postedImage" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="/images/05.png" alt="" className="reactionPic" />
                    <img src="/images/06.png" alt="" className="reactionPic" />
                    <span className="likeCount">Chethana and 100 others</span>
                </div>
                <div className="postBottomRight">
                    <span className="commentCount">
                        110 Comments 
                    </span>
                </div>
            </div>
        </div>
        <br/>
      </div>
    </div>
  )
}
