const  storge=window.localStorage;

export default{
    set(key,val){
        if(val===undefined){
            return;
        }
        storge.setItem(key,serialize(val));
    },
    get(key,def){
        const val =deserialize(storge.getItem(key));
        return val===undefined?def:val;
    },
    remove(key){
        storge.removeItem(key);
    },
    clear(){
        storge.clear()
    }
};
function serialize(val){
    return JSON.stringify(val);
}
function deserialize(val){
    if(typeof val!=='string'){
        return undefined;
    }
    try{
        return JSON.parse(val);
    }catch(e){
        return val||undefined;
    }
}