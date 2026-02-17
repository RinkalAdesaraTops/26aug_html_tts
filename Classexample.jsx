import { Component } from "react";
class Classexample extends Component {
    constructor(){
        super()
        this.state = {
            name:"abc",
            age:25
        }
        // this.changeName = this.changeName.bind(this)
    }
    changeName = ()=>{
        this.setState({name:"weyrt"})
    } 
  render() {
    return (
        <>
        <h4>Class component Example</h4>
        <h4>Name is -- {this.state.name}</h4>
        <h4>Age is -- {this.state.age}</h4>
        <button onClick={this.changeName}>Change Name</button>
        <button onClick={()=>this.setState({age:this.state.age+1})}>Change Age</button>
        </>
    )
  }
}
export default Classexample;
