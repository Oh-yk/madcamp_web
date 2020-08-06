import React, { Component } from 'react';

class MyPage extends Component{
    // state = {
    //     name : "", 
    //     id : ""
    // }
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
        return(
            <h1>{this.props.match.params.name}</h1>
        )
    }//실제 원하는 화면 띄우기
}
export default MyPage;