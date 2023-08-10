
import * as firebase  from "firebase";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD0lWG52POl75dsGRGkMS-AwR3qU3ewyAQ",
  authDomain: "firstproject-fe681.firebaseapp.com",
  projectId: "firstproject-fe681",
  storageBucket: "firstproject-fe681.appspot.com",
  messagingSenderId: "888154536111",
  appId: "1:888154536111:web:10be5c21be743484aafc5a",
  measurementId: "G-3FJGW0W6EW"
};


let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };