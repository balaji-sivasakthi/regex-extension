import { useEffect, useState } from "react";
import EventCard from "@src/components/EventCard";
import Tabs from "@src/components/Tabs";
import Tab from "@src/components/Tab";
import TabPanel from "@src/components/TabPanel";
import Annoucement from "@src/components/AnnoucementCard";
import Footer from "@src/components/Footer";
import { db } from "@src/firebase/config";
import { collection, getDocs } from "firebase/firestore"; 
import Loader from "@src/components/Loader";
const Popup = () => {
  const [isSelect, setisSelect] = useState(true);
  const [events, setevents] = useState([]);
  const [announcements, setannouncements] = useState([]);
  const [isLoading,setisloading] = useState(true);
  useEffect(()=>{
   const fetch = async () => {
      let events = [];
      let announcements = [];
      const eventSnap = await getDocs(collection(db,'events'));
      const annoucementSnap = await getDocs(collection(db,'announcements'));
      annoucementSnap.forEach(data=>{
        announcements.push({id:data.id,...data.data()});
      })
      eventSnap.forEach(data=>{
        events.push({id:data.id,...data.data()});
      })
      setevents(events);
      setannouncements(announcements);
      setisloading(false);
   }
  setTimeout(fetch,3000)
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
        {isLoading?(<Loader/>):events?.map((event) => (
          <EventCard
            title={event.title}
            description={event.description}
            image={event.image}
            link={event.link}
          />
        ))}
      </TabPanel>
      <TabPanel active={isSelect}>
      { isLoading?(<Loader/>):announcements?.map((event) => (
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
