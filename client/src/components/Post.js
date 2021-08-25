import React from 'react'
import '../styles/Post.css'
import PostContent from './PostContent'
const Post = () => {
    return (
        <div className="Section">
            <div className="Post-Section">
                <h1>Geschichte und politische Bildung</h1>
            </div>
            <div className="Post Post-wide Post-3High">
                <PostContent header="Weimarer Republik" user="Michael" />
            </div>
            <div className="Post Post-wide Post-high">
                <PostContent/>
            </div>
            <div className="Post Post-wide Post-high">
                <PostContent/>
            </div>
            <div className="Post Post-high">
                <PostContent/>
            </div>
            <div className="Post Post-high">
                <PostContent/>
            </div>
        </div>
    )
}

export default Post
