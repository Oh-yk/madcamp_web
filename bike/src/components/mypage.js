import React, { Component, useState } from 'react';
import DropZone from "./dropzone/DropZone";
import { Collapse, Container, Media,  Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, FormGroup, Input, TabContent,
    TabPane, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Form, CardHeader, UncontrolledDropdown } from 'reactstrap';


class MyPage extends Component{

    render(){
        
        if(this.props.match.params.id === "id"){
            return(
                <h1>로그인하세요</h1>
                )
        }
        else{
            return(
                this._LogOn()
                )
        }
    
    }

    _LogOn(){
            return (
                <Container className="mt--7" fluid>
                    <Navbar color="faded" light>
                        <NavbarBrand href="/" className="mr-auto">자전거를 타고 떠나다</NavbarBrand>
                    </Navbar>
                    <Form>
                        <Row>
                            <Col xs="2">
                                <div className="content">
                                    <DropZone />
                                </div>
                            </Col>
                            <Col>
                                <Nav tabs>
                                            <NavItem>
                                                <NavLink>
                                                    내 정보
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink>
                                                    내 기록
                                                </NavLink>
                                            </NavItem>
                                    </Nav>
                                <Card body className="card-profile shadow">
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <label className="field-name">
                                                이름
                                                </label>
                                            </FormGroup>
                                            <FormGroup>
                                                {this.props.match.params.name}
                                            </FormGroup>
                                        </Col>
                                        <Col>
                                            <FormGroup>
                                                <label className="field-name">
                                                전화번호
                                                </label>
                                            </FormGroup>
                                            <FormGroup>
                                                010-0000-0000
                                            </FormGroup>
                                        </Col>
                                        <Col>
                                            <FormGroup>
                                                <label className="field-name">
                                                가입일
                                                </label>
                                            </FormGroup>
                                            <FormGroup>
                                                2020.08.01
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                    <Col>
                                            <FormGroup>
                                                <label className="field-name">
                                                성별
                                                </label>
                                            </FormGroup>
                                            <FormGroup>
                                                여
                                            </FormGroup>
                                        </Col>
                                        <Col>
                                            <FormGroup>
                                                <label className="field-name">
                                                나이
                                                </label>
                                            </FormGroup>
                                            <FormGroup>
                                                22
                                            </FormGroup>
                                        </Col>
                                        <Col>
                                            <FormGroup>
                                                <label className="field-name">
                                                거주시
                                                </label>
                                            </FormGroup>
                                            <FormGroup>
                                                대전광역시
                                            </FormGroup>
                                        </Col>
                                        <Col>
                                            <FormGroup>
                                                <label className="field-name">
                                                이메일
                                                </label>
                                            </FormGroup>
                                            <FormGroup>
                                                hi@gmail.com
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="my-page-section">
                            <Col>
                                <Card>
                                    <CardHeader>내 경로</CardHeader>
                                    <CardBody>
                                        <UncontrolledDropdown>
                                            <DropdownToggle caret>
                                                Dropdown
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem header>Header</DropdownItem>
                                                <DropdownItem disabled>Action</DropdownItem>
                                                <DropdownItem>Another Action</DropdownItem>
                                                <DropdownItem divider />
                                                <DropdownItem>Another Action</DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="my-page-section">
                            <Col>
                                <Card>
                                    <CardHeader>내 장비</CardHeader>
                                    <CardBody>
                                        <Card>
                                            <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                                            <CardBody>
                                            <CardTitle>Card title</CardTitle>
                                            <CardSubtitle>Card subtitle</CardSubtitle>
                                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                            <Button>Button</Button>
                                            </CardBody>
                                        </Card>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="my-page-section">
                            <Col>
                                <Card>
                                    <CardHeader>내 찜목록</CardHeader>
                                    <CardBody>
                                        <Card>
                                            <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                                            <CardBody>
                                            <CardTitle>Card title</CardTitle>
                                            <CardSubtitle>Card subtitle</CardSubtitle>
                                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                            <Button>Button</Button>
                                            </CardBody>
                                        </Card>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            )
    }//실제 원하는 화면 띄우기
}
export default MyPage;