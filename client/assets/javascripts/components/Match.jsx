import React from 'react';
import BaseComponent from './BaseComponent';

class Match extends BaseComponent {
  constructor(props) {
    super(props);
    this._bind();
  }

  render() {
    return (
      <span>{this.props.p_one_id} fought {this.props.p_two_id}</span>
    )
  }
}

export default Match
