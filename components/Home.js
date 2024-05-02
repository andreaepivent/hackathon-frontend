import LastTweets from "./LastTweets";
import Trends from "./Trends";
import Tweet from "./Tweet";
import Hashtag from "./Hashtag";
import { Button } from "@nextui-org/button";
import Link from 'next/link';

function Home() {
  return (
    <div className="bg-[#15202b] h-screen flex">
      <div
        id="nav"
        className="h-full w-3/12 border-r border-[#2f3943] flex flex-col justify-between p-4"
      >
        <Link href="/home"><img src="logo.png" className="rotate-180 w-16 cursor-pointer" /></Link>
        <div>
          <div id="profil" className="flex mb-4">
            <img src="profilepic.png" className="w-12 mr-2 rounded-full" />
            <div className="flex flex-col justify-center">
              <p className="font-bold">Elias le Boss</p>
              <p className="text-[#6a7783]">@PetitBoss</p>
            </div>
          </div>
          <Button color="primary" className="w-1/3" size="sm">
            Logout
          </Button>
        </div>
      </div>
      <div id="tweets" className="h-full w-5/12 flex flex-col">
        <Tweet />
        <LastTweets />
      </div>
      <Trends />
    </div>
  );
}

export default Home;
