import React, { Component } from 'react';


type MyProps = {
	// using `interface` is also ok
	message: string;
  };
  type MyState = {
	count: number; // like this
  };
  
 
 export default class App extends React.Component<{ message: string }, { count: number }> {
	state = { count: 0 };
	render() {
	  return (
		<div onClick={() => this.increment(1)}>
		  {this.props.message} {this.state.count}
		</div>
	  );
	}
	increment = (amt: number) => {
	  // like this
	  this.setState((state) => ({
		count: state.count + amt,
	  }));
	};
  }