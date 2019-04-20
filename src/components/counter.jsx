import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    tag: [ "tag1","tag2","tag3"]
  };

  // styles = {
  //   fontSize: 10,
  //   fontWeight: "bold"
  // }

  //Inline style involves using two brackets for example
  //<button styles={{fontS}}></button>
  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          {this.state.tag.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
      </React.Fragment>
    );
  }

  getBadgeClasses(){
    let classes = "badge m-2 badge-";
    return classes += (this.state.count === 0) ? "warning" : "primary";
  }

  formatCount(){
    const { count } = this.state
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
