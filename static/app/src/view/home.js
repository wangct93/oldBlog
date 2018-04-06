/**
 * Created by Administrator on 2018/4/3.
 */
import React from 'react';
import Component from '../lib/component';
import {Provider, connect} from 'react-redux';

import Search from '../component/search';
import MenuItem from '../component/menuItem';
class Home extends Component{
    render(){
        let {menuList} = this.props;
        return <div className="home-container">
            <div className="header">
                <Search />
                <div className="icon-btn-box">
                    <i className="iconfont icon-duihao"></i>
                    <i className="iconfont icon-duihao"></i>
                </div>
            </div>
            <div className="body">
                <div className="menu-box menu-box-blue">
                    {
                        menuList.slice(0,4).map((item,i) => {
                            return <MenuItem data={item} key={i}/>
                        })
                    }
                </div>
                <div className="menu-box">
                    {
                        menuList.slice(4).map((item,i) => {
                            return <MenuItem data={item} key={i}/>
                        })
                    }
                </div>
                <div className="info-content">
                    <InfoItem />
                </div>
            </div>
        </div>
    }
}



class InfoItem extends Component{
    render(){
        return <div className="info-item"></div>
    }
}


export default connect(state => state.homeData)(Home);
