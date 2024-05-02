import { Button } from "@nextui-org/button";
import { useState } from "react";

function Tweet() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div
      id="addTweet"
      className="h-2/6 border-b border-[#2f3943] p-4 text-base"
    >
      <h1 className="font-bold mb-8">Home</h1>

      <div className="w-5/6 m-auto">
        <textarea
          className="resize"
          placeholder="What's up ?"
          onChange={handleChange}
          maxLength={280}
          className="bg-inherit text-[#6a7783] border-b border-[#6a7783] w-full max-h-10"
        ></textarea>
        <div className="flex items-center justify-end">
          <p className="text-xs mr-4">{text.length}/280</p>
          <Button color="primary" className="w-1/5" size="sm">
            Tweet
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
