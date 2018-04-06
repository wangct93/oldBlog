/**
 * Created by Administrator on 2018/4/3.
 */
import React from 'react';
import Component from '../lib/component';
import {Provider, connect} from 'react-redux';

import {HashRouter,Link} from 'react-router-dom';

class Info extends Component{
    render(){
        return <div className="self-box">
            <div className="img-box">
                <img src="img/1.jpg" />
            </div>
            <div className="self-info">
                <p className="self-name">人生如戏</p>
                <p className="self-tel">156******23</p>
            </div>
            <i className="iconfont icon-duihao"></i>
        </div>
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
                        return <ListDiv data={item} key={i} />
                    })
                }
            </div>
        </div>
    </div>
};




const ListDiv = props => {
    let {data} = props;
    return <ul className="nav-list">
        {
            data.map((item,i) => {
                return <Item data={item} key={i}/>
            })
        }
    </ul>
};


class Item extends Component{
    render(){
        let {name,iconCls,text} = this.props.data || {};
        return <li>
            <Link to="/self">
                <i className="iconfont icon-duihao"></i>
                <div className="item-content">
                    <div className="">{name}</div>
                    <div className="item-text">{text}</div>
                    <i className="iconfont icon-duihao"></i>
                </div>
            </Link>
        </li>
    }
}

export default connect(state => state.selfData)(Panel);