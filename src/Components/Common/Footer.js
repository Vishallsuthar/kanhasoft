import React, { Component } from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Logo from '../../images/logo.svg'
import profileIcon from '../../images/profileIcon.jpg'
import { Scrollbars } from 'react-custom-scrollbars';

import {Row,Col,ListGroup,Image , Dropdown,Button,FormControl,Form, Container} from 'react-bootstrap'
  class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
           this.handleClick = this.handleClick.bind(this); 
        }
    handleClick() {this.setState(state => ({isToggleOn: !state.isToggleOn}));}
    render() {
        return (
        <>
           <footer className="bg-white py-4">
               <Container fluid>
                    <Row>
                        <Col lg="4" sm={4} className="mb-3"><Link to="">Analytics</Link></Col>
                        <Col lg="4" sm={4} className="mb-3"><Link to="">Wizards</Link></Col>
                        <Col lg="4" sm={4} className="mb-3"><Link to="">CRM Manager</Link></Col>
                    </Row>
                    <p className=" mb-2">Carolina React Admin Dashboard with Material-UI PRO</p> 
                    <p>@2020-Crafted with by  <a href="UiFrot.com" className="text-dark" target="_blank">UiFrot.com</a></p>



                </Container>
           </footer>
           



        </>
        )
    }
}
export default Footer
