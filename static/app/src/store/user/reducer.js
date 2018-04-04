/**
 * Created by Administrator on 2018/3/7.
 */
let defaultState = {
    list:[
        {
            id:1,
            name:'wangct',
            password:'123456'
        },
        {
            id:2,
            name:'tong',
            password:'123456'
        }
    ]
};

export let userData = (state = defaultState,action = {}) => {
    state = wt.clone(state);
    wt.execFunc(reducer[action.type],state,action);
    return state;
};

const reducer = {
    loginUser(state,action){
        let {index} = action;
        let {list} = state;
        list.forEach((item,i) => {
            item.logined = i === index;
        });
    },
    registerUser(state,action){
        let {data} = action;
        let {list} = state;
        wt.extend(data,{
            id:list[list.length - 1].id + 1,
            online:true
        });
        list.push(data);
    }
};