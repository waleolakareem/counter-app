import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 1,
    tags: []
  };


  //First way to get constructor and binding the function
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  //Second appreoach for binding is using the converting it in arrow function



  handleIncrement = () => {
    console.log("Increment Clicked",this)
  }

  render() {
    return <div>
    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
    <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment
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
