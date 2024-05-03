import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrashCan } from "@fortawesome/free-solid-svg-icons";
const dayjs = require("dayjs");
var AdvancedFormat = require("dayjs/plugin/advancedFormat");
var relativeTime = require("dayjs/plugin/relativeTime");
// import "dayjs/locale/fr";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function LastTweets({ tweet }) {
  const [likers, setLikers] = useState([]);
  const user = useSelector((state) => state.user.value);
  console.log(tweet);

  dayjs.locale("fr");
  dayjs.extend(AdvancedFormat);
  dayjs.extend(relativeTime);

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

  function handleDelete() {
    const tweetId = tweet._id;
    fetch(`http://localhost:3000/tweets/${tweetId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log("Tweet supprimé, tchao !")
    })

  }

  function likeTweet() {
    const tweetId = tweet._id;
    fetch(`http://localhost:3000/tweets/like/${tweetId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${user.token}`,
      },
      body: JSON.stringify({}),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.result) {
          setLikers(data.likers);
        }
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    // Récupérer le nombre de likes à chaque initialisation
    likeTweet();
  }, [])

  let heartIconStyle = likers.includes(user.id)
    ? { color: "#e74c3c" }
    : {};

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
            onClick={() => likeTweet()}
          />
          <p className="mr-2">{likers.length}</p>

          {tweet.user._id === user.id && <FontAwesomeIcon
            icon={faTrashCan}
            className="w-3 h-3 cursor-pointer"
            onClick={() => handleDelete()}
          />}
        </div>
      </div>
    </div>
  );
}

export default LastTweets;
