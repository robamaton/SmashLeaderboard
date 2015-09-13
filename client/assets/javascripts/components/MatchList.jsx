import React from 'react';
import BaseComponent from './BaseComponent';
import Match from './Match';

class MatchList extends BaseComponent {
  constructor(props) {
    super(props);
    this._bind();
  }
  render() {
    let matches = this.props.matches.data.map(function(match) {
      return <li><Match match={match} /></li>
    });
    return (
      <div>
        <h1> Match List </h1>
        <ul>
          {matches}
        </ul>
      </div>
    )
  }
}

export default MatchList
