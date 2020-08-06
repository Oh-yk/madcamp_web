import React, { Component } from 'react';

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
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="이름"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />
        <input
          placeholder="어려움"
          value={this.state.level_score}
          onChange={this.handleChange}
          name="phone"
        />
        <button type="submit">등록</button>
      </form>
    );
  }
}

export default ReviewForm;