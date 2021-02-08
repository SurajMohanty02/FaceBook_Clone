import { IconButton } from "@material-ui/core";
import React, { useRef, useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { BiSticker } from "react-icons/bi";
import { BsFillPlusCircleFill } from "react-icons/bs";
import {
  FaImages,
  FaMinus,
  FaPhoneAlt,
  FaVideo,
  FaWindowClose,
} from "react-icons/fa";
import { HiEmojiHappy } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { RiFileGifFill } from "react-icons/ri";
import Chatbar from "./Chatbar";
import "./Chatbox.css";
const Chatbox = ({ oldstate, closechat, state }) => {
  function truncate(source, size) {
    return source.length > size ? source.slice(0, size - 1) + "…" : source;
  }

  const [show, setshow] = useState(false);

  return (
    <section>
      <div className={`chatbox-${oldstate}`}>
        <div className="chatbox__header">
          <div className="chatbox__image">
            <img src={state.image} alt="" />
          </div>
          <div className="chatbox__nameandstatus">
            <span>{truncate(`${state.name}`, 12)}</span>
            <h2 className="active">Active Now</h2>
          </div>
          <div className="chatbox__icons">
            <IconButton>
              <FaVideo
                className="c__icon"
                fontSize="medium"
                title={`start video call with ${state.name}`}
              />
            </IconButton>
            <IconButton>
              <FaPhoneAlt
                className="c__icon"
                fontSize="medium"
                title={`start voice call with ${state.name}`}
              />
            </IconButton>
            <IconButton>
              <FaMinus
                className="c__icon"
                fontSize="medium"
                title="minimise chat"
              />
            </IconButton>
            <IconButton onClick={closechat}>
              <MdClose
                className="c__icon"
                fontSize="medium"
                title="close chat"
              />
            </IconButton>
          </div>
        </div>
        <div className="chatbox__body">
          <div className="chatbox__bodyimage">
            <img src={state.image} alt="" />
            <h2>{state.name}</h2>
          </div>
          <div className="chatbox__text">
            You're friends on Facebook Works at College students Studied at
            University of Delhi Lives in Delhi, India
          </div>
        </div>

        <div className="chatbox__footer">
          <div className="chatbox__footercontainer">
            <div className="footer__icons">
              <BsFillPlusCircleFill className="sticker" />
              <FaImages className="sticker" />
              <BiSticker className="sticker" />
              <RiFileGifFill className="sticker" />
            </div>
            <div className="chatbox__input">
              <input type="text" placeholder="Aa" />
              <HiEmojiHappy className="input__emoji" />
            </div>
            <AiFillLike className="thumb__icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chatbox;
