import React, { Component} from 'react';
import Topic from './components/Topic';
import Recommand from './components/Recommand';
import List from './components/List';
import Writer from './components/Writer';
import {HomeWrapper, HomeLeft, HomeRight} from './style';
import axios from 'axios';
import {connect} from 'react-redux';

class Home extends Component {
    render(){
        return (
            <HomeWrapper>
                <HomeLeft>
                    HomeL
                    <img 
                        className='banner-img' 
                        src="//live.staticflickr.com/65535/53432222191_eb581cb0a0_k.jpg" 
                        alt="" />

                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    homeR
                    <Recommand />
                    <Writer />
                </HomeRight>
                
            </HomeWrapper>
        )
    }
    componentDidMount(){
        axios.get('/api/home.json').then((res)=>{
        const result=res.data.data
        const action={
            type: 'change_home_data',
            topicList: result.topicList,
            articleList: result.articleList,
            recommendList: result.recommendList
        }
        this.props.changeHomeData(action);
        })
    }
}
const mapDispatch=(dispatch)=>({
    changeHomeData(action){
        dispatch(action);
    }
})
export default connect(null,mapDispatch)(Home);