import React, { Component } from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Logo from '../../images/logo.svg'
import profileIcon from '../../images/profileIcon.jpg'
import salesReportChart from '../../images/salesReportChart.png'
import notificationNoMessageIcon from '../../images/notification-no-message-icon.png'
import TimelineThumbnial from '../../images/TimelineThumbnial.png'


import { Scrollbars } from 'react-custom-scrollbars';

import {Navbar,Nav,ListGroup,Image , Dropdown,Button,Modal,Card , Row,Col,Tabs,Tab, FormControl, Container} from 'react-bootstrap'
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
 
const ArrowRight = () => {
    return(
       
        
<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right fa-w-10 font-size-xs opacity-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>



        
    )
}


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true,
            show:false,
            close:false
        };

           this.handleClick = this.handleClick.bind(this);
           this.openModal =  this.openModal.bind(this);
           this.closeModal =  this.closeModal.bind(this);
           
         }
        
         openModal(){
             this.setState({
                 show:true,
             })
         }
         closeModal(){
            this.setState({
                show:false,
            })
        }
        
    handleClick() {    this.setState(state => ({      isToggleOn: !state.isToggleOn    }));  }
    render() {
        return (
            <>
            <header className={this.state.isToggleOn ? "sidebar-open":""}>
            <Navbar bg="light" className="main-header" expand="sm">
                <Navbar.Brand className={this.state.isToggleOn ? "show":""} ><span className="logo-box">
                    <span className="logoIcon">
                        <Image  src={Logo} width="25" height="25" className="img-fluid"/>
                    </span>
                    <span className="show-desktop-inline-flex  hide-mobile-inline-flex">
                    {(this.state.isToggleOn) ? (<><span className="ml-2">Carolina</span></>):(<></>)}
                    </span>
                    <span className="hide-desktop-inline-flex  d-none d-md-inline-flex">
                            <span className="ml-2">Carolina</span>
                    </span>
                    </span>
                <span className="toggleButton hide-mobile-inline-flex">
                    <Button onClick={this.handleClick} className="" >{(this.state.isToggleOn) ? (<><svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M4 18h11c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h8c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h11c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1zm17.3 7.88L17.42 12l2.88-2.88c.39-.39.39-1.02 0-1.41a.9959.9959 0 00-1.41 0L15.3 11.3c-.39.39-.39 1.02 0 1.41l3.59 3.59c.39.39 1.02.39 1.41 0 .38-.39.39-1.03 0-1.42z"></path><path fill="none" d="M0 0h24v24H0V0z"></path></svg></>) : (<><svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"></path></svg></>)}</Button>
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar  className="main-navbar  d-md-flex justify-content-between pl-0 w-100 pr-2" >
                    <Nav className="mr-auto menu-left align-items-center ">
                        <Nav.Item  as="li" className="hide-mobile-inline-flex"  >
                                <Nav.Link href="javaScript:void(0)" onClick={this.openModal}>
                                        <span class="svg-icon svg-white-icon"><svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg></span>
                                </Nav.Link>
                        </Nav.Item>
                    
                        <Dropdown as="li"  className="nav-item hide-mobile-inline-flex MegaMenu">
                            <Dropdown.Toggle as="a" className="nav-link">Mega Menu</Dropdown.Toggle>
                            <Dropdown.Menu className="p-4">
                                <Row>
                                    <Col lg={4}>
                                        <p className="text-primary">Dashboard</p>
                                        <Nav className="border-bottom mb-3 pb-3">
                                            <Nav.Item>
                                                <Link to="" className="nav-link"><span><ArrowRight className="mr-2"/>Analytics </span></Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Link to="" className="nav-link"><span><ArrowRight className="mr-2"/>Report </span></Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Link to="" className="nav-link"><span><ArrowRight className="mr-2"/>Real Estate </span></Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Link to="" className="nav-link"><span><ArrowRight className="mr-2"/>Server Stats  </span>
                                                <span><span className="badge  bg-success text-white">8</span></span></Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Link to="" className="btn btn-outline-primary btn-sm btn-block"> Learn more</Link>
                                    </Col>
                                    
                                    <Col lg={4}>
                                        
                                        <p className="text-primary">Applications</p>
                                        <Nav className="border-bottom mb-3 pb-3">
                                            <Nav.Item>
                                                <Link to="" className="nav-link"><span><ArrowRight className="mr-2"/>Calender </span></Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Link to="" className="nav-link"><span><ArrowRight className="mr-2"/>Chat </span></Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Link to="" className="nav-link"><span><ArrowRight className="mr-2"/>Contacts </span></Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Link to="" className="nav-link"><span><ArrowRight className="mr-2"/>File Manager </span></Link>
                                            </Nav.Item>
                                        </Nav>
                                        
                                        <Link to="" className="btn btn-outline-primary btn-sm btn-block"> Learn more</Link>
                                    </Col>
                                    <Col lg={4}>
                                        
                                        <p className="text-primary">Components</p>
                                        <Nav className="border-bottom mb-3 pb-3">
                                            <Nav.Item>
                                                <Link to="" className="nav-link"><span><ArrowRight className="mr-2"/>Card examples </span></Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Link to="" className="nav-link"><span><ArrowRight className="mr-2"/>Tables </span>
                                                <span><span className="badge  bg-danger-20 text-danger">New</span></span></Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Link to="" className="nav-link"><span><ArrowRight className="mr-2"/>Form wizards </span></Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Link to="" className="nav-link"><span><ArrowRight className="mr-2"/>Pricing tables </span></Link>
                                            </Nav.Item>
                                        </Nav>
                                      
                                        <Link to="" className="btn btn-outline-primary btn-sm btn-block"> Learn more </Link>
                                    </Col>
                                    













                                </Row>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown as="li" className="nav-item hide-mobile-inline-flex dashboard">
                            <Dropdown.Toggle as="a" className="nav-link">Dashboard</Dropdown.Toggle>
                            <Dropdown.Menu  className="dashboard-menu  p-3">
                               <h2 className="h6  text-white text-center font-weight-semi-bold  mb-2">Dashboard</h2>
                               <p className="text-white mb-0"><span className="opacity-60">There are currently</span> <span className="font-weight-bold text-white ">12</span> <span className="opacity-60">dashboard layouts avaible!</span> 
</p>
                            <Row>
                                <Col lg="6">
                                    <Card>
                                        <i className="text-success"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h1 d-block my-2 text-success"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
</i>
                                        <p className="h6 mb-0 font-weight-bold">Projects</p>
                                        <p className="small text-muted mb-0">Dashboard 9</p>
                                    </Card>
                                </Col>
                                <Col lg="6">
                                    <Card>
                                        <i className="text-primary"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h1 d-block my-2 text-danger"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></i>
                                        <p className="h6 mb-0 font-weight-bold">Helpdesk</p>
                                        <p className="small text-muted mb-0">Dashboard 4</p>
                                    </Card>
                                </Col>
                                <Col lg="6">
                                    <Card>
                                        <i className="text-danger"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h1 d-block my-2 text-warning"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg></i>
                                        <p className="h6 mb-0 font-weight-bold">CRM UI</p>
                                        <p className="small text-muted mb-0">Dashboard 6</p>
                                    </Card>
                                </Col>
                                <Col lg="6">
                                    <Card>
                                        <i className="p-3 pb-4"></i>
                                        <p className="h6 mb-0 font-weight-bold">Customers</p>
                                        <p className="small text-muted mb-0">Dashboard 12</p>
                                    </Card>
                                </Col>
                            </Row>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                    <Nav className=" menu-right align-items-center ">
                        <Dropdown as="li"  className="nav-item notification d-lg-flex d-none ">
                            <Dropdown.Toggle as="a" className="nav-link">
                            <span class="svg-icon svg-white-icon">
                                    <span class="badge badge-pill  ">3</span>
                                    <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M12 6.5c-2.49 0-4 2.02-4 4.5v6h8v-6c0-2.48-1.51-4.5-4-4.5z" opacity=".3"></path><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-11c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-2 6H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6zM7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42z"></path></svg>
                                </span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="notification-menu">
                               <Card>
                                   <Card.Header className="border-0">
                                       <div>
                                           <p className="h4 font-weight-bold text-center text-light ">Notification</p>
                                           <p className=" font-weight-bold text-center text-light mb-0 ">You have <span className="text-success">472</span> new Messages
</p>    
                                       </div>
                                   </Card.Header>
                                   <Card.Body className="p-0">
                                        <Tabs className="" defaultActiveKey="report">
                                            <Tab eventKey="timeline" title="Timeline">
                                            <div className="text-center pl-3 pr-3 pt-4">
                                                    <Image src={TimelineThumbnial} className="d-inline " fluid alt=""/>
                                                    
                                                </div>
                                            </Tab>

                                            

                                            <Tab eventKey="task" title="Task">
                                                <div className="text-center p-3">
                                                    <Image src={notificationNoMessageIcon} className="d-inline mb-4" fluid alt=""/>
                                                    <h5 className="font-weight-bold mb-0">Incoming Messages</h5>
                                                    <p className="font-weight-light text-muted pb-0">You have pending actions to take care of.</p>
                                                   
                                                </div>


                                            </Tab>
                                            <Tab eventKey="report" title="Report">
                                                <div className="text-center p-3">
                                                    <h5 className="font-weight-bold mb-0">Total Sales</h5>
                                                    <p className="font-weight-light text-muted">Total performance for selection period</p>
                                                    <Image src={salesReportChart} fluid alt=""/>
                                                </div>
                                            </Tab>
                                        </Tabs>
                                   </Card.Body>
                                   <Card.Footer className="text-center bg-white">
                                       <Button variant="primary" className="text-uppercase">Learn More <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" class=" " style={{width:12+"px"}} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></Button>
                                   </Card.Footer>
                               </Card>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown as="li"  className="nav-item report">
                            <Dropdown.Toggle as="a" className="nav-link">
                            <span class="svg-icon svg-white-icon">
                                    <span class="badge badge-pill">3</span>
                                    <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M5 19h14V5H5v14zm10-6h2v4h-2v-4zm-4-6h2v10h-2V7zm-4 3h2v7H7v-7z" opacity=".3"></path><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"></path></svg>
                                </span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="report-box">
                                <div className="profile-box p-3 d-flex justify-content-center align-items-center border-bottom">
                                    <span className="pr-3">
                                        <Image  src={profileIcon} roundedCircle fluid className="d-inline"  width="45" height="45" alt=""/>
                                    </span>
                                    <div className="">
                                        <p className="h6 font-weight-regular title">Emma Taylor</p>
                                        <p className="h6 font-weight-regular small text-muted border-bottom  pb-2">This is an accountant profile</p>
                                        <p className="h6 font-weight-regular small text-muted ">Status: <span className="font-weight-bold text-danger">Overdue</span></p>
                                    </div>
                                    
                                </div>
                                <div className="p-3 pb-0">
                                    <p className=" font-weight-semi-bold  title">Profile completion</p>
                                    <div className="progress">
                                        <span className="progress-bar bg-success w-50"></span>
                                    </div>
                                    <div className="d-flex justify-content-between  mb-2">
                                        <span className="text-dark small">0%</span>
                                        <span className="text-muted small">100%</span>
                                    </div>
                                    <div className="d-flex justify-content-center border-top pt-3 mt-2">
                                                <Link to="" className="btn btn-sm btn-outline-secondary mr-2">Action</Link>
                                                <Link to="" className="btn btn-sm btn-outline-primary">View Details</Link>
                                    </div>
                                    
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown as="li"  className="nav-item user">
                            <Dropdown.Toggle as="a" className="nav-link">
                            <span class="svg-icon svg-white-icon">
                                    <span class="badge badge-pill dot "></span>
                                    <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><circle cx="9" cy="8" r="2" opacity=".3"></circle><path d="M9 15c-2.7 0-5.8 1.29-6 2.01V18h12v-1c-.2-.71-3.3-2-6-2z" opacity=".3"></path><path d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87zM15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24zM9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM9 13c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H3v-.99C3.2 16.29 6.3 15 9 15s5.8 1.29 6 2v1z"></path></svg>
                                </span>

                            </Dropdown.Toggle>
                            <Dropdown.Menu className="user-box">
                            <div className=" p-3 d-flex justify-content-center align-items-center border-bottom">
                                    <Nav  as="ul">
                                        <Nav.Item as="li">
                                            <Link to="">
                                                <span className="svg-icon svg-white-icon">
                                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="gem" class="svg-inline--fa fa-gem fa-w-18 font-size-xl" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z"></path></svg>
                                                </span>
                                            </Link>
                                            <span className="text-muted">Tasks</span>
                                        </Nav.Item>
                                        <Nav.Item as="li">
                                            <Link to="">
                                                <span className="svg-icon svg-white-icon">
                                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="building" class="svg-inline--fa fa-building fa-w-14 font-size-xl" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M128 148v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12zm140 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm-128 96h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm128 0h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm-76 84v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm76 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm180 124v36H0v-36c0-6.6 5.4-12 12-12h19.5V24c0-13.3 10.7-24 24-24h337c13.3 0 24 10.7 24 24v440H436c6.6 0 12 5.4 12 12zM79.5 463H192v-67c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v67h112.5V49L80 48l-.5 415z"></path></svg>
                                                </span>
                                            </Link>
                                            
                                            <span className="text-muted">Reports</span>
                                        </Nav.Item>
                                        <Nav.Item as="li">
                                            <Link to="">
                                            <span className="svg-icon svg-white-icon">
                                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chart-bar" class="svg-inline--fa fa-chart-bar fa-w-16 font-size-xl" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M396.8 352h22.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-192 0h22.4c6.4 0 12.8-6.4 12.8-12.8V140.8c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h22.4c6.4 0 12.8-6.4 12.8-12.8V204.8c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zM496 400H48V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16zm-387.2-48h22.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8z"></path></svg>
                                                </span>
                                            </Link>
                                            
                                            <span className="text-muted">Stats</span>
                                        </Nav.Item>
                                    </Nav>
                                   
                                    
                                    
                                </div>
                                <div className="pt-3 pb-0">
                              
                                    <div className="d-flex justify-content-center ">
                                                <Link to="" className="btn btn-sm btn-primary">View more items</Link>
                                    </div>
                                    
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                        
                        <Dropdown as="li"  className="nav-item profile">
                            <Dropdown.Toggle as="a" className="nav-link">
                                <span class="profile-icon position-relative d-block">
                                    <Image  alt="Dustin Watson" src={profileIcon}  className="img-fluid"/>
                                    <span className="dot  dot-ripple"> </span>     
                                    <span class="down-arrow-icon"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" class="svg-inline--fa fa-angle-down fa-w-10 opacity-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path></svg></span> 
                               </span>
                               
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="user-profile">
                                <div className=" profile-box p-2 text-center border-bottom">
                                    <div className="profile-image position-relative  mb-2">
                                        <Image  src={profileIcon} roundedCircle fluid  width="40" height="40" alt=""/>
                                        <span className="dot  dot-ripple"> </span>    
                                    </div>
                                    <span className="user-name d-block mb-0">Emma Taylor</span>
                                    <span className="user-position text-muted small d-block mb-2">Senior Web Developer</span>
                                </div>
                                <ListGroup as="ul" className="border-bottom ">
                                    <ListGroup.Item as="li"><Link to=""><span>My Account</span></Link></ListGroup.Item>
                                    <ListGroup.Item as="li"><Link to=""><span>Profile settings</span></Link></ListGroup.Item>
                                    <ListGroup.Item as="li" className="border-bottom"><Link to=""><span>Active tasks</span></Link></ListGroup.Item>
                                    <ListGroup.Item as="li" className="d-flex justify-content-center py-3"><span className="svg-icon mr-2"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chart-bar" class="svg-inline--fa fa-chart-bar fa-w-16 font-size-xxl text-info" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M396.8 352h22.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-192 0h22.4c6.4 0 12.8-6.4 12.8-12.8V140.8c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h22.4c6.4 0 12.8-6.4 12.8-12.8V204.8c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zM496 400H48V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16zm-387.2-48h22.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8z"></path></svg></span><span className="h5 font-weight-bold"> $9,693 <span className="d-block text-muted small font-weight-light">revenue</span></span> </ListGroup.Item>
                                </ListGroup>
                                <div className="p-3">
                                    <Nav as="ul" className=" quick-menu align-items-center ">
                                    <Nav.Item  as="li">
                                        <Nav.Link  as="a">
                                            <span className="svg-icon">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook" class="svg-inline--fa fa-facebook fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>
                                            </span>
                                        </Nav.Link>
                                        
                                    </Nav.Item>
                                    <Nav.Item  as="li">
                                        <Nav.Link  as="a">
                                            <span className="svg-icon">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="dribbble" class="svg-inline--fa fa-dribbble fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z"></path></svg>
                                            </span>
                                        </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item  as="li">
                                        <Nav.Link  as="a">
                                            <span className="svg-icon">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" class="svg-inline--fa fa-twitter fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
                                            </span>
                                        </Nav.Link>
                                        </Nav.Item>
                                        
                                    </Nav>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Nav.Item className="d-lg-flex d-none">
                            <Nav.Link href="javascript:void(0)" className=" padding-mobile-right-0">
                            <span class="svg-icon svg-white-icon">
                                   <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"></path></svg>
                            </span>

                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="hide-desktop-inline-flex show-mobile-inline-flex mobile-toggle-button">
                            <Nav.Link href="javascript:void(0)" onClick={this.handleClick} className="padding-mobile-left-0">
                            <span class="svg-icon svg-white-icon">
                            {(this.state.isToggleOn) ?(<><svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"></path></svg></>): (<><svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M4 18h11c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h8c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h11c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1zm17.3 7.88L17.42 12l2.88-2.88c.39-.39.39-1.02 0-1.41a.9959.9959 0 00-1.41 0L15.3 11.3c-.39.39-.39 1.02 0 1.41l3.59 3.59c.39.39 1.02.39 1.41 0 .38-.39.39-1.03 0-1.42z"></path><path fill="none" d="M0 0h24v24H0V0z"></path></svg></>) }
                            </span>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar>
                </Navbar>
                <div className="sidebar">
                    <div className="sidebar-header">
                            <Navbar.Brand className={this.state.isToggleOn ? "show":""} ><span className="logo-box">
                            <span className="logoIcon">
                                <Image  src={Logo} width="25" height="25" className="img-fluid"/>
                            </span>
                           </span>
                        <span className="toggleButton">
                            <Button onClick={this.handleClick} ><svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M4 18h11c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h8c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h11c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1zm17.3 7.88L17.42 12l2.88-2.88c.39-.39.39-1.02 0-1.41a.9959.9959 0 00-1.41 0L15.3 11.3c-.39.39-.39 1.02 0 1.41l3.59 3.59c.39.39 1.02.39 1.41 0 .38-.39.39-1.03 0-1.42z"></path><path fill="none" d="M0 0h24v24H0V0z"></path></svg></Button>
                            </span>
                        </Navbar.Brand>
                    </div>
                     
                     <Scrollbars autoHide  autoHideTimeout={200} autoHideDuration={200} renderTrackHorizontal={props => <div {...props} className="track-horizontal"/>}   className="sidebar-body">
                        <div className="bg-light profile-box p-4 text-center">
                            <div className="profile-image mb-2">
                                <Image  src={profileIcon} roundedCircle fluid  width="70" alt=""/>
                            </div>
                            <span className="user-name d-block mb-1">Emma Taylor</span>
                            <span className="user-position text-muted d-block mb-2">Senior Web Developer</span>
                            <Link to="" className="btn btn-primary-1 btn-sm">View profile</Link>
                            <Nav className="  align-items-center ">
                            <Dropdown as="li"  className="nav-item scroll-box-dropdown">
                                <Dropdown.Toggle as="a" className="nav-link">
                                <span class="svg-icon ">
                                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
                                    </span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="scroll-box">
                                        <div className="scroll-box-header">
                                            <p className="mb-1">Scrollable</p>
                                            <span className="d-block ">This menu box is scrollable (sm)</span>
                                        </div>
                                        <Scrollbars autoHide  autoHideTimeout={200} autoHideDuration={200} className="scroll-box-body">
                                            <ListGroup as="ul">
                                                <ListGroup.Item as="li">
                                                    <Link to=""><span><i><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chart-bar" class="svg-inline--fa fa-chart-bar fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M396.8 352h22.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-192 0h22.4c6.4 0 12.8-6.4 12.8-12.8V140.8c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h22.4c6.4 0 12.8-6.4 12.8-12.8V204.8c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zM496 400H48V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16zm-387.2-48h22.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8z"></path></svg></i> Services</span>
                                                    </Link></ListGroup.Item>
                                                <ListGroup.Item as="li"><Link to=""><span><i><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="question-circle" class="svg-inline--fa fa-question-circle fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"></path></svg></i>Layouts</span><span className="badge badge-warning">4</span></Link></ListGroup.Item>
                                                <ListGroup.Item as="li"><Link to=""><span><i><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="user-circle" class="svg-inline--fa fa-user-circle fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z"></path></svg></i>Reports</span></Link></ListGroup.Item>
                                                <ListGroup.Item as="li" className="d-flex justify-content-between">
                                                    <Link to="" className="btn btn-outline-secondary ">Action</Link>
                                                    <Link to="" className="btn btn-primary text-white">View Details</Link>
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </Scrollbars>
                                </Dropdown.Menu>
                            </Dropdown>
                            </Nav>
                        </div>
                        <p className="font-weight-bold  mb-0  text-uppercase pl-4 pt-3 pb-2">Navigation menu</p>
                        
                        <Nav className=" menu-sidebar align-items-center ">
                            
                            <Dropdown as="li"  className="nav-item ">
                                <Dropdown.Toggle as="a" className="nav-link">
                                <span class="svg-icon ">
                                <svg  focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M5 5h4v6H5zm10 8h4v6h-4zM5 17h4v2H5zM15 5h4v2h-4z" opacity=".3"></path><path d="M3 13h8V3H3v10zm2-8h4v6H5V5zm8 16h8V11h-8v10zm2-8h4v6h-4v-6zM13 3v6h8V3h-8zm6 4h-4V5h4v2zM3 21h8v-6H3v6zm2-4h4v2H5v-2z"></path></svg>
                                    </span>
                                    Dashboard
                                    <span className="dropdown-arrow">
                                    <svg class="" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></svg>
                                    </span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu as="ul">
                                    <Dropdown.Item as="li"><Link to="">Dashboard 1</Link></Dropdown.Item>
                                    <Dropdown.Item as="li"><Link to="">Dashboard 2</Link></Dropdown.Item>
                                    <Dropdown.Item as="li"><Link to="">Dashboard 3</Link></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown as="li"  className="nav-item ">
                                <Dropdown.Toggle as="a" className="nav-link">
                                <span class="svg-icon ">
                                <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h2c0-1.66 1.34-3 3-3s3 1.34 3 3v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></svg>
                                    </span>
                                    Applications
                                    <span className="dropdown-arrow">
                                    <svg class="" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></svg>
                                    </span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu as="ul">
                                    <Dropdown.Item><Link to="">Calendar</Link></Dropdown.Item>
                                    <Dropdown.Item><Link to="">Chat</Link></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown as="li"  className="nav-item ">
                                <Dropdown.Toggle as="a" className="nav-link">
                                <span class="svg-icon ">
                                <svg class="MuiSvgIcon-root app-sidebar-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"></path></svg>
                                    </span>
                                    Pages
                                    <span className="dropdown-arrow">
                                    <svg class="" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></svg>
                                    </span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu as="ul">
                                    <Dropdown.Item><Link to="">Login</Link></Dropdown.Item>
                                    <Dropdown.Item><Link to="">Register</Link></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            
                            <Dropdown as="li"  className="nav-item ">
                                <Dropdown.Toggle as="a" className="nav-link">
                                <span class="svg-icon ">
                                <svg class="MuiSvgIcon-root app-sidebar-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"></path></svg>
                                    </span>
                                    Pages
                                    <span className="dropdown-arrow">
                                    <svg class="" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></svg>
                                    </span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu as="ul">
                                    <Dropdown.Item><Link to="">Login</Link></Dropdown.Item>
                                    <Dropdown.Item><Link to="">Register</Link></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            
                            <Dropdown as="li"  className="nav-item ">
                                <Dropdown.Toggle as="a" className="nav-link">
                                <span class="svg-icon ">
                                <svg class="MuiSvgIcon-root app-sidebar-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"></path></svg>
                                    </span>
                                    Pages
                                    <span className="dropdown-arrow">
                                    <svg class="" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></svg>
                                    </span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu as="ul">
                                    <Dropdown.Item><Link to="">Login</Link></Dropdown.Item>
                                    <Dropdown.Item><Link to="">Register</Link></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            
                            <Dropdown as="li"  className="nav-item ">
                                <Dropdown.Toggle as="a" className="nav-link">
                                <span class="svg-icon ">
                                <svg class="MuiSvgIcon-root app-sidebar-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"></path></svg>
                                    </span>
                                    Pages
                                    <span className="dropdown-arrow">
                                    <svg class="" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></svg>
                                    </span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu as="ul">
                                    <Dropdown.Item><Link to="">Login</Link></Dropdown.Item>
                                    <Dropdown.Item><Link to="">Register</Link></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                        <div className="p-3">
                            <Nav as="ul" className=" quick-menu align-items-center ">
                                
                            <Nav.Item  as="li">
                                <Nav.Link  as="a">
                                    <span className="svg-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                                    </span>
                                </Nav.Link>
                                
                            </Nav.Item>
                            <Nav.Item  as="li">
                                <Nav.Link  as="a">
                                    <span className="svg-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                                    </span>
                                </Nav.Link>
                                </Nav.Item>
                                <Nav.Item  as="li">
                                <Nav.Link  as="a">
                                    <span className="svg-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                    </span>
                                </Nav.Link>
                                </Nav.Item>
                                <Nav.Item  as="li">
                                <Nav.Link  as="a">
                                    <span className="svg-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                                    </span>
                                </Nav.Link>
                            </Nav.Item>
                            </Nav>
                        </div>
                    </Scrollbars>
                </div>
                <Modal show={this.state.show} animation={true} onHide={this.closeModal} className="search-modal">
                    <Container>
                        <Modal.Header closeButton className="py-4 align-items-center border-0">
                            <div >
                                <h2 className="h1">Search</h2>
                                <p className="d-block">Use the field below to search results.</p>
                            </div>
                            
                        </Modal.Header>
                    </Container>
                    <div className="py-4 bg-light">
                        <Container>
                            <FormControl placeholder="Search terms here"/>
                        </Container>
                    </div>
                    <Modal.Body  >
                        <div className="d-flex align-items-center justify-content-center h-100 py-4">
                            <div>
                                <h5 className="text-warning text-center font-weight-bold h2">No search result found!</h5>
                                <p className="text-muted h5 text-center font-weight-light h2">Use the field above to begin searching for something</p>
                                </div>

                        </div>
                       
                        
                    </Modal.Body>
                </Modal>
            </header>
           
        </>
        )
    }
}
export default Header
