import React ,{Component} from 'react'
class Counter extends Comment{
    render(){
        return (
            <div className="counter">
                <h1>{value}</h1>
                <button onClick={add}>+</button>
            </div>
        )
    }
}

export default Counter