import React, { useState } from "react";
import "./Sidebar.css";
const Sidebar = () => {
  const [state, setstate] = useState([
    {
      id: 1,
      image:
        "https://scontent.fbbi1-1.fna.fbcdn.net/v/t1.0-9/17800348_1320181458058388_2856377484972672249_n.jpg?_nc_cat=100&ccb=2&_nc_sid=825194&_nc_ohc=Xa6xG2TZc9AAX9kqLMQ&_nc_oc=AQnyW0AlQBw1bTA5dF7C3WJlQfg__MZqWGmYAXhWEh5glbs2XDQviOwQx0pTOSv5-6Q&_nc_ht=scontent.fbbi1-1.fna&oh=2f6c3112145f2928ad96661e4f56aa8b&oe=6039B581",
      name: "Front End Developement",
    },
    {
      id: 2,
      image:
        "https://scontent.fbbi1-2.fna.fbcdn.net/v/t1.0-9/72580117_2449937788595820_5737933847685758976_o.png?_nc_cat=102&ccb=2&_nc_sid=825194&_nc_ohc=Q41RFKZVpisAX9jiYCU&_nc_ht=scontent.fbbi1-2.fna&oh=45bcf7d0b4cd00685b37bf90eec215b4&oe=60387277",
      name: "React.js Developer",
    },
    {
      id: 3,
      image:
        "https://scontent.fbbi1-2.fna.fbcdn.net/v/t31.0-8/19488654_1559641290733944_6026670271214651930_o.jpg?_nc_cat=101&ccb=2&_nc_sid=825194&_nc_ohc=ldS1Sdm0XfYAX_T7NBP&_nc_ht=scontent.fbbi1-2.fna&oh=4c89910010c9c48111893b6cd95f9774&oe=603A29B1",
      name: "React Native Developer Community",
    },
    {
      id: 4,
      image:
        "https://scontent.fbbi1-1.fna.fbcdn.net/v/t1.0-9/16996257_10211240675507122_1573384716361964321_n.jpg?_nc_cat=111&ccb=2&_nc_sid=825194&_nc_ohc=jvqFyLUqX4oAX8bdIH2&_nc_ht=scontent.fbbi1-1.fna&oh=e0ab25ae49882984a4c9d61b866ad2d5&oe=60398B19",
      name: "ReactJS Expert Community",
    },
    {
      id: 5,
      image:
        "https://scontent.fbbi1-2.fna.fbcdn.net/v/t1.0-9/95902866_10158379814184402_8502949383858290688_n.jpg?_nc_cat=105&ccb=2&_nc_sid=825194&_nc_ohc=YFdwYmx_62wAX_ZPeQb&_nc_oc=AQl4BWLs-2yMOXVnhtKgvmWdeNAyr0UXLYlPAQnaosmUvDiJntw0i4dIlnpSxuLch4A&_nc_ht=scontent.fbbi1-2.fna&oh=146eacd852b19e99b37bc9e34cd4297c&oe=6037D82F",
      name: "JavaScript, React, and Node.js",
    },
    {
      id: 6,
      image:
        "https://scontent.fbbi1-1.fna.fbcdn.net/v/t1.0-9/17800348_1320181458058388_2856377484972672249_n.jpg?_nc_cat=100&ccb=2&_nc_sid=825194&_nc_ohc=Xa6xG2TZc9AAX9kqLMQ&_nc_oc=AQnyW0AlQBw1bTA5dF7C3WJlQfg__MZqWGmYAXhWEh5glbs2XDQviOwQx0pTOSv5-6Q&_nc_ht=scontent.fbbi1-1.fna&oh=2f6c3112145f2928ad96661e4f56aa8b&oe=6039B581",
      name: "Front End Developement",
    },
    {
      id: 7,
      image:
        "https://scontent.fbbi1-2.fna.fbcdn.net/v/t1.0-9/72580117_2449937788595820_5737933847685758976_o.png?_nc_cat=102&ccb=2&_nc_sid=825194&_nc_ohc=Q41RFKZVpisAX9jiYCU&_nc_ht=scontent.fbbi1-2.fna&oh=45bcf7d0b4cd00685b37bf90eec215b4&oe=60387277",
      name: "React.js Developer",
    },
    {
      id: 8,
      image:
        "https://scontent.fbbi1-2.fna.fbcdn.net/v/t31.0-8/19488654_1559641290733944_6026670271214651930_o.jpg?_nc_cat=101&ccb=2&_nc_sid=825194&_nc_ohc=ldS1Sdm0XfYAX_T7NBP&_nc_ht=scontent.fbbi1-2.fna&oh=4c89910010c9c48111893b6cd95f9774&oe=603A29B1",
      name: "React Native Developer Community",
    },
    {
      id: 9,
      image:
        "https://scontent.fbbi1-1.fna.fbcdn.net/v/t1.0-9/16996257_10211240675507122_1573384716361964321_n.jpg?_nc_cat=111&ccb=2&_nc_sid=825194&_nc_ohc=jvqFyLUqX4oAX8bdIH2&_nc_ht=scontent.fbbi1-1.fna&oh=e0ab25ae49882984a4c9d61b866ad2d5&oe=60398B19",
      name: "ReactJS Expert Community",
    },
    {
      id: 10,
      image:
        "https://scontent.fbbi1-2.fna.fbcdn.net/v/t1.0-9/95902866_10158379814184402_8502949383858290688_n.jpg?_nc_cat=105&ccb=2&_nc_sid=825194&_nc_ohc=YFdwYmx_62wAX_ZPeQb&_nc_oc=AQl4BWLs-2yMOXVnhtKgvmWdeNAyr0UXLYlPAQnaosmUvDiJntw0i4dIlnpSxuLch4A&_nc_ht=scontent.fbbi1-2.fna&oh=146eacd852b19e99b37bc9e34cd4297c&oe=6037D82F",
      name: "JavaScript, React, and Node.js",
    },

    {
      id: 11,
      image:
        "https://scontent.fbbi1-1.fna.fbcdn.net/v/t1.0-9/17800348_1320181458058388_2856377484972672249_n.jpg?_nc_cat=100&ccb=2&_nc_sid=825194&_nc_ohc=Xa6xG2TZc9AAX9kqLMQ&_nc_oc=AQnyW0AlQBw1bTA5dF7C3WJlQfg__MZqWGmYAXhWEh5glbs2XDQviOwQx0pTOSv5-6Q&_nc_ht=scontent.fbbi1-1.fna&oh=2f6c3112145f2928ad96661e4f56aa8b&oe=6039B581",
      name: "Front End Developement",
    },
    {
      id: 12,
      image:
        "https://scontent.fbbi1-2.fna.fbcdn.net/v/t1.0-9/72580117_2449937788595820_5737933847685758976_o.png?_nc_cat=102&ccb=2&_nc_sid=825194&_nc_ohc=Q41RFKZVpisAX9jiYCU&_nc_ht=scontent.fbbi1-2.fna&oh=45bcf7d0b4cd00685b37bf90eec215b4&oe=60387277",
      name: "React.js Developer",
    },
    {
      id: 13,
      image:
        "https://scontent.fbbi1-2.fna.fbcdn.net/v/t31.0-8/19488654_1559641290733944_6026670271214651930_o.jpg?_nc_cat=101&ccb=2&_nc_sid=825194&_nc_ohc=ldS1Sdm0XfYAX_T7NBP&_nc_ht=scontent.fbbi1-2.fna&oh=4c89910010c9c48111893b6cd95f9774&oe=603A29B1",
      name: "React Native Developer Community",
    },
    {
      id: 14,
      image:
        "https://scontent.fbbi1-1.fna.fbcdn.net/v/t1.0-9/16996257_10211240675507122_1573384716361964321_n.jpg?_nc_cat=111&ccb=2&_nc_sid=825194&_nc_ohc=jvqFyLUqX4oAX8bdIH2&_nc_ht=scontent.fbbi1-1.fna&oh=e0ab25ae49882984a4c9d61b866ad2d5&oe=60398B19",
      name: "ReactJS Expert Community",
    },
    {
      id: 15,
      image:
        "https://scontent.fbbi1-2.fna.fbcdn.net/v/t1.0-9/95902866_10158379814184402_8502949383858290688_n.jpg?_nc_cat=105&ccb=2&_nc_sid=825194&_nc_ohc=YFdwYmx_62wAX_ZPeQb&_nc_oc=AQl4BWLs-2yMOXVnhtKgvmWdeNAyr0UXLYlPAQnaosmUvDiJntw0i4dIlnpSxuLch4A&_nc_ht=scontent.fbbi1-2.fna&oh=146eacd852b19e99b37bc9e34cd4297c&oe=6037D82F",
      name: "JavaScript, React, and Node.js",
    },
  ]);
  return (
    <section>
      <div className="sidebar">
        {state.map((data) => (
          <div className="sidebar__list" key={data.id}>
            <div className="sidebar__img">
              <img src={data.image} alt="" />
            </div>
            <div className="sidebar__name">{data.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sidebar;
