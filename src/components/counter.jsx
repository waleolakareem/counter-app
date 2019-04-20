import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 1,
    tags: []
  };


  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return <ul>
          {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
  }

  render() {
    return <div>
      <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
      <button className="btn btn-secondary btn-sm">Increment</button>
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

}

export default Counter;
