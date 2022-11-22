import React, { Component } from 'react';
import axios from "axios"




export default class App extends React.Component<{ time: number }> {
	state = { time: 0 };
	interval: any = 1000



	// increment = (amt: number) => {
	// 	this.setState((state) => ({
	// 		count: state.count + 2*amt,
	//   }));
	// };
	new_data = (data: number[])=> {
		this.setState((state) => ({
			
		}));
	}
	componentDidMount() {
		this.interval = setInterval(
			() => this.setState((state) => ({ time: Date.now() })),
			1);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		return (
			<div onClick={() => console.log('stet')}>
				{this.state.time}
			</div>
		);
	}
}