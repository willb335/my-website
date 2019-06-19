import React, { Component } from 'react';
import rough from 'roughjs/dist/rough.umd';

class RoughToolbar extends Component {
  componentDidMount() {
    const rc = rough.svg(this.toolbar);

    const rectangle = rc.rectangle(120, 15, 80, 80, { fill: 'red' });

    this.toolbar.appendChild(rectangle);
  }
  render() {
    return <svg ref={ref => (this.toolbar = ref)} />;
  }
}

export default RoughToolbar;
