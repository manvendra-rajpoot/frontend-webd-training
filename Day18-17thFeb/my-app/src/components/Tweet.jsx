import React from 'react';
import "./Tweet.css"
 
const Tweet = (props) => {
  return (
    <div className='container'>
        <div className="section-one">
            <div className="mainName"><h4>{props.tweet.name}</h4></div>
            <div className="twitterHandle"><h6>@{props.tweet.twitterhandle}</h6>
            </div>
        </div>
        <div className="content">{props.tweet.tweet}</div>
        <div className="action">
            <button id='likeBtn' onClick={()=>props.handleLiking(props.tweet.id, 1)}>Like</button>
            <button id='dislikeBtn' onClick={()=>props.handleLiking(props.tweet.id, -1)}>Dislike</button>
            <h5><span className="badge bg-secondary">{props.tweet.likes}</span></h5>
        </div>
    </div>
  )
}
 
export default Tweet;
