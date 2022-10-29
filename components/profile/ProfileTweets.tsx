import { useEffect, useContext, useState } from 'react'
import { TwitterContext } from '../../context/TwitterContext'
import Post from '../Post'

const style = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}

interface Tweet {
  timestamp: string
  tweet: string
}

interface Tweets extends Array<Tweet> {}

interface Author {
  name: string
  profileImage: string
  walletAddress: string
  isProfileImageNft: Boolean | undefined
}


const ProfileTweets = () => {
  const { currentUser } = useContext(TwitterContext)
  const [tweets, setTweets] = useState<Tweets>([
    {
      timestamp: '',
      tweet: '',
    },
  ])
  const [author, setAuthor] = useState<Author>({
    name: '',
    profileImage: '',
    walletAddress: '',
    isProfileImageNft: undefined,
  })

  useEffect(() => {
    if (!currentUser) return

    setTweets(currentUser.tweets)
    setAuthor({
      name: currentUser.name,
      profileImage: currentUser.profileImage,
      walletAddress: currentUser.walletAddress,
      isProfileImageNft: currentUser.isProfileImageNft,
    })
  }, [currentUser])

  return (
    <div className={style.wrapper}>
      {tweets?.map((tweet, index) => (
        <Post
          key={index}
          displayName={
            author.name === 'Unnamed'
              ? `${author.walletAddress.slice(
                  0,
                  4,
                )}...${author.walletAddress.slice(41)}`
              : author.name
          }
          userName={`${author.walletAddress.slice(
            0,
            4,
          )}...${author.walletAddress.slice(41)}`}
          text={tweet.tweet}
          avatar={author.profileImage}
          timestamp={tweet.timestamp}
          isProfileImageNft={author.isProfileImageNft}
        />
      ))}
    </div>
  )
}

export default ProfileTweets

/*import React from "react";
import Post from "../Post";
import { useContext } from "react";
import { TwitterContext } from "../../context/TwitterContext";

const style = {
  wrapper: `no-scrollbar`,
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

const ProfileTweets = () => {
  const {currentAccount, currentUser} = useContext(TwitterContext)
  return (
    <div className={style.wrapper}>
      {currentUser.tweets?.map((tweet, index) => (
        <Post
          key={index}
          displayName="Nithin"
          userName={`${currentAccount.slice(0, 4)}...${currentAccount.slice(
            -4
          )}`}
          text={tweet.tweet}
          avatar={tweet.avatar}
          timestamp={tweet.timestamp}
          isProfileImageNft={tweet.isProfileImageNft}
        />
      ))}
    </div>
  );
};

export default ProfileTweets;*/
