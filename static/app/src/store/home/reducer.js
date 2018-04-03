/**
 * Created by Administrator on 2018/3/7.
 */
import {dispatch} from '../store';
let defaultState = {
    data:[],
    menuList:[
        {
            iconCls:'icon-quanbu-copy',
            text:'全部',
            path:'/p'
        },
        {
            iconCls:'icon-bokeyuan',
            text:'博客',
            path:'/p'
        },
        {
            iconCls:'icon-shu1',
            text:'书籍',
            path:'/p'
        },
        {
            iconCls:'icon-quanbu-copy',
            text:'全部',
            path:'/p'
        },
        {
            iconCls:'icon-bokeyuan',
            text:'博客',
            path:'/p'
        },
        {
            iconCls:'icon-shu1',
            text:'书籍',
            path:'/p'
        },
        {
            iconCls:'icon-quanbu-copy',
            text:'全部',
            path:'/p'
        },
        {
            iconCls:'icon-bokeyuan',
            text:'博客',
            path:'/p'
        },
        {
            iconCls:'icon-shu1',
            text:'书籍',
            path:'/p'
        },
        {
            iconCls:'icon-bokeyuan',
            text:'博客',
            path:'/p'
        },
        {
            iconCls:'icon-shu1',
            text:'书籍',
            path:'/p'
        },
        {
            iconCls:'icon-shu1',
            text:'全部',
            path:'/p'
        }
    ]
};

export let homeData = (state = defaultState,action = {}) => {
    wt.execFunc(reducer[action.type],state,action);
    return wt.extend(true,{},state);
};

let reducer = {
    changeHomeNav(state,action){
        let {menuList} = state;
        let {index} = action;
        menuList.forEach((item,i) => {
            item.selected = i === index;
        });
        requestData({
            type:menuList[index].type
        });
        state.isLoading = true;
    },
    requestHomeDataEnd(state,action){
        state.isLoading = false;
        state.data = action.data;
    }
};


const requestData = (params) => {
    $.ajax({
        url:'/getHomeViewList',
        data:params,
        success:(data) => {
            dispatch({
                type:'requestHomeDataEnd',
                data:data
            });
        }
    });
};