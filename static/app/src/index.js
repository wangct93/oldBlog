/**
 * Created by Administrator on 2018/3/7.
 */
import React from 'react';
import Component from './lib/component';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/store';
import Router from './router/router';

render(<Provider store={store}>
    <Router/>
</Provider>,$('#container')[0]);