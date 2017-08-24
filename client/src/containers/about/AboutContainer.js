import React from 'react';
import {About} from '../../components';
import './About.css';

class AboutContainer extends React.Component{

  state = {
    title: undefined
  }

  componentDidMount(){
    this.setTitle();
  }
  setTitle = () =>{
    setTimeout (() => {
      this.setState({title: "About"})
    },2000)
  }


  render(){
    console.log(this.state.title)
    return(
      <div>
      {
        this.state.title
        ? <About title={"About Us."} />
        : <h1> Loading about page</h1>
      }
      </div>
    )
  }
}


export default AboutContainer;
