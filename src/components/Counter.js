import React,{Component } from 'react'

export class Counter extends Component{
    constructor(){
        super()
    }
    incrementIfOdd() {
        if (this.props.value % 2 !== 0) {
            this.props.onIncrement()
        }
        // return ()=>{
        //     if (this.props.value % 2 !== 0) {
        //         this.props.onIncrement()
        //     }
        // }
    }

    incrementAsync(e) {        
        setTimeout(this.props.onIncrement, 1000)
    }
    render(){
        const { value, onIncrement, onDecrement } = this.props
        return (
            <p>
            Clicked: {value}
            {' '}
            <button onClick={onIncrement}>
              +
            </button>
            {' '}
            <br/>
            <button onClick={onDecrement}>
              -
            </button>
            {' '}
            <button onClick={this.incrementIfOdd.bind(this)}>
            Increment if odd
            </button>
            {' '}
            <button onClick={this.incrementAsync.bind(this,'test')}>
            Increment async
            </button>
          </p>
        )
    }
}