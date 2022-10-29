import { useContext, useEffect } from 'react'
import { TwitterContext } from '../../context/TwitterContext'
import TweetBox from './TweetBox'
import Post from '../Post'
import { BsStars } from 'react-icons/bs'

const style = {
  wrapper: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}


function Feed() {
  const { tweets } = useContext(TwitterContext)

  return (
    <div className={`${style.wrapper} no-scrollbar`}>
      <div className={style.header}>
        <div className={style.headerTitle}>Home</div>
        <BsStars />
      </div>
      <TweetBox />
      {tweets.map((tweet, index) => (
        <Post
          key={index}
          displayName={
            tweet.author.name === 'Unnamed'
              ? `${tweet.author.walletAddress.slice(
                  0,
                  4,
                )}...${tweet.author.walletAddress.slice(41)}`
              : tweet.author.name
          }
          userName={`${tweet.author.walletAddress.slice(
            0,
            4,
          )}...${tweet.author.walletAddress.slice(41)}`}
          text={tweet.tweet}
          avatar={tweet.author.profileImage}
          isProfileImageNft={tweet.author.isProfileImageNft}
          timestamp={tweet.timestamp}
        />
      ))}
    </div>
  )
}

export default Feed




/*import { BsStars } from "react-icons/bs";
import TweetBox from "../home/TweetBox";
import Post from "../Post";
import Posts from "../Posts";
import { useContext } from "react";
import { TwitterContext } from "../../context/TwitterContext";

const style = {
  wrapper: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
};

const tweets = [
  {
    displayName: "Nithin",
    userName: "0*8Cd9042555sd",
    avatar: "https://avatars.githubusercontent.com/u/58203293?v=4",
    text: "Hi everybody, This is my first tweet and I am excited to share you all my project.",
    isProfileImageNft: false,
    timestamp: "2022-10-26T12:00:00.000Z",
  },
  {
    displayName: "Nithin",
    userName: "0*8Cd9042555sd",
    avatar: "https://avatars.githubusercontent.com/u/58203293?v=4",
    text: "Hi everybody, This is my first tweet and I am excited to share you all my project.",
    isProfileImageNft: false,
    timestamp: "2022-10-26T12:00:00.000Z",
  },
  {
    displayName: "Nithin",
    userName: "0*8Cd9042555sd",
    avatar: "https://avatars.githubusercontent.com/u/58203293?v=4",
    text: "Hi everybody, This is my first tweet and I am excited to share you all my project.",
    isProfileImageNft: false,
    timestamp: "2022-10-26T12:00:00.000Z",
  },
];

export default function Feed() {
  const { tweets } = useContext(TwitterContext);
  return (
    <div className={`${style.wrapper}`}>
      <div className={style.header}>
        <div className={style.headerTitle}>Home</div>
        <BsStars />
      </div>
      <TweetBox />
      {tweets.map((tweet, index) => (
          <Post
            key={index}
            displayName={
              tweet.author.name === "Unnamed"
                ? `${tweet.author.walletAddress.slice(
                    0,
                    4
                  )}...${tweet.author.walletAddress.slice(41)}`
                : tweet.author.name
            }
            userName={`${tweet.author.walletAddress.slice(
              0,
              4
            )}...${tweet.author.walletAddress.slice(41)}`}
            text={tweet.tweet}
            avatar={tweet.author.profileImage}
            isProfileImageNft={tweet.author.isProfileImageNft}
            timestamp={tweet.timestamp}
          />

      ))}
    </div>
  );
}*/

/*{console.log(tweet, index)}
  <h3> Hello World</h3>
  <Post
    key={index}
    displayName={tweet.displayName}
    userName={`${tweet.author.walletAddress.slice(
      0,
      4,
    )}...${tweet.author.walletAddress.slice(41)}`}
    avatar={tweet.avatar}
    text={tweet.text}
    isProfileImageNft={tweet.isProfileImageNft}
    timestamp={tweet.timestamp}
    />*/
/*
{tweets.map((tweet, index) => (
        <div>
          {console.log(tweet)}
          <Post
            key={index}
            displayName={
              tweet.author.name === "Unnamed"
                ? `${tweet.author.walletAddress.slice(
                    0,
                    4
                  )}...${tweet.author.walletAddress.slice(41)}`
                : tweet.author.name
            }
            userName={`${tweet.author.walletAddress.slice(
              0,
              4
            )}...${tweet.author.walletAddress.slice(41)}`}
            text={tweet.tweet}
            avatar={tweet.author.profileImage}
            isProfileImageNft={tweet.author.isProfileImageNft}
            timestamp={tweet.timestamp}
          />
        </div>
      ))}
*/