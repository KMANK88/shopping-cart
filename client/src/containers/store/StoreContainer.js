import React from 'react';
import {Store} from '../../components';

class StoreContainer extends React.Component{

  state = {
    title: undefined
  }

  componentDidMount(){
    this.setTitle();
  }
  setTitle = () =>{
    setTimeout (() => {
      this.setState({title: "Store"})
    },2000)
  }


  render(){
    return(
      <div>
      {
        this.state.title
        ? <Store title={"this is Store Container title"} />
        : <h1> Waiting for Store Title</h1>
      }
      </div>
    )
  }
}


export default StoreContainer;
