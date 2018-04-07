/**
 * Created by wangct on 2018/4/7.
 */
import React from 'react';
import Component from '../lib/component';
import {render} from 'react-dom';
import {Provider, connect} from 'react-redux';

import {HashRouter,Link} from 'react-router-dom';


export default props => {
    let {data} = props;
    return <ul className="line-list">
        {
            data.map((item,i) => {
                return <LineItem key={i} data={item} />
            })
        }
    </ul>
};

const LineItem = props => {
    let {path = '/',iconCls,title,text = '',textType = '',roundIconCls,hasArrow = 'icon-duihao'} = props.data || {};
    return <li>
        <Link to={path} className="block">
            {
                iconCls && <i className={`iconfont ${iconCls}`}></i>
            }
            <div className="line-title">{title}</div>
            <div className={`line-text ${textType}`}>{text}</div>
            <i className={`iconfont ${roundIconCls}`}></i>
            <i className={`iconfont ${hasArrow}`}></i>
        </Link>
    </li>
};
