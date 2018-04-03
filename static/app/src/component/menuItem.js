/**
 * Created by Administrator on 2018/4/3.
 */
import React from 'react';
import {NavLink} from 'react-router-dom';
export default props => {
    let {iconCls,text,path = '/'} = props.data || {};
    return <NavLink to={path} className="menu-item">
        <p>
            <i className={`iconfont ${iconCls}`}></i>
        </p>
        <p className="menu-text">{text}</p>
    </NavLink>
}