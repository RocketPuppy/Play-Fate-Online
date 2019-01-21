import * as firebase from "firebase/app";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./app";

const config = {
  apiKey: "AIzaSyA3fY1juEaqbI7dUY9HrSrf5sgiHpLQY1g",
  authDomain: "play-fate-online.firebaseapp.com",
  databaseURL: "https://play-fate-online.firebaseio.com",
  messagingSenderId: "594449364782",
  projectId: "play-fate-online",
  storageBucket: "play-fate-online.appspot.com"
};
firebase.initializeApp(config);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("inject-here")
);
