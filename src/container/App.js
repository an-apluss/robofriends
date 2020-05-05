import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundary';
import { setSearchField, requestRobots } from '../actions';
// import { robots } from '../container/robots';

const mapStateToProps = (state) => {
  const { searchRobots: { searchField }, requestRobots: { robots, isPending, error } } = state;
  return {
    searchField,
    robots,
    isPending, 
    error
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  }
}
class App extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { onSearch, searchField, robots, isPending, error } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    
    if (error && !isPending) {
      return <h1 className="tc f2 light-blue">{error.message}</h1>
    }

    if (isPending) {
      return <h1 className="tc f2 light-blue">Loading...</h1>
    } 
    
    if (robots){
      return (
        <div className="tc">
          <h1 className="f2 light-blue">RoboFriends</h1>
          <SearchBox searchChange={onSearch} />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);