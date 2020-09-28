import React, { Component, Profiler } from 'react'

import {Row,Col,Card,Table,ProgressBar,Tabs,Image , Tab,Button,ListGroup,ListGroupItem,Media, Container, FormControl, Dropdown} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import profileIcon from '../images/profileIcon.jpg'
import Chart1 from '../images/chart-1.png'
import Chart2 from '../images/chart2.png'
import Chart3 from '../images/chart3.png'
import Chart4 from '../images/chart4.png'
import Chart5 from '../images/chart5.png'
import Chart6 from '../images/chart6.png'
import Bloghumbnial from '../images/blog-thumbnial.png'



import { Scrollbars } from 'react-custom-scrollbars';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';

const Loading = () => {
    return(
       
        <span className="loading"><span></span></span>
        
    )
}

 class Dashboard extends Component {

    render() {
        return (
            <>
            <section className="breadcumbs-with-title-section">
                    <div  className="d-xl-flex d-block justify-content-between w-100 align-items-center">
                       
                            <div className="d-xl-flex d-block align-items-center text-center text-xl-left">
                                <span className="main-icon mb-xl-0 mb-3">
                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M5 5h4v6H5zm10 8h4v6h-4zM5 17h4v2H5zM15 5h4v2h-4z" opacity=".3"></path><path d="M3 13h8V3H3v10zm2-8h4v6H5V5zm8 16h8V11h-8v10zm2-8h4v6h-4v-6zM13 3v6h8V3h-8zm6 4h-4V5h4v2zM3 21h8v-6H3v6zm2-4h4v2H5v-2z"></path></svg>
       
                                </span>
                                <span className="pl-0 pl-xl-3 ">
                                    <h2 className="h4 font-weight-bold text-dark">Default</h2>
                                    <p className="h6 mb-0  text-muted mb-xl-0 mb-3">This is a dashboard page example built using this template.</p>
                                </span>
                            </div>
                            <div className="text-center text-xl-left">
                                <Button className="btn-primary-1 btn-sm mr-lg-3 mr-0 btn-toggle-link">
                                    <span className="svg-icon svg-white-icon">
                                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="object-group" class="svg-inline--fa fa-object-group fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M500 128c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12h-72c-6.627 0-12 5.373-12 12v12H96V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v72c0 6.627 5.373 12 12 12h12v256H12c-6.627 0-12 5.373-12 12v72c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-12h320v12c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-72c0-6.627-5.373-12-12-12h-12V128h12zm-52-64h32v32h-32V64zM32 64h32v32H32V64zm32 384H32v-32h32v32zm416 0h-32v-32h32v32zm-40-64h-12c-6.627 0-12 5.373-12 12v12H96v-12c0-6.627-5.373-12-12-12H72V128h12c6.627 0 12-5.373 12-12v-12h320v12c0 6.627 5.373 12 12 12h12v256zm-36-192h-84v-52c0-6.628-5.373-12-12-12H108c-6.627 0-12 5.372-12 12v168c0 6.628 5.373 12 12 12h84v52c0 6.628 5.373 12 12 12h200c6.627 0 12-5.372 12-12V204c0-6.628-5.373-12-12-12zm-268-24h144v112H136V168zm240 176H232v-24h76c6.627 0 12-5.372 12-12v-76h56v112z"></path></svg>
                                    </span>
                                </Button>
                               
                                <Dropdown className="d-inline-block share-menu" drop="left">
                                    <Dropdown.Toggle className=" btn btn-sm btn-rounded"> 
                                        <span className="svg-icon svg-white-icon">
                                        <svg class="MuiSvgIcon-root MuiSpeedDialIcon-icon MuiSpeedDialIcon-iconOpen MuiSpeedDialIcon-iconWithOpenIconOpen" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
                                        </span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <DropdownItem><span className="svg-icon "><svg className="text-primary" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"></path></svg>
                                        </span></DropdownItem>
                                        <DropdownItem><span className="svg-icon ">
                                        <svg class="text-warning" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path></svg>
                                        </span></DropdownItem>
                                        <DropdownItem><span className="svg-icon "><svg class="text-info" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"></path></svg></span></DropdownItem>


                                        <DropdownItem><span className="svg-icon "><svg class="text-danger" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg></span></DropdownItem>
                                                                                            

                                        <DropdownItem><span className="svg-icon "><svg class="text-primary-1" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zM8 21V7h6v5h5v9H8z"></path></svg></span></DropdownItem>
                                                                            


                         



                                      
                                        
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                       
                    </div>
                    
            </section>
            <section className="dashboard">
                    <Container fluid className="p-4">
                        <Row className="">
                            <Col xl={3} sm={6}>
                                <Card className="card-1">
                                    <Card.Header className="d-flex align-items-center bg-white border-0">
                                    <div class="svg-40 rounded-circle bg-primary-1 text-white font-size-lg mr-3">
                                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="keyboard" class="svg-18 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm8 336c0 4.411-3.589 8-8 8H48c-4.411 0-8-3.589-8-8V112c0-4.411 3.589-8 8-8h480c4.411 0 8 3.589 8 8v288zM170 270v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm96 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm96 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm96 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm-336 82v-28c0-6.627-5.373-12-12-12H82c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm384 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zM122 188v-28c0-6.627-5.373-12-12-12H82c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm96 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm96 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm96 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm96 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm-98 158v-16c0-6.627-5.373-12-12-12H180c-6.627 0-12 5.373-12 12v16c0 6.627 5.373 12 12 12h216c6.627 0 12-5.373 12-12z"></path></svg>
                                        </div>
                                        <p className="text-dark mb-0">Orders</p>
                                    </Card.Header>
                                    <Card.Body className="text-center">
                                        <p className="h1  font-weight-light mb-3 d-flex align-items-center justify-content-center">
                                            <span className="text-danger mr-2">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down" class="h6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"></path></svg>
                                            </span>
                                        $3,485
                                        </p>
                                        <p className="text-muted mb-0"><b>+36%</b> from last month</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={3} sm={6}>
                                <Card className="card-1">
                                    <Card.Header className="d-flex align-items-center bg-white border-0">
                                    <div class="svg-40 rounded-circle bg-success text-white font-size-lg mr-3">
                                             <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="file-excel" class="svg-18 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm212-240h-28.8c-4.4 0-8.4 2.4-10.5 6.3-18 33.1-22.2 42.4-28.6 57.7-13.9-29.1-6.9-17.3-28.6-57.7-2.1-3.9-6.2-6.3-10.6-6.3H124c-9.3 0-15 10-10.4 18l46.3 78-46.3 78c-4.7 8 1.1 18 10.4 18h28.9c4.4 0 8.4-2.4 10.5-6.3 21.7-40 23-45 28.6-57.7 14.9 30.2 5.9 15.9 28.6 57.7 2.1 3.9 6.2 6.3 10.6 6.3H260c9.3 0 15-10 10.4-18L224 320c.7-1.1 30.3-50.5 46.3-78 4.7-8-1.1-18-10.3-18z"></path></svg>
                                        </div>
                                        <p className="text-dark mb-0">Reports</p>
                                    </Card.Header>
                                    <Card.Body className="text-center">
                                        <p className="h1  font-weight-light mb-3 d-flex align-items-center justify-content-center">
                                            <span className="text-warning mr-2">
                                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="dot-circle" class="" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg>
                                            </span>
                                            436
                                        </p>
                                        <p className="text-muted mb-0"><b>+36%</b> from last month</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={3} sm={6}>
                                <Card className="card-1">
                                    <Card.Header className="d-flex align-items-center bg-white border-0">
                                    <div class="svg-40 rounded-circle bg-danger text-white font-size-lg mr-3">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="user" class="svg-18 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path></svg>
                                        </div>
                                        <p className="text-dark mb-0">Customers</p>
                                    </Card.Header>
                                    <Card.Body className="text-center">
                                        <p className="h1  font-weight-light mb-3 d-flex align-items-center justify-content-center">
                                        <span className="text-success mr-2">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-up" class="" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path></svg>
                                            </span>
                                            4867
                                        </p>
                                        <p className="text-muted mb-0"><b>+36%</b> from last month</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={3} sm={6}>
                                <Card className="card-1">
                                    <Card.Header className="d-flex align-items-center bg-white border-0">
                                    <div class="svg-40 rounded-circle bg-primary text-white font-size-lg mr-3">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="user" class="svg-18 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path></svg>
                                        </div>
                                        <p className="text-dark mb-0">Orders</p>
                                    </Card.Header>
                                    <Card.Body className="text-center">
                                        <p className="h1  font-weight-light mb-3 d-flex align-items-center justify-content-center">
                                            <span className="text-dark mr-2">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down" class="h6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"></path></svg>
                                            </span>
                                            433
                                        </p>
                                        <p className="text-muted mb-0"><b>+36%</b> from last month</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={6} sm={12}>
                                <Card className="card-with-image">
                                    <Card.Header className="  border-0 knowledge-base-software">
                                   
                                        <p className="h5 text-light mb-2 font-weight-bold">Knowledge Base Software</p>
                                        
                                        <p className="text-light opacity-60 mb-3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                                        <Link to="" className="btn btn-secondary btn-sm mb-4">Contact us</Link>
                                        
                                    </Card.Header>
                                    <Card.Body className="">
                                        <div className="text-center profile-icon">
                                            <Image src={profileIcon} width="120" roundedCircle fluid className="d-inline" alt=""/>
                                        </div>
                                       
                                        <Table borderless responsive className="user-list">
                                        <colgroup>
                                            
                                        <col style={{minWidth:150+"px"}} />
                                            <col />
                                            <col  />
                                        </colgroup>
                                            <thead>
                                                <tr>
                                                    <th>Employee</th>
                                                    <th className="text-center ">Status</th>
                                                    <th className="text-center ">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <label className="d-flex align-items-center mb-0">
                                                            <span className="user-image mr-3"> 
                                                                <Image src={profileIcon} width="50" roundedCircle fluid className="d-inline" alt=""/>
                                                            </span>
                                                            <span className="">
                                                              
                                                            <Link to="" className="h6 font-weight-semi-bold employee-name">Shanelle Wynn</Link>
                                                                <span className=" text-muted d-block">UI Engineer, Apple Inc.</span>
                                                            </span>
                                                        </label>
                                                    </td>


                                                    <td className="text-center"><span className="label-inline bg-success">Completed</span></td>
                                                    <td className="text-center "><Link to="" className="btn btn-outline-primary btn-sm">Chat</Link></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label className="d-flex align-items-center mb-0">
                                                            <span className="user-image mr-3"> 
                                                                <Image src={profileIcon} width="50" roundedCircle fluid className="d-inline" alt=""/>
                                                            </span>
                                                            <span className="">
                                                                
                                                            <Link to="" className="h6 font-weight-semi-bold employee-name">Shanelle Wynn</Link>
                                                                <span className=" text-muted d-block">Frontend Developer</span>
                                                            </span>
                                                        </label>
                                                    </td>


                                                    <td className="text-center "><span className="label-inline bg-danger">Declined</span></td>
                                                    <td className="text-center "><Link to="" className="btn btn-outline-primary btn-sm">Chat</Link></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label className="d-flex align-items-center mb-0">
                                                            <span className="user-image mr-3"> 
                                                                <Image src={profileIcon} width="50" roundedCircle fluid className="d-inline" alt=""/>
                                                            </span>
                                                            <span className="">
                                                                
                                                                <Link to="" className="h6 font-weight-semi-bold employee-name">Shanelle Wynn</Link>
                                                                <span className=" text-muted d-block">Senior Project Manager</span>
                                                            </span>
                                                        </label>
                                                    </td>


                                                    <td className="text-center"><span className="label-inline bg-warning">Pending</span></td>
                                                    <td className="text-center "><Link to="" className="btn btn-outline-primary btn-sm">Chat</Link></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label className="d-flex align-items-center mb-0">
                                                            <span className="user-image mr-3"> 
                                                                <Image src={profileIcon} width="50" roundedCircle fluid className="d-inline" alt=""/>
                                                            </span>
                                                            <span className="">
                                                                <Link to="" className="h6 font-weight-semi-bold employee-name">Shanelle Wynn</Link>
                                                                <span className=" text-muted d-block">UX Designer</span>
                                                            </span>
                                                        </label>
                                                    </td>


                                                    <td className="text-center"><span className="label-inline bg-primary">On Hold</span></td>
                                                    <td className="text-center "><Link to="" className="btn btn-outline-primary btn-sm">Chat</Link></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={6} sm={12}>
                                <Card className="performance">
                                    <Card.Header className="bg-white  border-0 ">
                                        <h2 className="h5 mt-2 font-weight-semi-bold text-muted">Sales statistics
</h2>
                                    
                                        <Image src={Chart1}  fluid className="d-inline w-100" alt=""/>
                                    </Card.Header>
                                    <Card.Body className="p-0">
                                       <Tabs className="">
                                            <Tab eventKey="lastWeek" title="Last Week">
                                                <div className="p-4  border-bottom">
                                                    <h5 className="font-weight-bold mb-0">Performance
                                                    </h5>
                                                    <p className="text-muted mb-0">Portfolio performance for selected period
                                                    </p>
                                                </div>
                                                <div className="pl-4 pr-4 py-3 border-bottom">
                                                    <Row >
                                                        <Col md="6">
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <span className="h6 mb-0 font-weight-bold ">Orders</span>
                                                                <span className="font-weight-bold mb-0 text-danger h5">345</span>
                                                            </div>
                                                            <ProgressBar  className="progress-bar-sm my-2" now={50}/>
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <span className=" mb-0 text-muted opacity-60 ">Target</span>
                                                                
                                                                <span className=" mb-0 text-muted opacity-60 ">100%</span>
                                                            </div>
                                                        </Col>
                                                        <Col md="6">
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <span className="h6 mb-0 font-weight-bold ">Orders</span>
                                                                <span className="font-weight-bold mb-0  h5">345</span>
                                                            </div>
                                                            <ProgressBar  className="progress-bar-sm my-2" now={50}/>
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <span className=" mb-0 text-muted opacity-60 ">Target</span>
                                                                
                                                                <span className=" mb-0 text-muted opacity-60 ">100%</span>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </Tab>
                                            <Tab eventKey="lastMonth" title="Last Month">
                                            <div className="p-4  border-bottom">
                                                    <h5 className="font-weight-bold mb-0">Performance
                                                    </h5>
                                                    <p className="text-muted mb-0">Portfolio performance for selected period
                                                    </p>
                                                </div>
                                                <div className="pl-4 pr-4 py-3 border-bottom">
                                                    <Row >
                                                        <Col md="6">
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <span className="h6 mb-0 font-weight-bold ">Orders</span>
                                                                <span className="font-weight-bold mb-0 text-danger h5">345</span>
                                                            </div>
                                                            <ProgressBar  className="progress-bar-sm my-2" now={50}/>
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <span className=" mb-0 text-muted opacity-60 ">Target</span>
                                                                
                                                                <span className=" mb-0 text-muted opacity-60 ">100%</span>
                                                            </div>
                                                        </Col>
                                                        <Col md="6">
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <span className="h6 mb-0 font-weight-bold ">Orders</span>
                                                                <span className="font-weight-bold mb-0  h5">345</span>
                                                            </div>
                                                            <ProgressBar  className="progress-bar-sm my-2" now={50}/>
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <span className=" mb-0 text-muted opacity-60 ">Target</span>
                                                                
                                                                <span className=" mb-0 text-muted opacity-60 ">100%</span>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                          
                                            </Tab>
                                            <Tab eventKey="lastYear" title="Last Year">
                                            <div className="p-4  border-bottom">
                                                    <h5 className="font-weight-bold mb-0">Performance
                                                    </h5>
                                                    <p className="text-muted mb-0">Portfolio performance for selected period
                                                    </p>
                                                </div>
                                                <div className="pl-4 pr-4 py-3 border-bottom">
                                                    <Row >
                                                        <Col md="6">
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <span className="h6 mb-0 font-weight-bold ">Orders</span>
                                                                <span className="font-weight-bold mb-0 text-danger h5">345</span>
                                                            </div>
                                                            <ProgressBar  className="progress-bar-sm my-2" now={50}/>
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <span className=" mb-0 text-muted opacity-60 ">Target</span>
                                                                
                                                                <span className=" mb-0 text-muted opacity-60 ">100%</span>
                                                            </div>
                                                        </Col>
                                                        <Col md="6">
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <span className="h6 mb-0 font-weight-bold ">Orders</span>
                                                                <span className="font-weight-bold mb-0  h5">345</span>
                                                            </div>
                                                            <ProgressBar  className="progress-bar-sm my-2" now={50}/>
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <span className=" mb-0 text-muted opacity-60 ">Target</span>
                                                                
                                                                <span className=" mb-0 text-muted opacity-60 ">100%</span>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                          
                                            </Tab>
                                        </Tabs>

                                       
                                       
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={12} sm={12}>
                                <Card className="card-with-image">
                                    <Card.Header className=" bg-white d-flex justify-content-between  ">
                                   
                                        <p className="h6 text-muted mb-0 font-weight-light">Employees status</p>
                                        <Button className="p-0 mw-auto border-0" variant="outline-primary bg-none">
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cog" class="svg-inline--fa fa-cog fa-w-16 fa-spin " style={{width:20+"px"}} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"></path></svg>
                                        </Button>
                                      
                                    </Card.Header>
                                    <Card.Body className="">
                                      
                                       
                                        <Table borderless responsive className="user-list">
                                        <colgroup>
                                            <col  />
                                            <col style={{minWidth:300+"px"}}/>
                                            <col  />
                                            <col  style={{width:200+"px"}}/>
                                            <col  style={{width:100+"px"}}/>
                                        </colgroup>
                                            <thead className="bg-light">
                                                <tr>
                                                    <th>#</th>
                                                    <th >Name</th>
                                                    <th className="text-center ">Status</th>
                                                    <th className="text-center ">Progress</th>
                                                    <th className="text-center ">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>
                                                        <label className="d-flex align-items-center mb-0">
                                                            <span className="user-image mr-3"> 
                                                                <Image src={profileIcon} width="50" roundedCircle fluid className="d-inline" alt=""/>
                                                            </span>
                                                            <span className="">
                                                              
                                                            <Link to="" className="h6 font-weight-semi-bold employee-name">Shanelle Wynn</Link>
                                                                <span className=" text-muted d-block">UI Engineer, Apple Inc.</span>
                                                            </span>
                                                        </label>
                                                    </td>


                                                    <td className="text-center"><span className="label-inline bg-warning pl-4 pr-4 text-uppercase">Pending</span></td>
                                                    <td>
                                                        <Loading/>
                                                    </td>
                                                    <td className="text-center ">
                                                    <Button className="p-0 mw-auto border-0" variant="outline-primary bg-none"> <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" class="svg-inline--fa fa-arrow-right fa-w-14 " style={{width:20+"px"}} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></Button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>
                                                        <label className="d-flex align-items-center mb-0">
                                                            <span className="user-image mr-3"> 
                                                                <Image src={profileIcon} width="50" roundedCircle fluid className="d-inline" alt=""/>
                                                            </span>
                                                            <span className="">
                                                                
                                                            <Link to="" className="h6 font-weight-semi-bold employee-name">Shanelle Wynn</Link>
                                                                <span className=" text-muted d-block">Frontend Developer</span>
                                                            </span>
                                                        </label>
                                                    </td>


                                                    <td className="text-center "><span className="label-inline bg-warning  pl-4 pr-4 text-uppercase">Pending</span></td>
                                                    <td>
                                                        <Loading/>
                                                    </td>
                                                    <td className="text-center ">
                                                    <Button className="p-0 mw-auto border-0" variant="outline-primary bg-none"> <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" class="svg-inline--fa fa-arrow-right fa-w-14 " style={{width:20+"px"}} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></Button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>
                                                        <label className="d-flex align-items-center mb-0">
                                                            <span className="user-image mr-3"> 
                                                                <Image src={profileIcon} width="50" roundedCircle fluid className="d-inline" alt=""/>
                                                            </span>
                                                            <span className="">
                                                                
                                                                <Link to="" className="h6 font-weight-semi-bold employee-name">Shanelle Wynn</Link>
                                                                <span className=" text-muted d-block">Senior Project Manager</span>
                                                            </span>
                                                        </label>
                                                    </td>


                                                    <td className="text-center"><span className="label-inline bg-danger  pl-4 pr-4 text-uppercase">Failed</span></td>
                                                    <td>
                                                        <Loading/>
                                                    </td>
                                                    <td className="text-center ">
                                                    <Button className="p-0 mw-auto border-0" variant="outline-primary bg-none"> <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" class="svg-inline--fa fa-arrow-right fa-w-14 " style={{width:20+"px"}} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></Button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>
                                                        <label className="d-flex align-items-center mb-0">
                                                            <span className="user-image mr-3"> 
                                                                <Image src={profileIcon} width="50" roundedCircle fluid className="d-inline" alt=""/>
                                                            </span>
                                                            <span className="">
                                                                <Link to="" className="h6 font-weight-semi-bold employee-name">Shanelle Wynn</Link>
                                                                <span className=" text-muted d-block">UX Designer</span>
                                                            </span>
                                                        </label>
                                                    </td>
                                                    

                                                    <td className="text-center"><span className="label-inline bg-success  pl-4 pr-4 text-uppercase">Completed</span></td>
                                                    <td>
                                                        <Loading/>
                                                    </td>
                                                    <td className="text-center ">
                                                    <Button className="p-0 mw-auto border-0" variant="outline-primary bg-none"> <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" class="svg-inline--fa fa-arrow-right fa-w-14 " style={{width:20+"px"}} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></Button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table> 



                                    </Card.Body>
                                    <Card.Footer className="d-flex justify-content-between bg-white align-items-center">
                                       <div>
                                        <Button  variant="outline-primary" className=" border-0 p-0 btn-sm mr-3">Cancel</Button>
                                        </div>
                                        <div>
                                        <Link to="" className="btn btn-primary btn-sm mr-3">View all</Link>
                                        <Button  className="btn btn-primary-1 btn-sm">Add new entry</Button>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col lg={5} sm={12}>
                                <Card className="reports">
                                    <Card.Header className="bg-white   border-0 ">
                                    <div>
                                        <h2 className="h5 mt-2 font-weight-bold text-dark">Weekly Sales
                                        </h2>
                                        <p className="text-muted font-weight-light">Report for what we sold this week.
                                        </p>
                                    </div>
                                    </Card.Header>
                                    
                                    <Card.Body className="p-0">
                                    <Image src={Chart2}  fluid className="w-100 " alt=""/>
                                    <Scrollbars autoHide  autoHideTimeout={200} autoHideDuration={200} className="height-250">
                                      <ListGroup>
                                          <ListGroupItem className="d-flex justify-content-between">
                                                        <label className="d-flex align-items-center mb-0">
                                                            <span className="user-image mr-3"> 
                                                                <Image src={profileIcon} width="40" roundedCircle fluid className="d-inline" alt=""/>
                                                            </span>
                                                            <span className="">
                                                              
                                                            <Link to="" className="h6 nav-link p-0 mb-0 font-weight-semi-bold text-dark">Shanelle Wynn</Link>
                                                                <span className=" text-muted d-block">UI Engineer, Apple Inc.</span>
                                                            </span>
                                                        </label>
                                                        <div>
                                                            <Link to="" className="btn btn-sm btn-outline-primary pl-2 pr-2">View</Link>
                                                        </div>
                                          </ListGroupItem>
                                          <ListGroupItem className="d-flex justify-content-between">
                                                        <label className="d-flex align-items-center mb-0">
                                                            <span className="user-image mr-3"> 
                                                                <Image src={profileIcon} width="40" roundedCircle fluid className="d-inline" alt=""/>
                                                            </span>
                                                            <span className="">
                                                              
                                                            <Link to="" className="h6 nav-link p-0 mb-0 font-weight-semi-bold text-dark">Shanelle Wynn</Link>
                                                                <span className=" text-muted d-block">UI Engineer, Apple Inc.</span>
                                                            </span>
                                                        </label>
                                                        <div>
                                                            <Link to="" className="btn btn-sm btn-outline-primary pl-2 pr-2">View</Link>
                                                        </div>
                                          </ListGroupItem>
                                          <ListGroupItem className="d-flex justify-content-between">
                                                        <label className="d-flex align-items-center mb-0">
                                                            <span className="user-image mr-3"> 
                                                                <Image src={profileIcon} width="40" roundedCircle fluid className="d-inline" alt=""/>
                                                            </span>
                                                            <span className="">
                                                              
                                                            <Link to="" className="h6 nav-link p-0 mb-0 font-weight-semi-bold text-dark">Shanelle Wynn</Link>
                                                                <span className=" text-muted d-block">UI Engineer, Apple Inc.</span>
                                                            </span>
                                                        </label>
                                                        <div>
                                                            <Link to="" className="btn btn-sm btn-outline-primary pl-2 pr-2">View</Link>
                                                        </div>
                                          </ListGroupItem>
                                          <ListGroupItem className="d-flex justify-content-between">
                                                        <label className="d-flex align-items-center mb-0">
                                                            <span className="user-image mr-3"> 
                                                                <Image src={profileIcon} width="40" roundedCircle fluid className="d-inline" alt=""/>
                                                            </span>
                                                            <span className="">
                                                              
                                                            <Link to="" className="h6 nav-link p-0 mb-0 font-weight-semi-bold text-dark">Shanelle Wynn</Link>
                                                                <span className=" text-muted d-block">UI Engineer, Apple Inc.</span>
                                                            </span>
                                                        </label>
                                                        <div>
                                                            <Link to="" className="btn btn-sm btn-outline-primary pl-2 pr-2">View</Link>
                                                        </div>
                                          </ListGroupItem>
                                          <ListGroupItem className="d-flex justify-content-between">
                                                        <label className="d-flex align-items-center mb-0">
                                                            <span className="user-image mr-3"> 
                                                                <Image src={profileIcon} width="40" roundedCircle fluid className="d-inline" alt=""/>
                                                            </span>
                                                            <span className="">
                                                              
                                                            <Link to="" className="h6 nav-link p-0 mb-0 font-weight-semi-bold text-dark">Shanelle Wynn</Link>
                                                                <span className=" text-muted d-block">UI Engineer, Apple Inc.</span>
                                                            </span>
                                                        </label>
                                                        <div>
                                                            <Link to="" className="btn btn-sm btn-outline-primary pl-2 pr-2">View</Link>
                                                        </div>
                                          </ListGroupItem>
                                          <ListGroupItem className="d-flex justify-content-between">
                                                        <label className="d-flex align-items-center mb-0">
                                                            <span className="user-image mr-3"> 
                                                                <Image src={profileIcon} width="40" roundedCircle fluid className="d-inline" alt=""/>
                                                            </span>
                                                            <span className="">
                                                              
                                                            <Link to="" className="h6 nav-link p-0 mb-0 font-weight-semi-bold text-dark">Shanelle Wynn</Link>
                                                                <span className=" text-muted d-block">UI Engineer, Apple Inc.</span>
                                                            </span>
                                                        </label>
                                                        <div>
                                                            <Link to="" className="btn btn-sm btn-outline-primary pl-2 pr-2">View</Link>
                                                        </div>
                                          </ListGroupItem>
                                          
                                      </ListGroup>

                                      </Scrollbars>
                                       
                                       
                                    </Card.Body>
                                    <Card.Footer className="text-center bg-white border-0">
                                        <Link to="" className="btn btn-sm btn-primary pl-2 pr-2">View all employee <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" class=" " style={{width:14+"px"}} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></Link>
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col lg={7} sm={12}>
                                <Row>
                                <Col  sm={6}>
                                <Card className="reports bg-white">
                                        <Card.Header className="bg-white border-0 d-flex justify-content-between">
                                            <span>
                                                <p className="h4 mb-0 font-weight-bold">895</p>
                                                <p className="h5 text-muted font-weight-light">Total Orders</p>
                                            </span>
                                            <span>
                                                <Link to="" className="btn btn-sm btn-outline-primary text-uppercase pl-2 pr-2">Details</Link>
                                            </span>
                                            </Card.Header>
                                        <Card.Body className="p-0">
                                           
                                            
                                            <Image src={Chart3}  fluid className="w-100 " alt=""/>
                                    
                                        </Card.Body> 
                                    </Card>
                                </Col>
                                <Col  sm={6}>
                                    <Card className=" reports  bg-danger">
                                        <Card.Header className="bg-danger border-0 d-flex justify-content-between">
                                            <span>
                                                <p className="h4 mb-0 text-white font-weight-bold">183,954
</p>
                                                <p className="h5 text-light  font-weight-light">Total Deliveries</p>
                                            </span>
                                          
                                        </Card.Header>
                                        <Card.Body className="p-0">
                                           
                                            
                                            <Image src={Chart4}  fluid className="w-100 d-inline" alt=""/>
                                    
                                        </Card.Body> 
                                    </Card>
                                </Col>
                                <Col  sm={6}>
                                <Card className="reports report-card-2 ">
                                        <Card.Header className="bg-none border-0 d-flex justify-content-between">
                                            <span>
                                                <p className="h4 mb-0 text-white font-weight-bold">183,954
</p>
                                                <p className="h5 text-light  font-weight-light">Total Deliveries</p>
                                            </span>
                                          
                                        </Card.Header>
                                        <Card.Body className="p-0">
                                           
                                            
                                            <Image src={Chart5}  fluid className="w-100 d-inline" alt=""/>
                                    
                                        </Card.Body> 
                                    </Card>
                                </Col>
                                <Col  sm={6}>
                                <Card className="reports report-card-3">
                                        <Card.Header className="bg-none border-0 d-flex justify-content-between">
                                            <span>
                                                <p className="h4 mb-0 text-white font-weight-bold">183,954
</p>
                                                <p className="h5 text-light  font-weight-light">Total Deliveries</p>
                                            </span>
                                          
                                        </Card.Header>
                                        <Card.Body className="p-0">
                                           
                                            
                                            <Image src={Chart6}  fluid className="w-100 d-inline" alt=""/>
                                    
                                        </Card.Body> 
                                    </Card>
                                </Col>
                               
                                </Row>
                            </Col>
                            <Col lg={12}>
                                <Row>
                                    <Col lg="3" sm={6}>
                                        <Card className="finance finance-1 p-3">
                                            <p className="text-muted font-weight-light mb-1">Expences</p>
                                            <div className="d-flex justify-content-between align-items-end">
                                                <span className="text-success font-weight-light h4 mb-0"><span className="text-muted">$ </span>4,986</span>
                                                <span className="text-success h6 font-weight-bold mb-0">+34%</span>
                                            </div>
                                        </Card>
                                    </Col>
                                    <Col lg="3" sm={6}>
                                        <Card className="p-3 finance finance-2">
                                            <p className="text-muted font-weight-light mb-1">Sales</p>
                                            <div className="d-flex justify-content-between align-items-end">
                                                <span className="text-danger font-weight-light h4 mb-0"><span className="text-muted">$ </span>4,986</span>
                                                <span className="text-success h6 font-weight-bold mb-0">+34%</span>
                                            </div>
                                        </Card>
                                    </Col>
                                    <Col lg="3" sm={6}>
                                        <Card className="p-3 finance finance-3">
                                            <p className="text-light font-weight-light mb-1">Income</p>
                                            <div className="d-flex justify-content-between align-items-end">
                                                <span className="text-white font-weight-light h4 mb-0"><span className="text-light">$ </span>4,98M</span>
                                                <span className=" h6 text-danger font-weight-bold mb-0">-22%</span>
                                            </div>
                                        </Card>
                                    </Col>
                                    <Col lg="3" sm={6}>
                                        <Card className="p-3 finance finance-4">
                                            <p className="text-light font-weight-light mb-1">Spendings</p>
                                            <div className="d-flex justify-content-between align-items-end">
                                                <span className="text-white font-weight-light h4 mb-0"><span className="text-light">$ </span>35,465</span>
                                                <span className="text-dark h6 font-weight-bold mb-0">+65%</span>
                                            </div>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={12}>
                                <Card className="blogs">
                                    <Card.Header className="d-flex bg-white justify-content-between  align-items-center">
                                        <p className="font-weight-semi-bold mb-0">
                                            <span className="text-muted small text-uppercase">Blogs</span>
                                            <span className="font-weight-bold d-block ">Latest articles</span>
                                        </p>
                                        <span className="">
                                            <Link to="">Report</Link>
                                        </span>
                                    </Card.Header>
                                    <Card.Body className="pl-0 pr-0">
                                    <Scrollbars autoHide  autoHideTimeout={200} autoHideDuration={200} className="height-250">
                                        <ListGroup>
                                            <ListGroupItem>
                                                <Media>
                                                    <Image fluid width="160" src={Bloghumbnial}/>
                                                    <Media.Body className="pl-4">
                                                        <h5>Meeting Minutes</h5>
                                                        <Link to="" className="badge small text-info bg-info-20 text-uppercase mr-2 p-2 font-weight-semi-bold mb-2">articles</Link>
                                                        <Link to="" className="badge small text-danger bg-danger-20 p-2 text-uppercase font-weight-semi-bold mb-2">Posts</Link>
                                                        <p  className="text-muted">A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...
</p>
                                                    </Media.Body>
                                                </Media>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <Media>
                                                    <Image fluid width="160" src={Bloghumbnial}/>
                                                    <Media.Body className="pl-4">
                                                        <h5>Meeting Minutes</h5>
                                                        <Link to="" className="badge small text-info bg-info-20 text-uppercase mr-2 p-2 font-weight-semi-bold mb-2">articles</Link>
                                                        <Link to="" className="badge small text-danger bg-danger-20 p-2 text-uppercase font-weight-semi-bold mb-2">Posts</Link>
                                                        <p  className="text-muted">A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...
</p>
                                                    </Media.Body>
                                                </Media>
                                            </ListGroupItem>
                                            
                                            <ListGroupItem>
                                                <Media>
                                                    <Image fluid width="160" src={Bloghumbnial}/>
                                                    <Media.Body className="pl-4">
                                                        <h5>Meeting Minutes</h5>
                                                        <Link to="" className="badge small text-info bg-info-20 text-uppercase mr-2 p-2 font-weight-semi-bold mb-2">articles</Link>
                                                        <Link to="" className="badge small text-danger bg-danger-20 p-2 text-uppercase font-weight-semi-bold mb-2">Posts</Link>
                                                        <p  className="text-muted">A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...
</p>
                                                    </Media.Body>
                                                </Media>
                                            </ListGroupItem>
                                        </ListGroup>
                                    </Scrollbars>
                                    </Card.Body>
                                    <Card.Footer className="border-0">
                                        <Link to="">   <span className="svg-icon">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook" class="svg-inline--fa fa-facebook fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>
                                            </span></Link>
                                        <Link to=""><span className="svg-icon">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="dribbble" class="svg-inline--fa fa-dribbble fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z"></path></svg>
                                            </span></Link>
                                        <Link to=""><span className="svg-icon">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" class="svg-inline--fa fa-twitter fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
                                            </span></Link>
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col lg={12}>
                                <Card className="blogs">
                                    <Card.Header className="d-flex bg-white justify-content-between  align-items-center">
                                        <p className="font-weight-semi-bold mb-0">
                                            <span className="text-muted small text-uppercase">Targets</span>
                                            <span className="font-weight-bold d-block ">Monthly Stats</span>
                                        </p>
                                        


                                        <span className="">
                                        <Button variant="outline" to="" className=" btn-sm btn-outline-primary">Today</Button>
                                            <Button variant="outline" to="" className=" btn-sm btn-outline-primary border-0">Last Week</Button>
                                        </span>
                                    </Card.Header>
                                    <Card.Body className="pl-0 pr-0">
                                    <Scrollbars autoHide  autoHideTimeout={200} autoHideDuration={200} className="height-250">
                                        <ListGroup>
                                            <ListGroupItem>
                                                <Media>
                                                    <Image fluid width="160" src={Bloghumbnial}/>
                                                    <Media.Body className="pl-4">
                                                        <h5 className="font-weight-bold">Meeting Minutes</h5>
                                                        <p  className="text-muted mb-1">Learn more about these example boxes.</p>
                                                        <p  className="text-muted small">Created on: <span className="font-weight-bold text-dark">22 Feb 2021</span></p>
                                                    </Media.Body>
                                                </Media>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <Media>
                                                    <Image fluid width="160" src={Bloghumbnial}/>
                                                    <Media.Body className="pl-4">
                                                        <h5 className="font-weight-bold">Meeting Minutes</h5>
                                                        <p  className="text-muted mb-1">Learn more about these example boxes.</p>
                                                        <p  className="text-muted small">Created on: <span className="font-weight-bold text-dark">22 Feb 2021</span></p>
                                                    </Media.Body>
                                                </Media>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <Media>
                                                    <Image fluid width="160" src={Bloghumbnial}/>
                                                    <Media.Body className="pl-4">
                                                        <h5 className="font-weight-bold">Meeting Minutes</h5>
                                                        <p  className="text-muted mb-1">Learn more about these example boxes.</p>
                                                        <p  className="text-muted small">Created on: <span className="font-weight-bold text-dark">22 Feb 2021</span></p>
                                                    </Media.Body>
                                                </Media>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <Media>
                                                    <Image fluid width="160" src={Bloghumbnial}/>
                                                    <Media.Body className="pl-4">
                                                        <h5 className="font-weight-bold">Meeting Minutes</h5>
                                                        <p  className="text-muted mb-1">Learn more about these example boxes.</p>
                                                        <p  className="text-muted small">Created on: <span className="font-weight-bold text-dark">22 Feb 2021</span></p>
                                                    </Media.Body>
                                                </Media>
                                            </ListGroupItem>
                                        </ListGroup>
                                    </Scrollbars>
                                    </Card.Body>
                                    <Card.Footer className="d-flex justify-content-between">
                                        
                                    <Button to="" className="btn-sm btn-primary">
                                            View Details
                                        </Button>
                                        <Button to="" className="btn-sm btn-primary-1">
                                            Delete
                                        </Button>
                                       
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col lg={12}>
                                <Card className="messager">
                                    <Card.Header className="d-flex bg-white justify-content-between  align-items-center">
                                        <p className="font-weight-semi-bold mb-0">
                                            <span className="text-muted small text-uppercase">Messager</span>
                                            <span className="font-weight-bold d-block ">Talk with kate</span>
                                        </p>
                                        


                                        <span className="">
                                        <Button to="" className="  btn-circle">  
                                            +
                                            </Button>
                                        </span>
                                    </Card.Header>
                                    <Card.Body className="pl-0 pr-0">
                                    <Scrollbars autoHide  autoHideTimeout={200} autoHideDuration={200} className="height-250">
                                        <ListGroup>
                                            <ListGroupItem className="received-message">
                                                <Media>
                                                    <Image fluid rounded width="60" src={profileIcon}/>
                                                    <Media.Body className="">
                                                        <div className="message">
                                                            <p >Hello Kenny<br/>
                                                                How are you?
                                                            </p>
                                                            
                                                        </div>
                                                      
                                                        <p  className="text-muted time small">11:01 AM | Yesterday</p>
                                                    </Media.Body>
                                                </Media>
                                            </ListGroupItem>
                                            <ListGroupItem className="sent-message">
                                                <Media>
                                                    
                                                    <Media.Body className="">
                                                        <div className="message">
                                                            <p >I'm Good <br/> How are you?
                                                            </p>
                                                        </div>
                                                      
                                                        <p  className="text-muted time small">11:01 AM | Yesterday</p>
                                                    </Media.Body>
                                                    <Image fluid rounded width="60" src={profileIcon}/>
                                                </Media>
                                            </ListGroupItem>
                                            <ListGroupItem className="received-message">
                                                <Media>
                                                    <Image fluid rounded width="60" src={profileIcon}/>
                                                    <Media.Body className="">
                                                        <div className="message">
                                                            <p >I'm also good <br/>
                                                                Can you send photo?
                                                            </p>
                                                            
                                                        </div>
                                                      
                                                        <p  className="text-muted time small">11:01 AM | Yesterday</p>
                                                    </Media.Body>
                                                </Media>
                                            </ListGroupItem>
                                            <ListGroupItem className="sent-message">
                                                <Media>
                                                    
                                                    <Media.Body className="">
                                                        <div className="message">
                                                            <p >Yes, Sure 
                                                                
                                                                <Image src={Bloghumbnial} width="200" fluid alt=""/>
                                                            </p>
                                                        </div>
                                                      
                                                        <p  className="text-muted time small">11:01 AM | Yesterday</p>
                                                    </Media.Body>
                                                    <Image fluid rounded width="60" src={profileIcon}/>
                                                </Media>
                                            </ListGroupItem>
                                        </ListGroup>
                                    </Scrollbars>
                                    </Card.Body>
                                    <Card.Footer >
                                        <div className="pt-3">
                                            <FormControl className="mb-3" placeholder="Write your message and hit enter to send...
"></FormControl>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                        <div>
                                            <Button className="p-0 mw-auto border-0 mr-3" variant="outline-primary bg-none">
                                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="file-audio" class="text-success" style={{width:18+"px"}} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M369.941 97.941l-83.882-83.882A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v416c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48V131.882a48 48 0 0 0-14.059-33.941zM332.118 128H256V51.882L332.118 128zM48 464V48h160v104c0 13.255 10.745 24 24 24h104v288H48zm144-76.024c0 10.691-12.926 16.045-20.485 8.485L136 360.486h-28c-6.627 0-12-5.373-12-12v-56c0-6.627 5.373-12 12-12h28l35.515-36.947c7.56-7.56 20.485-2.206 20.485 8.485v135.952zm41.201-47.13c9.051-9.297 9.06-24.133.001-33.439-22.149-22.752 12.235-56.246 34.395-33.481 27.198 27.94 27.212 72.444.001 100.401-21.793 22.386-56.947-10.315-34.397-33.481z"></path></svg>

                                            </Button>
                                        
                                        
                                            <Button className="p-0 mw-auto border-0 mr-3" variant="outline-primary bg-none">
                                            
                                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="file-video" class="text-danger" style={{width:18+"px"}} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M369.941 97.941l-83.882-83.882A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v416c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48V131.882a48 48 0 0 0-14.059-33.941zM332.118 128H256V51.882L332.118 128zM48 464V48h160v104c0 13.255 10.745 24 24 24h104v288H48zm228.687-211.303L224 305.374V268c0-11.046-8.954-20-20-20H100c-11.046 0-20 8.954-20 20v104c0 11.046 8.954 20 20 20h104c11.046 0 20-8.954 20-20v-37.374l52.687 52.674C286.704 397.318 304 390.28 304 375.986V264.011c0-14.311-17.309-21.319-27.313-11.314z"></path></svg>

                                            </Button>
                                            <Button className="p-0 mw-auto border-0" variant="outline-primary bg-none">
                                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="file-excel" class="text-info" style={{width:18+"px"}} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm212-240h-28.8c-4.4 0-8.4 2.4-10.5 6.3-18 33.1-22.2 42.4-28.6 57.7-13.9-29.1-6.9-17.3-28.6-57.7-2.1-3.9-6.2-6.3-10.6-6.3H124c-9.3 0-15 10-10.4 18l46.3 78-46.3 78c-4.7 8 1.1 18 10.4 18h28.9c4.4 0 8.4-2.4 10.5-6.3 21.7-40 23-45 28.6-57.7 14.9 30.2 5.9 15.9 28.6 57.7 2.1 3.9 6.2 6.3 10.6 6.3H260c9.3 0 15-10 10.4-18L224 320c.7-1.1 30.3-50.5 46.3-78 4.7-8-1.1-18-10.3-18z"></path></svg>
                                            </Button>
                                        </div>
                                            <Button to="" className="btn-sm btn-primary">
                                                Send
                                            </Button>
                                        </div>
                                       
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col lg={12}>
                                <Card className="taskList">
                                    <Card.Header className="d-flex bg-white justify-content-between  align-items-center">
                                        <p className="font-weight-semi-bold mb-0">
                                            <span className="text-muted small text-uppercase">Task</span>
                                            <span className="font-weight-bold d-block ">Todays List</span>
                                        </p>
                                        


                                        <span className="">
                                        <Button to="" className="  bg-light text-warning p-2 border-0  badge ">  
                                            New Task
                                            </Button>
                                        </span>
                                    </Card.Header>
                                    <Card.Body className="">
                                    <div class="custom-control custom-checkbox custom-control-inline mb-4">
                                        <input type="checkbox" id="custom-inline-checkbox" class="custom-control-input"/>
                                        <label title="" for="custom-inline-checkbox" class="custom-control-label">
                                            <span className="text-dark">Finish taks for today</span>
                                            <span className="d-block text-muted font-weight-light">But i must explain to you how all this mistaken idea
                                            </span>
                                        </label>
                                    </div>
                                    <Scrollbars autoHide  autoHideTimeout={200} autoHideDuration={200} className="height-300">
                                        <p className="font-weight-bold mb-0">Blinded by desire</p>
                                        <p className="text-muted">A wonderful serenity has taken possession.</p>
                                        

                                        <ListGroup>
                                            <ListGroupItem >
                                                <Media>
                                                    <i className="icon">
                                                    <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M5 5h4v6H5zm10 8h4v6h-4zM5 17h4v2H5zM15 5h4v2h-4z" opacity=".3"></path><path d="M3 13h8V3H3v10zm2-8h4v6H5V5zm8 16h8V11h-8v10zm2-8h4v6h-4v-6zM13 3v6h8V3h-8zm6 4h-4V5h4v2zM3 21h8v-6H3v6zm2-4h4v2H5v-2z"></path></svg>
                                                    </i>
                                                    <Media.Body className="">
                                                        <p className="font-weight-bold h6 mb-0">1884</p>
                                                        <p className="text-muted ">A wonderful serenity has taken possession. A wonderful serenity has taken possession.</p>
                                                    </Media.Body>
                                                </Media>
                                            </ListGroupItem>
                                            <ListGroupItem >
                                                <Media>
                                                    <i className="icon">
                                                    <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M5 5h4v6H5zm10 8h4v6h-4zM5 17h4v2H5zM15 5h4v2h-4z" opacity=".3"></path><path d="M3 13h8V3H3v10zm2-8h4v6H5V5zm8 16h8V11h-8v10zm2-8h4v6h-4v-6zM13 3v6h8V3h-8zm6 4h-4V5h4v2zM3 21h8v-6H3v6zm2-4h4v2H5v-2z"></path></svg>
                                                    </i>
                                                    <Media.Body className="">
                                                        <p className="font-weight-bold h6 mb-0">1884</p>
                                                        <p className="text-muted">A wonderful serenity has taken possession. A wonderful serenity has taken possession.</p>
                                                    </Media.Body>
                                                </Media>
                                            </ListGroupItem>
                                            <ListGroupItem >
                                                <Media>
                                                    <i className="icon">
                                                    <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M5 5h4v6H5zm10 8h4v6h-4zM5 17h4v2H5zM15 5h4v2h-4z" opacity=".3"></path><path d="M3 13h8V3H3v10zm2-8h4v6H5V5zm8 16h8V11h-8v10zm2-8h4v6h-4v-6zM13 3v6h8V3h-8zm6 4h-4V5h4v2zM3 21h8v-6H3v6zm2-4h4v2H5v-2z"></path></svg>
                                                    </i>
                                                    <Media.Body className="">
                                                        <p className="font-weight-bold h6 mb-0">1884</p>
                                                        <p className="text-muted">A wonderful serenity has taken possession. A wonderful serenity has taken possession.</p>
                                                    </Media.Body>
                                                </Media>
                                            </ListGroupItem>
                                            <ListGroupItem >
                                                <Media>
                                                    <i className="icon">
                                                    <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M5 5h4v6H5zm10 8h4v6h-4zM5 17h4v2H5zM15 5h4v2h-4z" opacity=".3"></path><path d="M3 13h8V3H3v10zm2-8h4v6H5V5zm8 16h8V11h-8v10zm2-8h4v6h-4v-6zM13 3v6h8V3h-8zm6 4h-4V5h4v2zM3 21h8v-6H3v6zm2-4h4v2H5v-2z"></path></svg>
                                                    </i>
                                                    <Media.Body className="">
                                                        <p className="font-weight-bold h6 mb-0">1884</p>
                                                        <p className="text-muted">A wonderful serenity has taken possession. A wonderful serenity has taken possession.</p>
                                                    </Media.Body>
                                                </Media>
                                            </ListGroupItem>
                                            <ListGroupItem >
                                                <Media>
                                                    <i className="icon">
                                                    <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M5 5h4v6H5zm10 8h4v6h-4zM5 17h4v2H5zM15 5h4v2h-4z" opacity=".3"></path><path d="M3 13h8V3H3v10zm2-8h4v6H5V5zm8 16h8V11h-8v10zm2-8h4v6h-4v-6zM13 3v6h8V3h-8zm6 4h-4V5h4v2zM3 21h8v-6H3v6zm2-4h4v2H5v-2z"></path></svg>
                                                    </i>
                                                    <Media.Body className="">
                                                        <p className="font-weight-bold h6 mb-0">1884</p>
                                                        <p className="text-muted">A wonderful serenity has taken possession. A wonderful serenity has taken possession.</p>
                                                    </Media.Body>
                                                </Media>
                                            </ListGroupItem>
                                        </ListGroup>
                                    </Scrollbars>
                                    <div className="text-center pt-3">
                                            <Link to="" className="">View completed task <span className="text-dark opacity-60">(559)</span></Link>
                                    </div>
                                    </Card.Body>
                                    <Card.Footer className="bg-white border-0">
                                        <div className="pt-3">
                                            <FormControl className="mb-3" placeholder="Add new task..."></FormControl>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                        <div>
                                            <Button className="p-0 mw-auto border-0 mr-3" variant="outline-primary bg-none">
                                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="file-audio" class="text-success" style={{width:18+"px"}} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M369.941 97.941l-83.882-83.882A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v416c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48V131.882a48 48 0 0 0-14.059-33.941zM332.118 128H256V51.882L332.118 128zM48 464V48h160v104c0 13.255 10.745 24 24 24h104v288H48zm144-76.024c0 10.691-12.926 16.045-20.485 8.485L136 360.486h-28c-6.627 0-12-5.373-12-12v-56c0-6.627 5.373-12 12-12h28l35.515-36.947c7.56-7.56 20.485-2.206 20.485 8.485v135.952zm41.201-47.13c9.051-9.297 9.06-24.133.001-33.439-22.149-22.752 12.235-56.246 34.395-33.481 27.198 27.94 27.212 72.444.001 100.401-21.793 22.386-56.947-10.315-34.397-33.481z"></path></svg>

                                            </Button>
                                        
                                        
                                            <Button className="p-0 mw-auto border-0 mr-3" variant="outline-primary bg-none">
                                            
                                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="file-video" class="text-danger" style={{width:18+"px"}} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M369.941 97.941l-83.882-83.882A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v416c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48V131.882a48 48 0 0 0-14.059-33.941zM332.118 128H256V51.882L332.118 128zM48 464V48h160v104c0 13.255 10.745 24 24 24h104v288H48zm228.687-211.303L224 305.374V268c0-11.046-8.954-20-20-20H100c-11.046 0-20 8.954-20 20v104c0 11.046 8.954 20 20 20h104c11.046 0 20-8.954 20-20v-37.374l52.687 52.674C286.704 397.318 304 390.28 304 375.986V264.011c0-14.311-17.309-21.319-27.313-11.314z"></path></svg>

                                            </Button>
                                            <Button className="p-0 mw-auto border-0" variant="outline-primary bg-none">
                                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="file-excel" class="text-info" style={{width:18+"px"}} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm212-240h-28.8c-4.4 0-8.4 2.4-10.5 6.3-18 33.1-22.2 42.4-28.6 57.7-13.9-29.1-6.9-17.3-28.6-57.7-2.1-3.9-6.2-6.3-10.6-6.3H124c-9.3 0-15 10-10.4 18l46.3 78-46.3 78c-4.7 8 1.1 18 10.4 18h28.9c4.4 0 8.4-2.4 10.5-6.3 21.7-40 23-45 28.6-57.7 14.9 30.2 5.9 15.9 28.6 57.7 2.1 3.9 6.2 6.3 10.6 6.3H260c9.3 0 15-10 10.4-18L224 320c.7-1.1 30.3-50.5 46.3-78 4.7-8-1.1-18-10.3-18z"></path></svg>
                                            </Button>
                                        </div>
                                            <Button to="" className="btn-sm btn-primary">
                                                <span className="font-weight-bold h6 mr-1">+</span> Create new task
                                            </Button>
                                        </div>
                                       
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col lg={12}>
                                <Card className="p-4 last-section">
                                    <Row>
                                        <Col md={4}>
                                            <div className="pb-3 d-flex justify-content-between align-items-center">
                                                <div>
                                                    <span className="text-dark  font-weight-bold">Deliveries</span>
                                                    <span className="text-muted  d-block">Total deliveries
</span>
                                                </div>
                                                <div className="">
                                                    <span className="text-danger font-weight-bold h3">23.485</span>
                                                </div>
                                            </div>
                                            <ProgressBar variant="light" className="progress-bar-sm my-2 bg-primary" now={50}/>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <span className=" mb-0 text-muted opacity-60 ">Target</span>
                                                
                                                <span className=" mb-0 text-muted opacity-60 ">100%</span>
                                            </div>
                                        </Col>
                                        <Col md={4} >
                                            <div className="pb-3  d-flex justify-content-between align-items-center">
                                                <div className="">
                                                    <span className="text-dark font-weight-bold">Order</span>
                                                    <span className="text-muted  d-block">Total orders to date
</span> 


                                                </div>
                                                <div className="">
                                                    <span className="text-info font-weight-bold h3">$23.485</span>
                                                </div>
                                            </div>
                                            <div className="">
                                            <ProgressBar variant="light" className="progress-bar-sm my-2 bg-primary " now={50}/>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <span className=" mb-0 text-muted opacity-60 ">Target</span>
                                                
                                                <span className=" mb-0 text-muted opacity-60 ">100%</span>
                                            </div>
                                            </div>
                                        </Col>
                                        <Col md={4}>
                                            <div className="pb-3 d-flex justify-content-between align-items-center">
                                                <div>
                                                <span className="text-dark font-weight-bold">Customer</span>
                                                    <span className="text-muted  d-block">Total customer to date
                                                </span> 


                                                </div>
                                                <div className="">
                                                    <span className="text-success font-weight-bold h3">$2,3M</span>
                                                </div>
                                            
                                            </div>
                                            <ProgressBar  className="progress-bar-sm my-2 customer bg-dark" now={50}/>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <span className=" mb-0 text-muted opacity-60 ">Target</span>
                                                
                                                <span className=" mb-0 text-muted opacity-60 ">100%</span>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            
                        </Row>
                    </Container>
            </section>
            </>
        )
    }
}
export default Dashboard