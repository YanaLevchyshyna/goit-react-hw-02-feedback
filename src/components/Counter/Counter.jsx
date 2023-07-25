// import React, { Component } from 'react';
// import { Value } from './Value';
// import { CounterSection } from './Counter.styled';
// import { Controls } from '../Counter/Controls';

// class Counter extends Component {
//   static defaultProps = {
//     initialValue: 0,
//   };

//   static propTypes = {};

//   state = {
//     value: this.props.initialValue,
//   };

//   handleIncrement = () => {
//     this.setState(prevState => {
//       return { value: prevState.value + 10 };
//     });
//   };
//   handleDecrement = () => {
//     this.setState(prevState => {
//       return { value: prevState.value - 10 };
//     });
//   };

//   render() {
//     return (
//       <CounterSection>
//         <Value value={this.state.value} />
//         <Controls
//           onIncrement={this.handleIncrement}
//           onDecrement={this.handleDecrement}
//         />
//       </CounterSection>
//     );
//   }
// }

// export default Counter;
