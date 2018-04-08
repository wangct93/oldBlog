/**
 * Created by Administrator on 2018/3/27.
 */
import React from 'react';
import Component from '../lib/component';
import {render} from 'react-dom';
import {Provider, connect} from 'react-redux';

import {HashRouter,Switch,Route,Link,withRouter,Redirect} from 'react-router-dom';

import Login from '../view/login';
import UserInfo from '../view/userInfo';
import HomeRouter from './homeRouter';
export default class Router extends Component{
    render(){
        return <HashRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/home" component={HomeRouter} />
                <Route path="/userInfo" component={UserInfo} />
                <Redirect to="/login" />
            </Switch>
        </HashRouter>
    }
}