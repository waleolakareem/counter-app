import React, { Component } from 'react';

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: []
  };


  //First way to get constructor and binding the function
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  //Second appreoach for binding is using the converting it in arrow function


  //Whenever you need to pass an argument pass it thru the event handler and make it a function putting it inline
  handleIncrement = product => {
    this.setState({ value: this.state.value + 1});
  }

  render() {
    console.log(this.props)
    return <div>
    <h4>{this.props.id}</h4>
    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
    <button onClick={() => this.handleIncrement("product")} className="btn btn-secondary btn-sm">Increment
    </button>
    {this.state.tags.length === 0 && "Please create a new tag!"}
    {this.renderTags()}
    </div>;
  }

  formatCount() {
    return this.state.value=== 0 ? "Zero" : this.state.value;
  }

  getBadgeClasses() {
    return this.state.value === 0? "btn m-2 badge-warning": "btn m-2 badge-primary";
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return <ul>
    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
    </ul>
  }

}

export default Counter;
