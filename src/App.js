import React, {Component} from 'react';

// REFS

class App extends Component{
  constructor(){
    super()
    this.myRef = React.createRef();
  }
  componentDidMount(){
    this.myRef.current.style.height = '100vh';
    this.myRef.current.style.width ='100%'
  }
  setBackground(bgColor, txtColor){
    this.myRef.current.style.background = bgColor;
    this.myRef.current.style.color = txtColor;
  }
  render(){
    return (
      <div ref={this.myRef}>
        <p>Belajar pengembangan aplikasi web dengan Reactjs dengan topik Router dan Refs</p>
        <button onClick={this.setBackground.bind(this, 'white', 'black')}>White</button>
        <button onClick={this.setBackground.bind(this, 'red', 'white')}>Red</button>
        <button onClick={this.setBackground.bind(this, 'green', 'white')}>Green</button>
        <button onClick={this.setBackground.bind(this, 'blue', 'white')}>Blue</button>
      </div>
    );
  }
}

export default App;
