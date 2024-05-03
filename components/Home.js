import LastTweets from "./LastTweets";
import Trends from "./Trends";
import Tweet from "./Tweet";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../reducers/user";

function Home() {
  const dispatch = useDispatch();
  const [tweetData, setTweetData] = useState([]);
  const user = useSelector((state) => state.user.value);
  console.log(user);

  const getTweet = async () => {
    const response = await fetch("http://localhost:3000/tweets");
    const data = await response.json();
    setTweetData(data.data);
  };

  const handleLogout = () => {
    // Retour à la page d'accueil
    window.location.assign("http://localhost:3001/");
    dispatch(logout());
  };

  console.log(tweetData);

  useEffect(() => {
    getTweet();
  }, []);

  return (
    <div className="bg-[#15202b] h-screen flex">
      <div
        id="nav"
        className="h-full w-3/12 border-r border-[#2f3943] flex flex-col justify-between p-4"
      >
        <Link href="/home">
          <img src="logo.png" className="rotate-180 w-16 cursor-pointer" />
        </Link>
        <div>
          <div id="profil" className="flex mb-4">
            <img src={user.picture} className="w-12 mr-2 rounded-full" />
            <div className="flex flex-col justify-center">
              <p className="font-bold">{user.firstname}</p>
              <p className="text-[#6a7783]">@{user.username}</p>
            </div>
          </div>
          <Button
            color="primary"
            className="w-1/3"
            size="sm"
            onClick={() => handleLogout()}
          >
            Logout
          </Button>
        </div>
      </div>
      <div id="tweets" className="h-full w-5/12 flex flex-col">
        <Tweet />
        {tweetData &&
          tweetData.map((tweet, index) => {
            return <LastTweets id={index} tweet={tweet} />;
          })}
      </div>
      <Trends />
    </div>
  );
}

export default Home;
