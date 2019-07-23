
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navigation, Drawer, Layout, Content, Header } from "react-mdl";

function App() {
  return (
    <div style={{ height: "300px", position: "relative" }}>
      <Layout
        style={{
          background:
            "url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover"
        }}
      >
        <Header transparent title="Design your CV" style={{ color: "white" }}>
          <Navigation>
            <a href="#">Upload CV</a>
            <a href="#">Preview the uploaded CV's</a>
            <a href="#">About Us</a>
          </Navigation>
        </Header>
        <Drawer title="Design your CV">
          <Navigation>
            <a href="#">Upload CV</a>
            <a href="#">Preview the uploaded CV's</a>
            <a href="#">About Us</a>
          </Navigation>
        </Drawer>
        <Content />
      </Layout>
    </div>
  );
}

export default App;