import React from "react";
import "./Comment.css";
import { useStatevalue } from "./StateProvider";
const Comment = ({ coment }) => {
  const [{ user }, dispatch] = useStatevalue();

  return (
    <div className="comment">
      {coment.map((info) => (
        <section>
          {info.comment ? (
            <div className="comment__container">
              <div className="comment__userimage">
                <img src={user.photoURL} alt="" />
              </div>

              <div className="comment__layout">
                <h2>Suraj Mohanty</h2>
                <span className="comment__input">{info.comment}</span>
              </div>
            </div>
          ) : (
            ""
          )}
        </section>
      ))}
    </div>
  );
};

export default Comment;
