export const createStore =(reducer,initial_state,applyMiddleware)=>{

    // applyMiddleware 将所有中间件组成一个数组，依次执行
    let state,listeners=[];
    const getState =()=>state;
    const dispatch=(action)=>{ 
        // 中间件处理
        state=reducer(state,action)  // 传入初始值
        listeners.forEach(l=>l())
    }
    const subscribe=(listener)=>{
        listeners.push(listener)
        return ()=>{
            listeners = listeners.filter(l=>l!==listener)
        }
    }
    dispatch({})  //  给state赋值
    return {
        getState,
        subscribe,
        dispatch
    }
}

let inintState={},action={type:'add', payload:1}
let reducer = (inintState,action)=>{}
let store = createStore(reducer)
store.getState()

let render=()=>{}
let unsubscibe = store.subscribe(render)