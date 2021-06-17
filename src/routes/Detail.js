import React from 'react';

class Detail extends React.Component {
    componentDidMount(){//카멜표기
        const {location,history}=this.props;//location과 history 구조분해할당으로 얻음
        if(location.state===undefined){//state가 넘어오지 않았다면 ==클릭으로 온게 아니라 주소치고 왔다면
            history.push('/'); // 기본 화면으로 돌려보냄
        }

}
render(){
    const {location} = this.props;
    if(location.state){
        return <span>{location.state.title}</span>
    }else{
        return null;
    }
 
}
}

export default Detail;