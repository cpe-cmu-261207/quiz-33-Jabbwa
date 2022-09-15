import { useState } from "react";
import Comment from "../components/Comment";
import PostOwner from "../components/PostOwner";
import Reply from "../components/Reply";
import { comments } from "../libs/comments";

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* PostOwner Example*/}
        <PostOwner />
        {/* Comment Example */}
        <div>
          {comments.map((comment) => (
            <Comment
              key={comment.username}
              username={comment.username}
              img={comment.userImagePath}
              commentText={comment.commentText}
              likeNum={comment.likeNum}
            />
          ))}
        </div>
        {/* Reply Example */}
      </div>
    </div>
  );
}
