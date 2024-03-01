import React, { Component} from 'react';
import Topic from './components/Topic';
import Recommand from './components/Recommand';
import List from './components/List';
import Writer from './components/Writer';
import {HomeWrapper, HomeLeft, HomeRight} from './style';
import axios from 'axios';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import {BackTop} from './style';

class Home extends Component {
    handleScrollTop(){
        window.scrollTo(0,0);
    }
    render(){
        return (
            <HomeWrapper>
                <HomeLeft>
                    
                    <img 
                        className='banner-img' 
                        src="//live.staticflickr.com/65535/53432222191_eb581cb0a0_k.jpg" 
                        alt="" />

                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    
                    <Recommand />
                    <Writer />
                </HomeRight>
                {this.props.showScroll?
                    <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>:null
                }
                
            </HomeWrapper>
        )
    }
    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvent();
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScrollTopShow)
    }

    bindEvent(){
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }
}
const mapState=(state)=>({
    showScroll: state.home.get('showScroll')
})
const mapDispatch=(dispatch)=>({
    changeHomeData(){
        const action= actionCreators.getHomeInfo();
        dispatch(action);
        
    },
    changeScrollTopShow(){
        if(document.documentElement.scrollTop>100){
            dispatch(actionCreators.toggleTopShow(true))
        }else{
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
})
export default connect(mapState,mapDispatch)(Home);