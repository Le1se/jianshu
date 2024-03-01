import React, { Component} from 'react';
import {RecommandWrapper, RecommandItem} from '../style';
import {connect} from 'react-redux';

class Recommand extends Component {
    render(){
        return (
            <RecommandWrapper>
                {
                    this.props.list.map((item)=>{
                        return <RecommandItem imgUrl={item.get('imgUrl')} key={item.get('id')}/>
                    })
                }
                
            </RecommandWrapper>
            
        )
    }
}
const mapState=(state)=>({
   list: state.home.get('recommendList') 
})
export default connect(mapState)(Recommand);