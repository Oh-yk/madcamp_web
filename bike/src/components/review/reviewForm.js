import React, { Component } from 'react';
import { FaStar } from 'react-icons/fa';
import DropZone from "../dropzone/DropZone";
import { Row, Col, Card, Button, CardHeader, CardBody } from 'reactstrap';

class ReviewForm extends Component {
  state = {
    name: '',
    level_score: 0,
    view_score: 0,
    safety_score: 0,
    comment:'',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();
    // 상태값을 onCreate 를 통하여 부모에게 전달
    this.props.onCreate(this.state);
    // 상태 초기화
    this.setState({
        name: '',
        level_score: '',
        view_score: '',
        safety_score: '',
        comment:'',
    })
  }
  render() {
    return (
      <form>
          <Row>
              <Col>
                  <DropZone></DropZone>
              </Col>
              <Col>
                  <div>
                          난이도
                          {[...Array(5)].map((star, i) => {
                          const ratingValue = i + 1;

                          return (
                          <label>
                              <input type="radio" name="level_score" value={ratingValue} onClick={this.handleChange}/>
                              <FaStar className="star" color={ratingValue <= this.state.level_score ? "#ffc107" : "#e4e5e9" } size={20}/>
                          </label>
                          );
                      })}
                  </div>
                  <div>
                          경치
                          {[...Array(5)].map((star, i) => {
                          const ratingValue = i + 1;

                          return (
                          <label>
                              <input type="radio" name="view_score" value={ratingValue} onClick={this.handleChange}/>
                              <FaStar className="star" color={ratingValue <= this.state.view_score ? "#ffc107" : "#e4e5e9" } size={20}/>
                          </label>
                          );
                      })}
                  </div>
                  <div>
                          안전
                          {[...Array(5)].map((star, i) => {
                          const ratingValue = i + 1;

                          return (
                          <label>
                              <input type="radio" name="safety_score" value={ratingValue} onClick={this.handleChange}/>
                              <FaStar className="star" color={ratingValue <= this.state.safety_score ? "#ffc107" : "#e4e5e9" } size={20}/>
                          </label>
                          );
                      })}
                  </div>
                  <div className="text-left">
                      <hr className="my-4" />
                      <input onClick={this.handleChange}/>
                  </div>
              </Col>
          </Row>
      </form>
    );
  }
}

export default ReviewForm;