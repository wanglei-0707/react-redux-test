import React, { Component, PropTypes } from 'react'

class Counter extends Component {
  constructor (props) {
    super(props)

    this.incWhenOdd = this.incWhenOdd.bind(this)
    this.incAsync = this.incAsync.bind(this)
  }

  onChange () {

  }

  incWhenOdd () {
    if(this.props.value % 2 === 0){
      this.props.incCounter()
    }
  }

  incAsync () {
    setTimeout(this.props.incCounter, 1000)
  }

  render () {
    const { value, incCounter, decCounter } = this.props
    return (
      <div>
        <button onChange={incCounter}>加一</button>
        {' '}
        <button onChange={decCounter}>减一</button>
        {' '}
        <button onChange={this.incWhenOdd}>奇数加一</button>
        {' '}
        <button onChange={this.incAsync}>延迟加一</button>
        Clicked { value } times
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  incCounter: PropTypes.func.isRequired,
  decCounter: PropTypes.func.isRequired
}

Counter.defaultProps = {
  value: 0,
  incCounter: onChange,
  decCounter: onChange
}

export default Counter
