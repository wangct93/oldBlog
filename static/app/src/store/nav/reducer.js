/**
 * Created by Administrator on 2018/3/7.
 */
let defaultState = {
    list:[
        {
            iconCls:'icon-shu1',
            text:'首页',
            path:'/index'
        },
        // {
        //     iconCls:'icon-quanbu-copy',
        //     text:'全部',
        //     path:'/kb'
        // },
        // {
        //     iconCls:'icon-bokeyuan',
        //     text:'博客',
        //     path:'/bk'
        // },
        {
            iconCls:'icon-shu1',
            text:'我的',
            path:'/self'
        }
    ]
};

export let navData = (state = defaultState,action = {}) => {
    state = wt.clone(state);
    wt.execFunc(reducer[action.type],state,action);
    return state;
};

const reducer = {

};