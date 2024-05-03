import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchOn } from "../reducers/searchHashtags";

function Trends({ getTweet }) {
  const dispatch = useDispatch();
  const [hashtags, setHashtags] = useState([]);

  // Chargement de tous les hashtags, à actualiser dès qu'un nouveau tweet est envoyé /!\

  function fetchHashtag() {
    fetch("http://localhost:3000/hashtags")
      .then((response) => response.json())
      .then((data) => {
        setHashtags(data.hashtags);
      });
  }

  useEffect(() => {
    fetchHashtag();
  }, [getTweet]);

  // Récupération des tweets liés à un certain hashtag
  function fetchTweetFromHashtag(hashtag) {
    dispatch(searchOn(hashtag));
  }

  return (
    <div
      id="trends"
      className="h-screen custom-scrollbar overflow-auto w-4/12 border-l border-[#2f3943]  text-base p-4"
    >
      <h1 className="font-bold mb-4">Trends</h1>

      {hashtags && (
        <div className="bg-[#1d2732] rounded-md text-sm flex flex-col">
          {hashtags.map((item, index) => (
            <div
              key={index}
              className={`p-3 ${index === 0 ? "rounded-t-md" : ""} ${
                index === hashtags.length - 1 ? "rounded-b-md" : ""
              } cursor-pointer hover:bg-[#283444]`}
              onClick={() => fetchTweetFromHashtag(item.hashtag)}
            >
              <p className="font-bold mb-2 ">{item.hashtag}</p>
              <p className="text-xs text-[#6a7783] ">
                {item.occurrence} tweets
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Trends;
