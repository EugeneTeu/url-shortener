import React, { FC, useState, useEffect } from "react";
import "./App.css";
import { Divider, Card, Tabs, Input } from "antd";
import { CodepenCircleFilled } from "@ant-design/icons";
import logo from "./govtech_transparent.jpg";
import { UrlForm } from "./components";
const { TabPane } = Tabs;

const App: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <br />
        Govtech URL shortener<br></br>
        Eugene Teu Chu Wei
        <br></br>
      </header>

      <div className="background">
        <h1>Information</h1>
        <Divider />
        <br />

        <UrlForm />
      </div>
    </div>
  );
};

export default App;
