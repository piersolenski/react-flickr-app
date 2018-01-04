import React, { Component } from 'react';

import Header from '../components/Header';

class Shell extends Component {
  componentWillMount() {
    // Code goes here...
  }
  render() {
    return (
      <div className="shell">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default Shell;
