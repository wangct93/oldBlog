/**
 * Created by Administrator on 2018/3/20.
 */


export const getUser = (list) => {
    return list.filter(item => item.logined)[0];
};