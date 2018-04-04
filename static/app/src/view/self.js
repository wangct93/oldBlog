/**
 * Created by Administrator on 2018/4/3.
 */
import React from 'react';
import Component from '../lib/component';
import {Provider, connect} from 'react-redux';


class Info extends Component{
    render(){
        return <div className="self-box">
        </div>
    }
}

export default connect(state => state.info)(Info);