import React, { useState } from "react";
import "./Header.css";
import {
  FaAlignJustify,
  FaBell,
  FaCaretDown,
  FaFacebook,
  FaFacebookMessenger,
  FaGamepad,
  FaPlus,
  FaSistrix,
  FaStore,
} from "react-icons/fa";
import { ImHome } from "react-icons/im";
import { RiVideoFill } from "react-icons/ri";
import { TiGroup } from "react-icons/ti";
import { HiPlus } from "react-icons/hi";
import { Button, IconButton } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStatevalue } from "./StateProvider";

const Header = () => {
  const [show, setshow] = useState(false);
  const [{ user }, dispatch] = useStatevalue();
  const signout = () => {
    dispatch({
      type: actionTypes.REMOVE_USER,
      user: null,
    });
  };
  return (
    <div className="header">
      <div className="header__first">
        <div className="header__logo">
          <FaFacebook className="facebook" />
        </div>
        <div className="header__input">
          <input placeholder="Search Facebook" className="input" />
          <FaSistrix className="search__icon" id="bar" />
        </div>
        <IconButton id="app">
          <FaAlignJustify />
        </IconButton>
      </div>
      <div className="header__middle">
        <span className="header__middleicon">
          <ImHome className="middle__icon" id="middle" />
        </span>
        <span className="header__middleicon">
          <RiVideoFill className="middle__icon" id="middle" />
          <span className="notify">22</span>
        </span>
        <span className="header__middleicon">
          <FaStore className="middle__icon" id="middle" />
          <span className="notify">2</span>
        </span>
        <span className="header__middleicon">
          <TiGroup className="middle__icon" id="middle" />
          <span className="notify">5</span>
        </span>
        <span className="header__middleicon">
          <FaGamepad className="middle__icon" id="middle" />
          <span className="notify">1</span>
        </span>
      </div>
      <Button id="sign" onClick={signout}>
        SignOut
      </Button>
      <div className="header__last">
        <span className="header__lasticon">
          <HiPlus className="last__icon" id="last" />
        </span>

        <span className="header__lasticon">
          <FaFacebookMessenger
            className="last__icon"
            id="last"
            onClick={() => setshow(true)}
          />
        </span>
        <span className="header__lasticon">
          <FaBell className="last__icon" id="last" />
        </span>
        <span className="header__lasticon">
          <FaCaretDown className="last__icon" id="last" />
        </span>
      </div>
    </div>
  );
};

export default Header;
