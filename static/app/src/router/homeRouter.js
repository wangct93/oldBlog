/**
 * Created by Administrator on 2018/3/27.
 */
import React from 'react';
import Component from '../lib/component';
import {render} from 'react-dom';
import {Provider, connect} from 'react-redux';

import {HashRouter,Switch,Route,Link,withRouter,Redirect} from 'react-router-dom';

import Home from '../view/home';
import MenuItem from '../component/menuItem';
export default connect(state => state.navData)(props => {
    let {list} = props;
    return <HashRouter basename="/home">
        <div className="main fit">
            <div className="main-content">
                <Switch>
                    <Route path="/index" component={Home} />
                    <Route path="/kb" component={Home}/>
                    <Redirect to="/index" />
                </Switch>
            </div>
            <div className="menu-box">
                {
                    list.map((item,i) => {
                        return <MenuItem key={i} data={item} />
                    })
                }
            </div>
        </div>
    </HashRouter>
})