import React, { Component } from 'react';
import axios from "axios"



function FetchData() {
	axios.post("/api/get_data").then((response) => {
		const data: number[] = response.data.new_data
		//console.log(data[0]);
		return data
	});
}


	export default class App extends React.Component<{ new_data: number[] }> {
	state = { new_data: [0,4,8,9] };
	interval: any = 1000



	componentDidMount() {
		console.log(this.state)
		this.interval = setInterval(
			() => this.setState((state) => ({
				new_data: FetchData()
		})),
			1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		return (
			<div onClick={() => console.log('stet')}>
				{this.state.new_data}
			</div>
		);
	}
}