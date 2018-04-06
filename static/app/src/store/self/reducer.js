/**
 * Created by Administrator on 2018/3/7.
 */
let defaultState = {
    list:[
        [
            {
                iconCls:'icon-duihao',
                name:'账单',
                text:''
            }
        ],
        [
            {
                iconCls:'icon-duihao',
                name:'账单',
                text:''
            }
        ],
        [
            {
                iconCls:'icon-duihao',
                name:'蚂蚁会员',
                text:'100积分待领取'
            },
            {
                iconCls:'icon-duihao',
                name:'账单',
                text:''
            },
            {
                iconCls:'icon-duihao',
                name:'总资产',
                text:'账户安全'
            },
            {
                iconCls:'icon-duihao',
                name:'余额',
                text:''
            },
            {
                iconCls:'icon-duihao',
                name:'账单',
                text:''
            },
            {
                iconCls:'icon-duihao',
                name:'账单',
                text:''
            },
            {
                iconCls:'icon-duihao',
                name:'账单',
                text:''
            },
            {
                iconCls:'icon-duihao',
                name:'账单',
                text:''
            },
            {
                iconCls:'icon-duihao',
                name:'账单',
                text:''
            },
            {
                iconCls:'icon-duihao',
                name:'账单',
                text:''
            },
            {
                iconCls:'icon-duihao',
                name:'账单',
                text:''
            },
            {
                iconCls:'icon-duihao',
                name:'账单',
                text:''
            },
            {
                iconCls:'icon-duihao',
                name:'账单',
                text:''
            }
        ]
    ]
};

export let selfData = (state = defaultState,action = {}) => {
    state = wt.clone(state);
    wt.execFunc(reducer[action.type],state,action);
    return state;
};

const reducer = {

};