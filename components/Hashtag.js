import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchOn } from "../reducers/searchHashtags";

function Hashtag() {
  const dispatch = useDispatch();
  const [hashtag, setHashtag] = useState("");

  // Handle key press event to dispatch action when Enter key is pressed
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      dispatch(searchOn(hashtag));
    }
  };

  return (
    <div
      id="addTweet"
      className="h-1/6 border-b border-[#2f3943] p-4 text-base"
    >
      <h1 className="font-bold mb-4">Hashtag</h1>

      <div className="w-5/6 m-auto">
        <input
          className="bg-[#1d2732] text-[#c2c6ca] w-full max-h-10 rounded-full text-xs p-2"
          onChange={(e) => {
            setHashtag(e.target.value);
          }}
          onKeyPress={handleKeyPress}
          value={hashtag}
        />
      </div>
    </div>
  );
}

export default Hashtag;
