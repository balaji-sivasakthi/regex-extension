import React, { useState } from "react";
import logo from "@assets/img/logo.svg";
import EventCard from "@src/components/EventCard";
import Tabs from "@src/components/Tabs";
import Tab from "@src/components/Tab";
import TabPanel from "@src/components/TabPanel";
import thumbnail from './../../assets/img/thumbnail.png'
import Annoucement from "@src/components/AnnoucementCard";
import Footer from "@src/components/Footer";
const Popup = () => {
  const [isSelect, setisSelect] = useState(true);
  const data = {
    events: [
      {
        id: "1223ad",
        title: "Event title",
        description: "Description of the above mentioned event goes here and it should be in 2 line",
        image: thumbnail,
        link: "",
      },
      {
        id: "1223ad",
        title: "Event title",
        description: "Description of the above mentioned event goes here and it should be in 2 line",
        image: thumbnail,
        link: "",
      },
      {
        id: "1223ad",
        title: "Event title",
        description: "Description of the above mentioned event goes here and it should be in 2 line",
        image: thumbnail,
        link: "",
      },
      {
        id: "1223ad",
        title: "Event title",
        description: "Description of the above mentioned event goes here and it should be in 2 line",
        image: thumbnail,
        link: "",
      },
      {
        id: "1223ad",
        title: "Event title",
        description: "Description of the above mentioned event goes here and it should be in 2 line",
        image: thumbnail,
        link: "",
      },
      {
        id: "1223ad",
        title: "Event title",
        description: "Description of the above mentioned event goes here and it should be in 2 line",
        image: thumbnail,
        link: "",
      },
      {
        id: "1223ad",
        title: "Event title",
        description: "Description of the above mentioned event goes here and it should be in 2 line",
        image: thumbnail,
        link: "",
      },
    ],
    annoucements: [],
  };
  return (
    <div className="regex_container">
      <Tabs>
        <Tab setisSelect={setisSelect} active={!isSelect}>
          Event 📅
        </Tab>
        <Tab setisSelect={setisSelect} active={isSelect}>
          Announcements 📢
        </Tab>
      </Tabs>
      <TabPanel active={isSelect}>
        {data?.events.map((event) => (
          <EventCard
            title={event.title}
            description={event.description}
            image={event.image}
            link={event.link}
          />
        ))}
      </TabPanel>
      <TabPanel active={!isSelect}>
      {data?.events.map((event) => (
          <Annoucement
            title={event.title}
            description={event.description}           
          />
        ))}
      </TabPanel>
      <Footer/>
    </div>
  );
};

export default Popup;
