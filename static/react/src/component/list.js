/**
 * Created by Administrator on 2018/3/19.
 */
import React from 'react';
import Component from '../lib/component';
import Table from "./table";

export class HomeList extends Component{
    render(){
        let {data} = this.props;
        return <ul ref="box" className="home-list">
            {
                data.map((item,i) => {
                    let {sourceType} = item;
                    let Item = sourceType === 'blog' ? BlogItem : StoryItem;
                    return <Item key={i} data={item} />
                })
            }
        </ul>
    }
}

class BlogItem extends Component{
    render(){
        let {fmImg,content,name,id} = this.props.data;
        content = $('<div>' + content + '</div>').text().replace(/\n|\s/g,'').limitBytes(1,500,true,'');
        return <li>
            <div className="home-item">
                <div className="img-box">
                    <img src={fmImg} />
                </div>
                <div className="text-box">
                    <h2>{name}</h2>
                    <div className="home-intro">{content}</div>
                    <div className="home-btn-box">
                        <a className="b-btn" onClick={this.detail.bind(this,id)}>详情</a>
                    </div>
                </div>
            </div>
        </li>;
    }
    detail(blogId){
        window.open('./pages/blog/index.html?blogId=' + blogId);
    }
}

class StoryItem extends Component{
    render(){
        let {fmImg,intro,name,id,author} = this.props.data;
        fmImg = './img/blank.png';
        return <li>
            <div className="home-item story-item">
                <div className="img-box">
                    <img src={fmImg} ref="img" onError={this.imgError.bind(this)} />
                </div>
                <div className="text-box">
                    <h2>
                        <span>{name}</span>
                        <small>作者：{author}</small>
                    </h2>
                    <div className="home-intro">{intro}</div>
                    <div className="home-btn-box">
                        <a className="b-btn" onClick={this.bookDetail.bind(this,id)}>阅读</a>
                    </div>
                </div>
            </div>
        </li>;
    }
    imgError(){
        this.refs.img.src = './img/blank.png';
    }
    bookDetail(id){
        window.open('./pages/novel/index.html?bookId=' + id);
    }
}



export class StoryTableView extends Component{
    constructor(){
        super();
        this.state = {
            tableOption:{
                columns:[
                    {
                        title:'序号',
                        width:60,
                        field:'orderNum'
                    },
                    {
                        title:'名称',
                        field:'name',
                        fit:true,
                        align:'left'
                    },
                    {
                        title:'作者',
                        width:120,
                        field:'author',
                        align:'left'
                    },
                    {
                        title:'上传时间',
                        width:160,
                        field:'time'
                    },
                    {
                        title:'大小',
                        width:80,
                        field:'size'
                    },
                    {
                        title:'点击数',
                        width:80,
                        field:'clickHits'
                    },
                    {
                        title:'点赞数',
                        width:80,
                        field:'zanHits'
                    },
                    {
                        title:'操作',
                        width:40,
                        elemList:[
                            {
                                iconCls:'text-btn',
                                text:'详情',
                                handler:({id},i) => {
                                    window.open('./pages/novel/index.html?bookId=' + id);
                                }
                            }
                        ]
                    }
                ]
            }
        }
    }
    render(){
        return <Table option={this.state.tableOption} data={this.props.data}/>
    }
}


export class StoryListView extends Component{
    render(){
        return <ul className="story-list">
            {
                this.props.data.map((item,i) => {
                    let {id,fmImg,name,author,intro = '',orderNum,state,type,time,size,clickHits,zanHits} = item;
                    fmImg = './img/blank.png';
                    return <li key={i}>
                        <div className="img-box">
                            <img src={fmImg}/>
                        </div>
                        <div className="story-info-box">
                            <h2>{name}</h2>
                            <div className="story-info">
                                <a className="story-info-text">
                                    <i className="iconfont icon-ren"></i>
                                    <span>{author}</span>
                                </a>
                                <a className="story-sep"></a>
                                <a className="story-info-text">{type}</a>
                                <a className="story-sep"></a>
                                <a className="story-info-text">{state ? '完结' : '连载中'}</a>
                            </div>
                            <div className="story-intro">{intro.limitBytes(1,200,null,'')}</div>
                        </div>
                        <div className="story-op-box">
                            <a className="story-btn" onClick={this.detail.bind(this,id)}>详情</a>
                        </div>
                    </li>
                })
            }
        </ul>
    }
    detail(id){
        window.open('./pages/novel/index.html?bookId=' + id);
    }
}

