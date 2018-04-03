/**
 * Created by Administrator on 2018/4/3.
 */
import React from 'react';
import Component from '../lib/component';
import {render} from 'react-dom';
import {Provider, connect} from 'react-redux';
import {Link} from 'react-router-dom';

export default class Login extends Component{
    render(){
        return <div className="login-container">
            <div className="logo-box">
                <img src="img/1.jpg"/>
            </div>
            <div className="input-content">
                <UserInput />
                <PasswordInput/>
                <div className="login-btn"><Link to="/home" >登录</Link></div>
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
                <a className="register-btn">注册</a>
            </div>
        </div>
    }
}

class UserInput extends Component{
    render(){
        return <div className="input-box username-box">
            <i className="iconfont icon-duihao"></i>
            <input type="text" className="login-input" />
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
            <input type="text" className="login-input input-password" />
            <i className="iconfont icon-duihao input-right-icon"></i>
            <div className="history-box">
                <ul className="history-list"></ul>
            </div>
        </div>
    }
}

