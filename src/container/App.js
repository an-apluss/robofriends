import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundary'
// import { robots } from '../container/robots';

class App extends Component {

  constructor() {
    super();

    this.state = {
      robots: [],
      searchField: ''
    };

    this.onSearch = this.onSearch.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ robots: data }))
    ;
  }

  onSearch(event) {
    this.setState({
      searchField: event.target.value
    });
  }

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    if (!robots.length) {
      return <h1 className="tc f2 light-blue">Loading...</h1>
    } else {
      return (
        <div className="tc">
          <h1 className="f2 light-blue">RoboFriends</h1>
          <SearchBox searchChange={this.onSearch} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots}/>
            </ErrorBoundry>
          </Scroll>
        </div> 
      )
    }
  }
}

export default App;