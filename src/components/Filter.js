import React, { Component } from 'react';

class Filter extends Component {
  // state={
  //   term: ""
  // }

  // onSearchChange = (event) =>{
  //   //console.log(event.target.value)
  //   this.setState({
  //     term: event.target.value
  //   })
  // }

  render() {
    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input onChange={this.props.handleChangeTerm} value={this.props.term} id="title-filter" type="text" />
      </div>
    );
  }
}

export default Filter;
