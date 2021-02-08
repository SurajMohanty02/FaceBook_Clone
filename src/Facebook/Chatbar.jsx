import React, { useEffect, useState } from "react";
import "./Chatbar.css";
import Chatbox from "./Chatbox";

const Chatbar = ({ accessstate }) => {
  const [show, setshow] = useState(false);
  const [current, setcurrent] = React.useState({});
  const access = (data) => {
    setshow(true);
    setcurrent(data);
  };

  const [state, setstate] = useState([
    {
      id: 1,
      image:
        "https://firebasestorage.googleapis.com/v0/b/fbclone-cc2f1.appspot.com/o/images%2FScreenshot%20(1).png?alt=media&token=95a65eb0-0699-4acc-a39f-4001e365d179",
      name: "Subhrajit Biswal",
    },
    {
      id: 2,
      image:
        "https://scontent.fbbi1-1.fna.fbcdn.net/v/t1.0-9/95838896_1375066802687055_2877215097149718528_o.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=1-RzISG2CAMAX_qLF4h&_nc_ht=scontent.fbbi1-1.fna&oh=af47cf60a92dff4011172fb93bc87f82&oe=603AAE82",
      name: "Smrutiranjan Das",
    },
    {
      id: 3,
      image:
        "https://lh3.googleusercontent.com/7cSPE3luVsMKRrpuWZe_h6Eg0x1sHkKHH6Pj5vn3V3Y41fxjwoBjnAIAYn2_vgMDRy8",
      name: "Srikrusna Ranjan Bhutia",
    },
    {
      id: 4,
      image:
        "https://scontent.fbbi1-1.fna.fbcdn.net/v/t1.0-9/128584652_2459883770980642_886909064278581354_o.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=Al_TYyoGh20AX-IWRpa&_nc_ht=scontent.fbbi1-1.fna&oh=9ddfcdd620b864963cec1a7c58cce769&oe=6038AE16",
      name: "Motilal Pradhan",
    },
    {
      id: 5,
      image:
        "https://scontent.fbbi1-2.fna.fbcdn.net/v/t1.0-9/40006386_847797465427717_483347386039533568_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=vb5WII0zny4AX-d7z5Y&_nc_ht=scontent.fbbi1-2.fna&oh=67eab3d435f2e23400abe111190286a8&oe=6038A403",
      name: "Sipun Mishra",
    },
    {
      id: 6,
      image:
        "https://firebasestorage.googleapis.com/v0/b/fbclone-cc2f1.appspot.com/o/images%2FScreenshot%20(1).png?alt=media&token=95a65eb0-0699-4acc-a39f-4001e365d179",
      name: "Subhrajit Biswal",
    },
    {
      id: 7,
      image:
        "https://scontent.fbbi1-1.fna.fbcdn.net/v/t1.0-9/95838896_1375066802687055_2877215097149718528_o.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=1-RzISG2CAMAX_qLF4h&_nc_ht=scontent.fbbi1-1.fna&oh=af47cf60a92dff4011172fb93bc87f82&oe=603AAE82",
      name: "Smrutiranjan Das",
    },
    {
      id: 8,
      image:
        "https://lh3.googleusercontent.com/7cSPE3luVsMKRrpuWZe_h6Eg0x1sHkKHH6Pj5vn3V3Y41fxjwoBjnAIAYn2_vgMDRy8",
      name: "Srikrusna Ranjan Bhutia",
    },
    {
      id: 9,
      image:
        "https://scontent.fbbi1-1.fna.fbcdn.net/v/t1.0-9/128584652_2459883770980642_886909064278581354_o.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=Al_TYyoGh20AX-IWRpa&_nc_ht=scontent.fbbi1-1.fna&oh=9ddfcdd620b864963cec1a7c58cce769&oe=6038AE16",
      name: "Motilal Pradhan",
    },
    {
      id: 10,
      image:
        "https://scontent.fbbi1-2.fna.fbcdn.net/v/t1.0-9/40006386_847797465427717_483347386039533568_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=vb5WII0zny4AX-d7z5Y&_nc_ht=scontent.fbbi1-2.fna&oh=67eab3d435f2e23400abe111190286a8&oe=6038A403",
      name: "Sipun Mishra",
    },
    {
      id: 11,
      image:
        "https://firebasestorage.googleapis.com/v0/b/fbclone-cc2f1.appspot.com/o/images%2FScreenshot%20(1).png?alt=media&token=95a65eb0-0699-4acc-a39f-4001e365d179",
      name: "Subhrajit Biswal",
    },
    {
      id: 12,
      image:
        "https://scontent.fbbi1-1.fna.fbcdn.net/v/t1.0-9/95838896_1375066802687055_2877215097149718528_o.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=1-RzISG2CAMAX_qLF4h&_nc_ht=scontent.fbbi1-1.fna&oh=af47cf60a92dff4011172fb93bc87f82&oe=603AAE82",
      name: "Smrutiranjan Das",
    },
    {
      id: 13,
      image:
        "https://lh3.googleusercontent.com/7cSPE3luVsMKRrpuWZe_h6Eg0x1sHkKHH6Pj5vn3V3Y41fxjwoBjnAIAYn2_vgMDRy8",
      name: "Srikrusna Ranjan Bhutia",
    },
    {
      id: 14,
      image:
        "https://scontent.fbbi1-1.fna.fbcdn.net/v/t1.0-9/128584652_2459883770980642_886909064278581354_o.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=Al_TYyoGh20AX-IWRpa&_nc_ht=scontent.fbbi1-1.fna&oh=9ddfcdd620b864963cec1a7c58cce769&oe=6038AE16",
      name: "Motilal Pradhan",
    },
    {
      id: 15,
      image:
        "https://scontent.fbbi1-2.fna.fbcdn.net/v/t1.0-9/40006386_847797465427717_483347386039533568_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=vb5WII0zny4AX-d7z5Y&_nc_ht=scontent.fbbi1-2.fna&oh=67eab3d435f2e23400abe111190286a8&oe=6038A403",
      name: "Sipun Mishra",
    },
  ]);
  return (
    <div className="chatbar">
      <Chatbox
        oldstate={show}
        closechat={() => setshow(false)}
        state={current}
      />
      {state.map((data) => (
        <div className="chatbar__content" onClick={() => access(data)}>
          <span className="green"></span>
          <div className="chatbar__image">
            <img src={data.image} alt="" />
          </div>

          <h2>{data.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Chatbar;
