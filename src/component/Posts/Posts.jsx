import React from "react";
// import { Link } from "react-router-dom";
import "./style.css"
import PostImg from "./photo_2023-02-09_18-47-34.jpg"

const Posts = () => {
    return (
        <div className="posts">
          <div className="post">
                <div className="post-title">
                    User001
                </div>
                <div className="post-image">
                    <img src={PostImg} alt="" />
                </div>
                <div className="post-info">
                    <div className="post-result">
                        <span>
                            <p>❤️</p>
                            <p style={{textAlign:"center"}}> 199 </p>
                        </span>
                        <span>
                            <p>📧</p>
                            <p style={{textAlign:"center"}}> 48 </p>
                        </span>
                    </div>
                    <h4>User: Test Post Title</h4>
                    <div className="post-comments">
                        <p>📧 User: Salom</p>
                        <p>📧 User: Ijodizga omad</p>
                    </div>
                    <div className="post-comment-input">
                        <input type="text" name="" id="" placeholder="Enter comments ..."/>
                        <button>Post</button>
                    </div>
                </div>
          </div>
        </div>
    )
}

export default Posts;