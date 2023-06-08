import React, { useEffect, useState } from "react";
import logo from "@assets/img/logo.svg";
import EventCard from "@src/components/EventCard";
import Tabs from "@src/components/Tabs";
import Tab from "@src/components/Tab";
import TabPanel from "@src/components/TabPanel";
import thumbnail from './../../assets/img/thumbnail.png'
import Annoucement from "@src/components/AnnoucementCard";
import Footer from "@src/components/Footer";
import { db, msg } from "@src/firebase/config";
import { collection, doc, getDoc, getDocs } from "firebase/firestore"; 
const Popup = () => {
  const [isSelect, setisSelect] = useState(true);
  const [events, setevents] = useState([])
  const [announcements, setannouncements] = useState([])  
  useEffect(()=>{
   const fetch = async () => {
      let events = []
      let announcements = []
      const eventSnap = await getDocs(collection(db,'events'))
      const annoucementSnap = await getDocs(collection(db,'announcements'))
      annoucementSnap.forEach(data=>{
        announcements.push({id:data.id,...data.data()})
      })
      eventSnap.forEach(data=>{
        events.push({id:data.id,...data.data()})
      })
      setevents(events)
      setannouncements(announcements)
   }
   fetch()
  },[])
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
      <TabPanel active={!isSelect}>
        {events?.map((event) => (
          <EventCard
            title={event.title}
            description={event.description}
            image={event.image}
            link={event.link}
          />
        ))}
      </TabPanel>
      <TabPanel active={isSelect}>
      {announcements?.map((event) => (
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
