/**
 * Created by Administrator on 2018/3/7.
 */


export const register = (data) => {
    return {
        type:'registerUser',
        data
    }
};

export const login = (index) => {
    return {
        type:'loginUser',
        index
    }
};