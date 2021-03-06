import React from "react";
import Header from "./Header";
import Profile from "./Profile";
import Summary from "./Summary";
import Feed from "./Feed";
import Requests from "./Requests";

function App(props){
  return (
    <div>
      <h1>Faceballs</h1>
      <Header/>
      <Profile/>
      <Summary/>
      <Feed/>
      <Requests/>
    </div>
  );
}

export default App;
