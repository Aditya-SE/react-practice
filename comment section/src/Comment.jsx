import { useState } from "react";
import CommentForm from "./CommentForm";
import "./Comment.css";

export default function Comment() {
  let [comments, setComments] = useState([
    {
      username: "@sk",
      remarks: "great job",
      rating: 4,
    },
  ]);
  let addNewComment = (comment) => {
    setComments((currComments) => [...currComments, comment]);
  };
  return (
    <>
      <div>
        <h3>All comments</h3>
        {comments.map((comments, idx) => {
          return (
            <div className="comment" key={idx}>
              <span>{comments.remarks}</span>
              &nbsp;
              <span>(rating = {comments.rating})</span>
              <p>-{comments.username}</p>
            </div>
          );
        })}
      </div>

      <CommentForm addNewComment={addNewComment} />
    </>
  );
}
