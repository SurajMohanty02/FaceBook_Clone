import {
  Avatar,
  IconButton,
  TextareaAutosize,
  TextField,
} from "@material-ui/core";
import { SettingsInputAntenna } from "@material-ui/icons";
import React, { useContext, useEffect, useState } from "react";
import {
  FaCaretDown,
  FaPhotoVideo,
  FaUserFriends,
  FaVideo,
} from "react-icons/fa";
import { GrEmoji } from "react-icons/gr";
import "./CreatePost.css";
import db, { storage } from "./firebase";
import { Dialog, DialogTitle } from "@material-ui/core";
import firebase from "firebase";

import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useStatevalue } from "./StateProvider";

const CreatePost = () => {
  const [input, setinput] = useState("");
  const [image, setImage] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [{ user }, dispatch] = useStatevalue();

  document.title = "Facebook Clone";
  const handelchange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
    setImageURL(URL.createObjectURL(e.target.files[0]));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const postfeed = () => {
    if (imageURL == "") {
      db.collection("feedpost").add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        Name: user.displayName,
        Input: input,
        imageUrl: null,
        user: user.email,
        profile: user.photoURL,
      });
      handleClose();
      setProgress(0);

      setImage(null);
    } else {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.log(error);
          alert(error.message);
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              db.collection("feedpost").add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                Name: user.displayName,
                Input: input,
                imageUrl: url,
                user: user.email,
                profile: user.photoURL,
              });
              handleClose();
              setProgress(0);
              setImageURL("");
              setImage("");
            });
        }
      );
    }
  };

  const handleClose = () => {
    setOpen(false);
    setinput("");
    setImageURL("");
    setImage("");
  };

  const handelsubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <div className="cpost">
        <div className="post__top">
          <div className="avtar__icon">
            <img src={user.photoURL} alt="" />
          </div>
          <div className="input__box">
            <input
              className="text___input"
              type="text"
              placeholder="Whats on your Mind, Suraj?"
              style={{ fontSize: "15px" }}
              onClick={handleClickOpen}
              readOnly
            />
          </div>
        </div>
        <p></p>
        <div className="post__bottom">
          <IconButton className="icons">
            <FaVideo fontSize="x-large" className="live" />
          </IconButton>

          <IconButton className="icons">
            <FaPhotoVideo fontSize="x-large" className="photo" />
          </IconButton>
          <IconButton className="icons">
            <GrEmoji fontSize="x-large" className="emoji" />
          </IconButton>
        </div>
      </div>

      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        onMouseOverCapture="scroll"
      >
        <DialogTitle
          id="customized-dialog-title"
          style={{ fontWeight: "bolder", textAlign: "center" }}
          onClose={handleClose}
        >
          <span className="container">
            <h2 className="title">Create post</h2>

            <AiOutlineCloseCircle
              id="container__close"
              title="close"
              onClick={handleClose}
            />
          </span>
        </DialogTitle>

        <DialogContent dividers>
          <div className="modal__header">
            <div className="modal__logo" title="profile pic">
              <img src={user.photoURL} alt="" />
            </div>
            <div className="nameandicon">
              <h2 title="Name">{user.displayName}</h2>
              <div className="friends" title="Your Friends">
                <FaUserFriends id="friend" />
                <h2>Friends</h2>
                <FaCaretDown id="more" />
              </div>
            </div>
          </div>
          <form className="modal__text" onSubmit={handelsubmit}>
            <TextareaAutosize
              style={{
                border: "none",
                outline: "none",
                fontSize: "20px",
                resize: "none",
              }}
              className="text__classinput"
              rowsMax="10"
              rowsMin="10"
              cols="40"
              placeholder="What's on your mind, Suraj?"
              onChange={(e) => {
                setinput(e.target.value);
              }}
              value={input}
            />
            {progress ? <progress value={progress} max="100" /> : ""}
            {imageURL ? (
              <div className="preview">
                <img src={imageURL} alt="" />
              </div>
            ) : (
              ""
            )}

            <div className="modal__icon">
              <img
                src="https://www.facebook.com/images/composer/SATP_Aa_square-2x.png"
                alt=""
                style={{ fontSize: "10px" }}
              />
              <GrEmoji id="goemoji" fontSize="xx-large" />
            </div>
            <div className="pic">
              <input
                type="file"
                accept="image/*"
                id="file"
                hidden
                onChange={handelchange}
              />
              <IconButton className="icons">
                <label htmlFor="file" className="icons">
                  <FaPhotoVideo fontSize="x-large" className="photo" />
                </label>
              </IconButton>
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={postfeed} color="primary">
            Post
          </Button>
        </DialogActions>
      </Dialog>
    </section>
  );
};

export default CreatePost;
