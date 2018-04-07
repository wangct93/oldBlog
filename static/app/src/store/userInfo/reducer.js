/**
 * Created by Administrator on 2018/3/7.
 */
let defaultState = {
    list:[
        [
            {
                title:'个人主页',
                img:'img/1.jpg'
            },
            {
                title:'身份认证',
                text:'王垂通'
            },
            {
                title:'支付宝账号',
                text:'158******29',
                hasArrow:false
            },
            {
                title:'我的二维码',
                img:'img/1.jpg'
            },
            {
                title:'淘宝会员名',
                text:'wangchui2'
            }
        ],
        [
            {
                title:'收货地址'
            },
            {
                title:'我的发票抬头'
            }
        ],
        [
            {
                title:'我的收藏'
            },
            {
                title:'我的客服'
            }
        ]
    ]
};

export let userInfoData = (state = defaultState,action = {}) => {
    state = wt.clone(state);
    wt.execFunc(reducer[action.type],state,action);
    return state;
};

const reducer = {

};