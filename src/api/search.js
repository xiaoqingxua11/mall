import axios from "axios"
import { TIMEOUT, jsonpOptions } from "./config"
import jsonp from "jsonp";

//获取热门搜索数据
export const getSearchHotKeyword=()=>{
    return axios.get('http://so.m.jd.com/ware/hotKeyWord.action?_format_json',{
        timeout:TIMEOUT
    }).then(res=>{
        res=JSON.parse(res.data.hotKey);
        if(res&&res.owner){
            //sucss
            return res.owner;
        }
        throw new Error('没有成功获取到数据！');
    }).catch(err=>{
        console.log(err);
    }).then(res=>{
        return new Promise(resolve=>{
            setTimeout(()=>{
                resolve(res);
            },1000)
        });
    });
};

//获取搜索结果--jsonp
export const getSearchResult =keyword=>{
    const url='http://suggeet.taobao.com/sug';
    const params={
      q:keyword,
      code:'utf-8',
      area:'c2c',
      nick:'',
      sid:null
    };

    return jsonp(url,params,jsonpOptions).then(res=>{
        if(res.result){
            return res.result
        }
        throw new Error('没有成功获取到数据！');
    }).catch(err=>{
        if(err){
            console.log(err);
        }
    
    }).then(res=>{
        return new Promise(resolve=>{
            setTimeout(()=>{
                resolve(res);
            },1000);
        });
    });      
};