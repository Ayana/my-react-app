import React from 'react';
import './Main.css';

const green = '#39D1B4';
const yellow = '#FFD712';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: green};
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    const bgColor = this.state.color == green ? yellow : green;
    this.setState({color: bgColor});
  }

  render() { 
    return (
      <main style={{background: this.state.color}}>
        <button onClick={this.changeColor}>
          Change Color
        </button>
      </main>
    );
  }
}
 
export default Main;