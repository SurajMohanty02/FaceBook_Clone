import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./Stories.css";
const Stories = () => {
  const [state, setstate] = useState([
    {
      id: 1,
      image:
        "https://scontent.fbbi1-2.fna.fbcdn.net/v/t1.0-9/c23.0.480.480a/s851x315/1011895_1377920645760792_1210325738_n.jpg?_nc_cat=102&ccb=2&_nc_sid=da31f3&_nc_ohc=gceIV3KRQL4AX_hQQsO&_nc_ht=scontent.fbbi1-2.fna&tp=28&oh=2abb8b3f751bd522676f9d8732ef17f5&oe=603A01C0",
      profile:
        "https://scontent.fbbi1-2.fna.fbcdn.net/v/t1.0-9/c23.0.480.480a/s851x315/1011895_1377920645760792_1210325738_n.jpg?_nc_cat=102&ccb=2&_nc_sid=da31f3&_nc_ohc=gceIV3KRQL4AX_hQQsO&_nc_ht=scontent.fbbi1-2.fna&tp=28&oh=2abb8b3f751bd522676f9d8732ef17f5&oe=603A01C0",
      name: "Bijay Kumar Mohanty",
    },
    {
      id: 2,
      image:
        "https://i.pinimg.com/originals/cc/a9/1a/cca91ab0df3afc7078bb85f5410b1dc0.jpg",
      profile:
        "https://i1.wp.com/www.tricksbystg.org/wp-content/uploads/2018/02/awesome-girl-dp-1.jpg?resize=800%2C800",
      name: "Sushila Mohanty",
    },

    {
      id: 3,
      image:
        "https://scontent.fbbi1-2.fna.fbcdn.net/v/t1.0-1/p320x320/127121469_468324864144595_3233774493982892397_o.jpg?_nc_cat=101&ccb=2&_nc_sid=7206a8&_nc_ohc=9QIxAG-nDIoAX9i1Fe2&_nc_oc=AQmnyFeTs5lNCz8P4i6Ppg0QUFQUGjAC3f4SXWsnMGgPNOXhlylSscGQmS7eirGTX-I&_nc_ht=scontent.fbbi1-2.fna&tp=6&oh=7c88f738ec2726aabe180b04654b8048&oe=603AB1B5",
      profile:
        "https://scontent.fbbi1-2.fna.fbcdn.net/v/t1.0-1/p320x320/127121469_468324864144595_3233774493982892397_o.jpg?_nc_cat=101&ccb=2&_nc_sid=7206a8&_nc_ohc=9QIxAG-nDIoAX9i1Fe2&_nc_oc=AQmnyFeTs5lNCz8P4i6Ppg0QUFQUGjAC3f4SXWsnMGgPNOXhlylSscGQmS7eirGTX-I&_nc_ht=scontent.fbbi1-2.fna&tp=6&oh=7c88f738ec2726aabe180b04654b8048&oe=603AB1B5",
      name: "Sushil Mohanty",
    },
    {
      id: 4,
      image:
        "https://scontent.fbbi1-1.fna.fbcdn.net/v/t1.0-9/42175739_872285039634318_3986845938458034176_o.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=N6e_RaQ6FgUAX-ff_ab&_nc_ht=scontent.fbbi1-1.fna&oh=270f3236c99583b6599ee313e3e5742d&oe=603AC7CD",
      profile:
        "https://scontent.fbbi1-1.fna.fbcdn.net/v/t1.0-9/42175739_872285039634318_3986845938458034176_o.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=N6e_RaQ6FgUAX-ff_ab&_nc_ht=scontent.fbbi1-1.fna&oh=270f3236c99583b6599ee313e3e5742d&oe=603AC7CD",
      name: "Suraj Mohanty",
    },
  ]);
  return (
    <section className="cont">
      {state.map((data) => (
        <div
          key={data.id}
          style={{
            backgroundImage: `url(${data.image})`,
          }}
          className="story"
        >
          <Avatar src={data.profile} className="story__avtar" />
          <h2>{data.name}</h2>
        </div>
      ))}
    </section>
  );
};

export default Stories;
