import { Button } from "@nextui-org/button";
import { Textarea } from "@nextui-org/react";

function Tweet() {
  return (
    <div
      id="addTweet"
      className="h-2/6 border-b border-[#2f3943] text-base p-4"
    >
      <h1 className="font-bold">Home</h1>

      <textarea className="resize" placeholder="What's up ?" className="bg-inherit"></textarea>
    </div>
  );
}

export default Tweet;
