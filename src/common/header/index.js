import React , {Component}from 'react';
import {connect} from 'react-redux'
import { CSSTransition } from 'react-transition-group';
import {actionCreators} from './store'
import { 
    HeaderWrapper, 
    Logo, 
    Nav, 
    NavItem, 
    NavSearch, 
    Addition, 
    Button, 
    SearchWrapper, 
    SearchInfo, 
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
} from './style';

class Header extends Component{

    getListArea(){
        const{focused, list, page, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage,totalPage} = this.props;
        const newList=list.toJS();
        const pageList=[];
        if(newList.length){
            for(let i=(page-1)*10;i<page*10&&newList[i]!=null;i++){
                pageList.push(
                    <SearchInfoItem key={newList[i]}>
                        {newList[i]}
                    </SearchInfoItem>
                )
            }
        }
        
        if(focused || mouseIn){
            return(
                <SearchInfo 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                            <SearchInfoTitle>
                                热门搜索
                                <SearchInfoSwitch onClick={()=>handleChangePage(page,totalPage)}>
                                    换一批
                                </SearchInfoSwitch>
                            </SearchInfoTitle>
                            <SearchInfoList>
                                {
                                    pageList
                                }
                            </SearchInfoList>
                            
                        </SearchInfo>
            )
        }else{
            return null
        }
    }

    render(){
        const {focused, handleInputBlur,handleInputFocus,list}=this.props;
        return (
            <HeaderWrapper> 
                <Logo /> 
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载 App</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>Aa</NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch 
                                className={focused? 'focused':''}
                                onFocus={()=>handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        {this.getListArea()}
                    </SearchWrapper>
                    
                </Nav>
                <Addition>
                    <Button className=' writting'>写文章</Button>
                    <Button className= 'reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        );
    }
}


const mapStateToProps=(state)=>{
    return{
        
        //focused: state.getIn(["header","focused"])
        focused: state.header.get('focused'),
        list: state.header.get('list'),
        page: state.header.get('page'),
        totalPage: state.header.get('totalPage'),
        mouseIn: state.header.get('mouseIn')
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        handleInputFocus(list){ 
            if(list.size===0){
                dispatch(actionCreators.getList());
            }
            
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page,totalPage){
            if(page<totalPage){
                dispatch(actionCreators.changePage(page + 1));
            }else{
                dispatch(actionCreators.changePage(1));
            }
            
        }
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Header);