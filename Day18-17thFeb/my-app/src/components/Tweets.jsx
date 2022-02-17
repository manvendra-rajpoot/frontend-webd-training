import React, { useState } from 'react';
import Tweet from './Tweet';
 
const Tweets = () => {
    const [tweets, setTweets] = useState(
        [
            {
                id:1,
                name:"Elon Musk",
                twitterhandle:"elonmusk",
                tweet:"I was at a lunch with Munger in 2009 where he told the whole table all the ways Tesla would fail. Made me quite sad, but I told him I agreed with all those reasons & that we would probably die, but it was worth trying anyway.",
                likes:0
            },{
                id:2,
                name:"Jeff Bezos",
                twitterhandle:"jeffbezos",
                tweet:"Lorem ipsum dolor sit",
                likes:0
            },
            {
                id:3,
                name:"Mukesh Ambani",
                twitterhandle:"mukeshambani",
                tweet:"Lorem ipsum dolor sit",
                likes:0
            },
            {
                id:4,
                name:"Gautam Adani",
                twitterhandle:"gautamadani",
                tweet:"Lorem ipsum dolor sit",
                likes:0
            }
        ]
    );
    
    const handleLiking = (id, likeValue) => {
        //finding the index of object in array to update likes
        const indexOfObj = tweets.findIndex((obj) => obj.id===id);
        
        // const updatedTweets = [...tweets];
        //if likeValue==1 then liked , & if likeValue==-1 then disliked
        if(likeValue===1) {
            // updatedTweets[indexOfObj].likes += 1;
            setTweets([...tweets], tweets[indexOfObj].likes+=1);
        } else if(likeValue===-1) {
            if(tweets[indexOfObj].likes>0){
                // updatedTweets[indexOfObj].likes -= 1;
                setTweets([...tweets], tweets[indexOfObj].likes-=1);
            }
        } 
        // setTweets(updatedTweets);
    }

    const renderTweets=()=>{
        return tweets.map(item=>{
            return <Tweet tweet={item} handleLiking={handleLiking} />
        });
    }
    return (
    <div className='allTweets'>
        <h2>Home</h2>
        {renderTweets()} 
    </div>
  )
}
 
export default Tweets;
