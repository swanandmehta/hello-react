import React from 'react';

import './App.css';
import { Search } from './component/search/search.component';
import { RobotList } from './component/robot-list/robot-list.component';

class App extends React.Component {

	constructor() {
		super()
		this.state = {
			search : "",
			robots : []
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
      	.then(response => response.json())
      	.then(users => this.setState({ robots: users }));
	}

	searchHandler(event) {
		this.setState({search: event.target.value})
	}

	render() {

		const { robots, search } = this.state;
		const filteredRobot = robots.filter(robot => robot.username.toLowerCase().includes(search.toLowerCase()))

		return (
			<div className='App'>
				<Search placeholder="Search Robot !" searchHandler={this.searchHandler.bind(this)} />
				<RobotList robots={filteredRobot}/>
			</div>
		)
	}


}

export default App;
