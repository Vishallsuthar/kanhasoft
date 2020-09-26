import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "../src/Components/Common/Header"
import RouterMain from "../src/Components/Common/Router"

import {Container} from 'react-bootstrap'
function App() {
  return (
    <>
    <Router>
      <Header/>
        <div className="content-box">
            <Container fluid>
                <RouterMain/>
            </Container>
        </div>
      </Router>
    </>
  );
}

export default App;
