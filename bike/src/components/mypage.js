import React, { Component, useState } from 'react';
import DropZone from "./dropzone/DropZone";
import { Collapse, Container, Media,  Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, FormGroup, Input, TabContent,
    TabPane, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Form, CardHeader, UncontrolledDropdown, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';


class MyPage extends Component{

    static defaultProps = {
        info: {
          helmet: '헬멧',
          gloves: '장갑',
          clothes: '옷',
          water: '물병',
          others: '기타',
        },
      }
    
      state = {
        helmet: '',
        gloves: '',
        clothes: '',
        water: '',
        others: '',
      }
    
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

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
                <Container className="mt--7" fluid style={{width: "1200px"}}>
                    <Navbar color="faded" light>
                    </Navbar>
                    <Form>
                        <Row>
                            <Col xs="2">
                                <div className="content">
                                    <img src="/profile_picture.jpg" width="250" height="200" alt="cam" style={{marginLeft:"85px"}} className="rounded-circle"></img>
                                </div>
                            </Col>
                            <Col style={{paddingLeft: "100px"}}>
                                <Nav tabs style={{width: "200px"}}>
                                            <NavItem>
                                                <NavLink>
                                                    내 정보
                                                </NavLink>
                                            </NavItem>
                                    </Nav>
                                <Card body className="card-profile shadow" style={{width: "875px", height:"215px", paddingLeft: "40px"}}>
                                    <Row>
                                        <Col sm="auto" >
                                                <label className="field-name">
                                                이름
                                                </label>
                                            <FormGroup>
                                                <label className="field-result">
                                                오유경
                                                </label>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="auto">
                                                <label className="field-name">
                                                전화번호
                                                </label>
                                            <FormGroup>
                                                <label className="field-result">
                                                010-1234-5678
                                                </label>
                                            </FormGroup>
                                        </Col>
                                        <Col>
                                                <label className="field-name">
                                                가입일
                                                </label>
                                            <FormGroup>
                                                <label className="field-result">
                                                2020.01.09
                                                </label>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm="auto">
                                                <label className="field-name">
                                                성별
                                                </label>
                                            <FormGroup>
                                                <label className="field-result">
                                                여
                                                </label>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="auto">
                                                <label className="field-name">
                                                나이
                                                </label>
                                            <FormGroup>
                                                <label className="field-result">
                                                22
                                                </label>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="auto">
                                                <label className="field-name">
                                                거주시
                                                </label>
                                            <FormGroup>
                                                <label className="field-result">
                                                대전광역시
                                                </label>
                                            </FormGroup>
                                        </Col>
                                        <Col>
                                                <label className="field-name">
                                                이메일
                                                </label>
                                            <FormGroup>
                                                <label className="field-result">
                                                bikelover@gmail.com
                                                </label>
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
                                                경로보기
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem>경로 1</DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="my-page-section" style={{paddingTop:"20px"}}>
                            <Col>
                                <Card>
                                    <CardHeader>내 장비</CardHeader>
                                    <CardBody>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <Input addon type="checkbox" aria-label="Checkbox for following text input" /> 헬멧
                                            </InputGroupText>
                                            </InputGroupAddon>
                                            <Input placeholder="헬멧"/>
                                        </InputGroup>
                                        <br />
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <Input addon type="checkbox" aria-label="Checkbox for following text input" /> 장갑 
                                            </InputGroupText>
                                            </InputGroupAddon>
                                            <Input placeholder="장갑" />
                                        </InputGroup>
                                        <br />
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <Input addon type="checkbox" aria-label="Checkbox for following text input" /> 외투
                                            </InputGroupText>
                                            </InputGroupAddon>
                                            <Input placeholder="옷" />
                                        </InputGroup>
                                        <br />
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <Input addon type="checkbox" aria-label="Checkbox for following text input" /> 물병
                                            </InputGroupText>
                                            </InputGroupAddon>
                                            <Input placeholder="물병" />
                                        </InputGroup>
                                        <br />
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <Input addon type="checkbox" aria-label="Checkbox for following text input" /> 기타
                                            </InputGroupText>
                                            </InputGroupAddon>
                                            <Input placeholder="기타" />
                                        </InputGroup>
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