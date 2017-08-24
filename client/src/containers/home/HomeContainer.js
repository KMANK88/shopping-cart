import React from 'react';
import { Home } from'../../components';

class HomeContainer extends React.Component {

  state = {
    title: null
  }

  componentDidMount(){
    this.setState({ title: "Home Page" });
  }

  render(){
    
    console.log(this.state.title)

    return(
        <div>
          {
            this.state.title !== null
            ?<Home title={this.state.title}/>
            : <h1>No state yet.</h1>
          }
        </div>
      )
  }
}

export default HomeContainer
