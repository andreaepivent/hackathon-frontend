import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrashCan } from "@fortawesome/free-solid-svg-icons";
const dayjs = require("dayjs");
var AdvancedFormat = require("dayjs/plugin/advancedFormat");
var relativeTime = require("dayjs/plugin/relativeTime");
// import "dayjs/locale/fr";
import { useState, useEffect } from "react";

function LastTweets({ tweet }) {
  const [like, setLike] = useState(false);
  const [nbLike, setNbLike] = useState(0);

  dayjs.locale("fr");
  dayjs.extend(AdvancedFormat);
  dayjs.extend(relativeTime);

  useEffect(() => {
    setNbLike(tweet.likers.length);
  }, [nbLike, like]);

  function formatContent(content) {
    const words = content.split(/(\s+)/);
    return words.map((word, index) => {
      if (word.startsWith("#") && word.length > 1) {
        return (
          <span
            key={index}
            className="text-blue-500 hover:underline cursor-pointer"
          >
            {word}
          </span>
        );
      } else {
        return word;
      }
    });
  }

  function fetchSignupData() {
    const tweetId = tweet._id;
    setLike(!like);

    fetch(`http://localhost:3000/tweets/like/${tweetId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tweetId: tweetId }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.result) {
          console.log(data.result);
        }
      })
      .catch((err) => console.log(err));
  }

  let heartIconStyle;
  if (like) {
    heartIconStyle = { color: "#e74c3c" };
  }

  return (
    <div id="allTweets" className="h-full border-b border-[#2f3943]">
      <div className="border-b border-[#2f3943] p-4">
        <div className="flex mb-4 items-center">
          <img
            src={`${tweet.user.picture}`}
            className="w-12 mr-2 rounded-full cursor-pointer"
          />
          <p className="text-slate-100 mr-1 cursor-pointer">
            {tweet.user.firstname}{" "}
            <span className="text-gray-400 hover:underline ">
              @{tweet.user.username}
            </span>
          </p>

          <p className="text-gray-500 ml-1">
            <span className="mr-1">.</span>
            <span className="hover:underline cursor-pointer">
              {dayjs().to(dayjs(tweet.time))}
            </span>
          </p>
        </div>
        <div className="mb-4">
          <p>{formatContent(tweet.content)}</p>
        </div>
        <div className="flex items-center text-sm ">
          <FontAwesomeIcon
            icon={faHeart}
            style={heartIconStyle}
            className="w-3 h-3 mr-1 cursor-pointer "
            onClick={fetchSignupData}
          />
          <p>{nbLike}</p>

          <FontAwesomeIcon
            icon={faTrashCan}
            className="w-3 h-3 cursor-pointer "
          />
        </div>
      </div>
    </div>
  );
}

export default LastTweets;
