import React, { Component } from "react";

class LifecycleClass extends Component {
  constructor() {
    super();
    console.log("constructor called..");
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log("componentDidMount called..");
    setTimeout(() => {
      this.setState({
        count: 10,
      });
    },2000);
  }
  static getDerivedStateFromProps(CurrProps,CurrState){
    console.log('getDerivedStateFromProps called.');
    console.log(CurrState); 
    return null  
  }
  shouldComponentUpdate(){
    console.log('shouldComponentUpdate called..');   
    return true
  }
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('getSnapshotBeforeUpdate called..');
    console.log('prev value');
    console.log(prevState);
    return null    
  }
  componentDidUpdate(){
    console.log('Finally value updated...'); 
  }
  render() {
    console.log("render calling");
    return (
      <div>
        <h3>React Lifecycle Example - Class Component</h3>
        <h4>Count is -- {this.state.count}</h4>
      </div>
    );
  }
}
export default LifecycleClass;
