import React from 'react';

export default class ReactComp extends React.Component {
  render() {
    return (
      <h1>Hello {this.props.name}, from react!</h1>
    );
  }
}

