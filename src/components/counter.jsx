import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
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
    console.log(product)
    this.setState({ count: this.state.count + 1});
  }

  render() {
    return <div>
    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
    <button onClick={() => this.handleIncrement("product")} className="btn btn-secondary btn-sm">Increment
    </button>
    {this.state.tags.length === 0 && "Please create a new tag!"}
    {this.renderTags()}
    </div>;
  }

  formatCount() {
    return this.state.count=== 0 ? "Zero" : this.state.count;
  }

  getBadgeClasses() {
    return this.state.count === 0? "btn m-2 badge-warning": "btn m-2 badge-primary";
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return <ul>
    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
    </ul>
  }

}

export default Counter;
