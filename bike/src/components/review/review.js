import React, { Component} from 'react';
import { FaStar } from 'react-icons/fa';
import DropZone from "../dropzone/DropZone";
import { Row, Col, Card, Button, CardHeader, CardBody } from 'reactstrap';


class Review extends Component {
  static defaultProps = {
    info: {
      name: '익명',
      level_score: 0,
      view_score: 0,
      safety_score: 0,
      comment: '',
      id: 0,
      date: '',
      dist: 0,
    },
  }

  state = {
      editing: false,
      name: '',
      level_score: '',
      view_score: '',
      safety_score: '',
      comment: '',
      date: '',
      dist: '',
  }

  handleRemove = () => {
    // 삭제 버튼이 클릭되면 onRemove 에 id 넣어서 호출
    const { info, onRemove } = this.props;
    onRemove(info.id);
  }

  handleToggleEdit = () => {
      const { editing } = this.state;
      this.setState({ editing: !editing });
  }

  handleChange = (e) => {
      const { name, value } = e.target;
      this.setState({
          [name]: value
      });
  }

  componentDidUpdate(prevProps, prevState) {
      const { info, onUpdate } = this.props;
      if(!prevState.editing && this.state.editing) {
          this.setState({
              level_score: info.level_score,
              view_score: info.view_score,
              safety_score: info.safety_score,
          })
      }

      if(prevState.editing && !this.state.editing) {
          onUpdate(info.id, {
            level_score: this.state.level_score,
            view_score: this.state.view_score,
            safety_score: this.state.safety_score,
          });
      }
  }

  render() {
    const { editing } = this.state;

    const {
        name, level_score, view_score, safety_score, comment, dist, date
      } = this.props.info;
      
      const style = {
          paddingTop: "20px",
          paddingLeft: "30px",
      };

    if (editing) {
        return (
            <div>
                <Card className="card-profile shadow" style={{width:"700px", height:"250px", margin:"20px"}}>
                <Row className="justify-content-center">
                    <Col xs="auto">
                        <div style={style}>
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                            <img
                                alt="..."
                                className="rounded-circle"
                                src="/profile_pic.png"
                                width="70" height="70" alt="cam"
                            />
                            </a>
                        </div>
                    </Col>
                    <Col xs="auto">
                        <div style={{fontSize:"30px", textAlign:"left", paddingTop:"20px"}}>{name}</div>
                        <div style={{fontSize:"15px", textAlign:"left"}}>총 {dist} km</div>
                    </Col>
                    <Col xs="auto">
                    <div style={{fontSize:"15px", textAlign:"left", paddingTop:"25px"}}>{date}</div>
                    </Col>
                    <Col xs="auto">
                        <div>
                        <Button
                            className="mr-4"
                            color="warning"
                            href="#pablo"
                            onClick={this.handleToggleEdit}
                            size="sm"
                            style={{marginTop:"20px", marginLeft:"220px"}}
                        >
                            <img src="/edit.png" alt="my image" width="20" height="20"></img>
                        </Button>
                        <Button
                            className="mr-4"
                            color="danger"
                            href="#pablo"
                            onClick={this.handleRemove}
                            size="sm"
                            style={{marginTop:"20px", marginRight:"30px"}}
                        >
                            <img src="/trash.png" alt="my image" width="20" height="20"></img>
                        </Button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs="auto">
                            <img src="./placeholder.png" width="150px" height="100px" style={{paddingLeft:"15px"}}></img>
                    </Col>
                    <Col xs="auto">
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
                    </Col>
                    <Col>
                    <div>
                        <input
                            value={this.state.comment}
                            type="textarea"
                            name="comment"
                            placeholder="이 경로에 대한 후기 작성"
                            onChange={this.handleChange}
                            style={{width:"160px", height:"80px"}}
                        />
                    </div>
                    <Button onClick={this.handleToggleEdit} style={{marginBottom:"10px", marginLeft:"230px"}}>적용</Button>
                    </Col>  
                </Row>
                </Card>  
            </div>
        );
    }

    return (
        <div>
            <Card className="card-profile shadow" style={{width:"700px", height:"250px", margin:"20px"}}>
                <Row className="justify-content-center">
                    <Col xs="auto">
                        <div style={style}>
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                            <img
                                alt="..."
                                className="rounded-circle"
                                src="/profile_pic.png"
                                width="70" height="70" alt="cam"
                            />
                            </a>
                        </div>
                    </Col>
                    <Col xs="auto">
                        <div style={{fontSize:"30px", textAlign:"left", paddingTop:"20px"}}>{name}</div>
                        <div style={{fontSize:"15px", textAlign:"left"}}>총 {dist} km</div>
                    </Col>
                    <Col xs="auto">
                    <div style={{fontSize:"15px", textAlign:"left", paddingTop:"25px"}}>{date}</div>
                    </Col>
                    <Col>
                        <div>
                        <Button
                            className="mr-4"
                            color="warning"
                            href="#pablo"
                            onClick={this.handleToggleEdit}
                            size="sm"
                            style={{marginTop:"20px", marginLeft:"220px"}}
                        >
                            <img src="/edit.png" alt="my image" width="20" height="20"></img>
                        </Button>
                        <Button
                            className="mr-4"
                            color="danger"
                            href="#pablo"
                            onClick={this.handleRemove}
                            size="sm"
                            style={{marginTop:"20px", marginRight:"30px"}}
                        >
                            <img src="/trash.png" alt="my image" width="20" height="20"></img>
                        </Button>
                        </div>
                    </Col>
                </Row>
                <CardBody className="pt-0 pt-md-4">
                    <Row>
                        <Col xs="auto">
                            <img src="./placeholder.png" width="150px" height="100px"></img>
                        </Col>
                        <Col xs="auto">
                            <div>
                                    난이도
                                    {[...Array(5)].map((star, i) => {
                                    const ratingValue = i + 1;

                                    return (
                                    <label>
                                        <input type="radio" name="level_score" value={ratingValue} />
                                        <FaStar className="star" color={ratingValue <= level_score ? "#ffc107" : "#e4e5e9" } size={20}/>
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
                                        <input type="radio" name="view_score" value={ratingValue} />
                                        <FaStar className="star" color={ratingValue <= view_score ? "#ffc107" : "#e4e5e9" } size={20}/>
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
                                        <input type="radio" name="safety_score" value={ratingValue} />
                                        <FaStar className="star" color={ratingValue <= safety_score ? "#ffc107" : "#e4e5e9" } size={20}/>
                                    </label>
                                    );
                                })}
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <p>
                                    {comment}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </CardBody>
            </Card>  
        </div>  
    );
  }
}

export default Review;