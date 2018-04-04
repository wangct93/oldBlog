/**
 * Created by Administrator on 2018/4/3.
 */
import React from 'react';
import Component from '../lib/component';
import {Provider, connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as actions from '../store/user/action';

import {getUser} from '../compute/compute';
import {Redirect} from 'react-router-dom';

class Login extends Component{
    render(){
        let user = getUser(this.props.list);
        if(user){
            return <Redirect to="/home" />
        }
        return <div className="login-container">
            <div className="logo-box">
                <img src="img/1.jpg"/>
            </div>
            <div className="input-content">
                <UserInput ref="username" />
                <PasswordInput ref="password" />
                <div className="login-btn" onClick={this.login.bind(this)}>登录</div>
                <div className="input-op-box">
                    <div>
                        <a className="text-btn">其他帐号登录</a>
                    </div>
                    <div>
                        <a className="text-btn">忘记密码？</a>
                    </div>
                </div>
            </div>
            <div className="register-box">
                <Link className="register-btn" to="/register">注册</Link>
            </div>
        </div>
    }
    login(){
        let {username,password} = this.refs;
        let name = username.refs.input.value;
        let psw = password.refs.input.value;
        if(!name){
            alert('请输入用户名！');
        }else if(!psw){
            alert('请输入密码！');
        }else{
            let {list} = this.props;
            let index = list.indexOfFunc(item => item.name === name && item.password === psw);
            if(index === -1){
                alert('用户名或密码错误');
            }else{
                this.props.login(index);
            }
        }
    }
}

export default connect(state => state.userData,actions)(Login);

class UserInput extends Component{
    render(){
        return <div className="input-box username-box">
            <i className="iconfont icon-duihao"></i>
            <input type="text" ref="input" className="login-input" />
            <i className="iconfont icon-duihao input-right-icon"></i>
            <div className="history-box">
                <ul className="history-list"></ul>
            </div>
        </div>
    }
}
class PasswordInput extends Component{
    render(){
        return <div className="input-box password-box">
            <i className="iconfont icon-duihao"></i>
            <input type="text" ref="input" className="login-input input-password" />
            <i className="iconfont icon-duihao input-right-icon"></i>
            <div className="history-box">
                <ul className="history-list"></ul>
            </div>
        </div>
    }
}

