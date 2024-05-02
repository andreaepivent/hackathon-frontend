import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrashCan } from "@fortawesome/free-solid-svg-icons";

function LastTweets({ tweet }) {
  console.log(tweet);
  return (
    <div id="allTweets" className="h-full border-b border-[#2f3943]">
      <div className="border-b border-[#2f3943] p-4">
        <div className="flex mb-4 items-center">
          <img
            src={`${tweet.user.picture}`}
            className="w-12 mr-2 rounded-full"
          />
          <p className="font-bold mr-1">{tweet.firstname}</p>
          <p className="text-[#6a7783] mr-1">{tweet.username}</p>
          <p className="text-[#6a7783] mr-1">·</p>
          <p className="text-[#6a7783]">a few seconds ago</p>
        </div>
        <div className="mb-4">
          <p>{tweet.content}</p>
        </div>
        <div className="flex items-center text-sm">
          <FontAwesomeIcon icon={faHeart} className="w-3 h-3 mr-1" />
          <span className="mr-2">{tweet.likers}</span>
          <FontAwesomeIcon icon={faTrashCan} className="w-3 h-3" />
        </div>
      </div>
    </div>
  );
}

export default LastTweets;
