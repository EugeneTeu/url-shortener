import React, { FC, useState, useEffect } from "react";
import "./App.css";
import { Divider, Card, Tabs, Input } from "antd";
import { CodepenCircleFilled } from "@ant-design/icons";
import { UrlForm } from "./components";
import { ContextProvider } from "./context";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App: FC = () => {
  return (
    <ContextProvider>
      <Router>
        <Switch>
          <Route path="/other">
            <>other</>
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </ContextProvider>
  );
};

const Homepage: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div >
          <CodepenCircleFilled className="App-logo"/>
        </div>
        Govtech URL shortener<br></br>
        Eugene Teu Chu Wei
      </header>
      <div className="background">
        <h1>Information</h1>
        <Divider />
        <UrlForm />
      </div>
    </div>
  );
};

export default App;
