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
import Self from '../view/self';

import {getUser} from '../compute/compute';


export default connect(state => wt.extend({
    userList:state.userData.list
},state.navData))(props => {
    let {list,match,userList} = props;
    // let user = getUser(userList);
    // if(!user){
    //     return <Redirect to="/login"/>
    // }
    return <HashRouter basename={match.url}>
        <div className="main fit">
            <div className="main-content">
                <Switch>
                    <Route path="/index" component={Home} />
                    <Route path="/kb" component={Home}/>
                    <Route path="/kb" component={Home}/>
                    <Route path="/self" component={Self}/>
                    <Redirect to="/index" />
                </Switch>
            </div>
            <div className="main-footer">
                <div className="menu-box">
                    {
                        list.map((item,i) => {
                            return <MenuItem key={i} data={item} />
                        })
                    }
                </div>
            </div>
        </div>
    </HashRouter>
})