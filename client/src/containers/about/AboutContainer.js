import React from 'react';
import { About } from '../../components';
import './About.css';

class AboutContainer extends React.Component{

  state = {
    title: null
  }

  componentDidMount(){
    this.setState({ title: "About Us" });
  }



  render(){
    return(
      <div>
        {
          this.state.title !== null
          ? <About title={ this.state.title } />
          : <h1> Loading about page</h1>
        }
      </div>
    )
  }
}


export default AboutContainer;
