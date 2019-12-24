import React, { Component, Suspense } from "react";
import { connect } from "react-redux";
import { setCounter } from "./counteraction"


const Card = React.lazy(()=> import("../Card") );
class Counter extends Component {
  render() {
    console.log(this.props);
    return (
      <>
        <h1>Your Counter is :{this.props.count} </h1>
  
        <button onClick={() => this.props.setCounter(this.props.count- 1) }>
          decrement
        </button>
        <Suspense fallback ={ <h1> loading ....</h1>}>
      <Card/>
        </Suspense>
      </>
    );
  }
}

const mapStateToProps = state => ({
  count: state.count.count
});

const mapDispatchToProps = dispatchs => ({
  setCounter: count => dispatchs(setCounter(count))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
(Counter);