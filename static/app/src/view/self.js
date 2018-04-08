/**
 * Created by Administrator on 2018/4/3.
 */
import React from 'react';
import Component from '../lib/component';
import {Provider, connect} from 'react-redux';

import {HashRouter,Link} from 'react-router-dom';
import LineList from '../component/lineList';

class Info extends Component{
    render(){
        return <HashRouter basename="/">
            <Link className="block" to="/userInfo">
                <div className="self-box">
                    <div className="img-box">
                        <img src="img/1.jpg" />
                    </div>
                    <div className="self-info">
                        <p className="self-name">人生如戏</p>
                        <p className="self-tel">156******23</p>
                    </div>
                    <i className="iconfont icon-duihao"></i>
                </div>
            </Link>
        </HashRouter>
    }
}


const Panel = props => {
    let {list} = props;
    return <div className="home-container">
        <div className="header">
            <div className="header-title">我的</div>
            <span className="header-right">设置</span>
        </div>
        <div className="body">
            <Info />
            <div className="self-content">
                {
                    list.map((item,i) => {
                        return <LineList data={item} key={i} />
                    })
                }
            </div>
        </div>
    </div>
};

export default connect(state => state.selfData)(Panel);