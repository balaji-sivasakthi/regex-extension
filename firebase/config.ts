import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_APIKEY,
  projectId:process.env.REACT_APP_APIKEY,
  storageBucket: process.env.REACT_APP_APIKEY,
  messagingSenderId:process.env.REACT_APP_APIKEY,
  appId: process.env.REACT_APP_APIKEY,
  measurementId: process.env.REACT_APP_APIKEY
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const messaging = getMessaging(app);
export {messaging}