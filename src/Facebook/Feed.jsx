import React, { useEffect, useRef, useState } from "react";
import "./Feed.css";
import { BiComment, BiDotsHorizontalRounded, BiLike } from "react-icons/bi";
import { IconButton } from "@material-ui/core";
import { FaShare } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
import db from "./firebase";
import Comment from "./Comment";
import actionTypes from "./reducer";
import { useStatevalue } from "./StateProvider";

const Feed = () => {
  const [comment, setcomment] = useState([]);
  const [like, setlike] = useState(false);
  const [data, setdata] = useState([]);
  const [likecount, setlikecount] = useState(0);
  const [show, setshow] = useState(false);
  const [{}, dispatch] = useStatevalue();
  const [postcomment, setpostcomment] = useState([]);
  const [postid, setpostid] = useState("");

  useEffect(() => {
    db.collection("feedpost")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setdata(
          snapshot.docs.map((info) => ({
            id: info.id,
            data: info.data(),
          }))
        );
      });
  });
  const showlike = () => {
    setlike(true);

    if (like) {
      setlike(false);
    }
  };

  const handelcomment = (e) => {
    e.preventDefault();

    setcomment("");
  };
  const send = (id) => {
    setpostid(id);

    if (comment != "") {
      db.collection("feedpost").doc(id).collection("Comments").add({
        comment: comment,
      });
      db.collection("feedpost")
        .doc(id)
        .collection("Comments")
        .onSnapshot((snapshot) => {
          setpostcomment(snapshot.docs.map((doc) => doc.data()));
        });
    }
  };
  useEffect(() => {});
  const showhandel = () => {
    if (show) {
      setshow(false);
    }
    setshow(true);
  };
  const deletePost = (id) => {
    db.collection("feedpost")
      .doc(id)
      .delete()
      .then(function () {
        setshow(false);
        alert("Document successfully deleted!");
      })
      .catch(function (error) {
        setshow(false);
        console.error("Error removing document: ", error);
      });
  };
  return (
    <section>
      {data.map((info) => (
        <div className="feed" key={info.id}>
          <div className={`delete-${show}`}>
            <div className="delete__post">
              <h2
                className="delete__this"
                key={info.id}
                onClick={() => deletePost(info.id)}
              >
                Delete
              </h2>
              <h2 className="delete__this" onClick={() => setshow(false)}>
                Cancel
              </h2>
            </div>
          </div>
          <div className="feed__header">
            <div className="content">
              <div className="feed__headerimage">
                <img src={info.data.profile} alt="" />
              </div>

              <div className="feed__headername">
                <span className="header__name">{info.data.Name}</span>
                <h2>
                  {info.data.timestamp
                    ? new Date(
                        info.data.timestamp.toDate()
                      ).toLocaleTimeString()
                    : ""}
                </h2>
              </div>
            </div>
            <IconButton id="icon__btn">
              <BiDotsHorizontalRounded
                className="more__icon"
                onClick={showhandel}
              />
            </IconButton>
          </div>

          <div
            className={info.data.imageUrl ? "feed__text" : "feed__altertext"}
          >
            {info.data.Input}
          </div>
          {info.data.imageUrl ? (
            <div className="feed__image">
              <img src={info.data.imageUrl} alt="" />
            </div>
          ) : (
            ""
          )}

          <h1 className="like__counter"></h1>
          <p className="feed__line"></p>
          <div className="feed__bottom">
            <div
              className={`feed__like like${like}`}
              onClick={() => showlike()}
            >
              <BiLike id="like" />
              <h2>Like</h2>
            </div>
            <div className="feed__comment">
              <BiComment id="comment" />
              <h2>Comment</h2>
            </div>
            <div className="feed__share">
              <RiShareForwardLine id="share" />
              <h2>share</h2>
            </div>
          </div>
          <p className="feed__line"></p>
          <div className="comment__text">
            <Comment coment={postcomment} />
          </div>
          <div className="footer">
            <div className="footer__header">
              <div className="footer__image">
                <img src={info.data.profile} alt="" />
              </div>

              <div className="footer__wrap">
                <form
                  className="footer__input"
                  onSubmit={handelcomment}
                  onClick={() => send(info.id)}
                >
                  <input
                    type="text"
                    placeholder="Write a comment..."
                    autoComplete="off"
                    onChange={(e) => {
                      setcomment(e.target.value);
                    }}
                    value={comment}
                  />

                  <button type="submit" style={{ display: "none" }}>
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Feed;
