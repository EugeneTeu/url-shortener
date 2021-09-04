import React, { FC, useState, useEffect } from "react";
import "./App.css";
import { Divider, Card, Tabs } from "antd";
import { CodepenCircleFilled } from "@ant-design/icons";
import logo from "./govtech_transparent.jpg";
const { TabPane } = Tabs;

const App: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <br />
        <div className="App-logo"></div>
        <br />
        Govtech URL shortener<br></br>
        Eugene Teu Chu Wei
        <br></br>
      </header>

      <div className="background">
        <h1>Information</h1>
        <Divider />
        <Card>
          <p>Three modes of query is available:</p>
          <ul>
            <li>Query by Date</li>
            <li>Query by Trade id</li>
            <li>Query by Client id</li>
          </ul>
        </Card>

        <br />

        <h1>Queries</h1>
        {/* <Tabs defaultActiveKey="1" type="card">
          <TabPane tab="Date" key="1">
            <h2>Query By Date</h2>
            <Divider />
            <div className="api-module">

            </div>
          </TabPane>
          <TabPane tab="Trade ID" key="2">
            <h2>Query By Trade ID</h2>
            <Divider />
            <div className="api-module">

            </div>
          </TabPane>
          <TabPane tab="Client ID" key="3">
            <h2>Query By Client ID</h2>
            <Divider />
            <div className="api-module">
          
            </div>
          </TabPane>
        </Tabs> */}
      </div>
    </div>
  );
};

export default App;
