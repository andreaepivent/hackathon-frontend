import { Button } from "@nextui-org/button";
//import { user } from "@nextui-org/theme";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Tweet({ getTweet }) {
  const [text, setText] = useState("");
  const [newPost, setNewPost] = useState(false);
  const user = useSelector((state) => state.user.value);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handlePost = () => {
    setText("");
    setNewPost();
    const regex = /#\w+/g;
    const hashtag = text.match(regex);
    console.log(hashtag);
    console.log(user.token);

    fetch(`http://localhost:3000/tweets/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({ content: text, hashtag }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Emballé c'est tweeté !");
        getTweet();
        setText("");
      });
  };

  return (
    <div
      id="addTweet"
      className="h-2/6 border-b border-[#2f3943] p-4 text-base"
    >
      <h1 className="font-bold mb-8">Home</h1>

      <div className="w-5/6 m-auto">
        <textarea
          placeholder="What's up ?"
          onChange={handleChange}
          value={text}
          maxLength={280}
          className="bg-inherit text-[#6a7783] border-b border-[#6a7783] w-full max-h-10"
        ></textarea>
        <div className="flex items-center justify-end">
          <p className="text-xs mr-4">{text.length}/280</p>
          <Button
            color="primary"
            className="w-1/5"
            size="sm"
            onClick={() => handlePost()}
          >
            Tweet
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
