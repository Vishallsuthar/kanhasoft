import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "../src/Components/Common/Header"
import Footer from "../src/Components/Common/Footer"
import RouterMain from "../src/Components/Common/Router"

import {Container} from 'react-bootstrap'
function App() {
  return (
    <>
    <Router>
      <Header/>
        <div className="content-box">
            <Container fluid className="p-0">
                <RouterMain/>
            </Container>
            <Footer/>
        </div>
      </Router>
    </>
  );
}

export default App;
