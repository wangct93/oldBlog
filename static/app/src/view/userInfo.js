/**
 * Created by wangct on 2018/4/7.
 */
import React from 'react';
import Component from '../lib/component';
import {render} from 'react-dom';
import {Provider, connect} from 'react-redux';
import LineList from '../component/lineList';
import {Link} from 'react-router-dom';

const UserInfo = props => {
    let {list} = props;
    return <React.Fragment>
        <div className="header">
            <Link className="header-left icon-text" to="/home/self">
                <i className="iconfont icon-duihao"></i>
                <span>我的</span>
            </Link>
            <div className="header-title">个人信息</div>
        </div>
        <div className="body userinfo-body">
            {
                list.map((item,i) => {
                    return <LineList data={item} key={i} />
                })
            }
        </div>
    </React.Fragment>
};


export default connect(state => state.userInfoData)(UserInfo);

