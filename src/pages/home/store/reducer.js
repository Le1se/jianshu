import { fromJS } from 'immutable';
import * as constants from './constants';


const defaultState = fromJS({
    topicList:[],
    articleList:[],
    recommendList:[],
    articlePage:1,
    showScroll: false
});


export default(state=defaultState, action) =>{
    switch(action.type){
        case constants.CHANGE_HOME_DATA:
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList:fromJS(action.articleList),
                recommendList:fromJS(action.recommendList)
            })
        case constants.ADD_ARTICLE_LIST:
            // Assuming action.list is a regular JS array. If it's an Immutable List, you don't need to convert it.
            // Convert action.list to an Immutable List if it's not already
            // Use the update method to access and modify the articleList within the state
            
            return state.merge({
                articleList: state.get('articleList').concat(fromJS(action.list)),
                articlePage: action.nextPage
            })
        case constants.TOGGLE_SCROLL_TOP:
            return state.set('showScroll',action.show);
        default:
            return state;
    }
}