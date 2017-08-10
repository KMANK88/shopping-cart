import React from 'react';
import {Link} from 'react-router-dom';
const NavBar = (props) => {
  console.log(props);
  return (
      <nav className='MainContainer'>

        <div className="title">
          <h1>{ props.title }</h1>
        </div>

        <div className="Nav-Bar">

          {

            //this dynamically maps all of the links for our nav bar
            props.navBarLinks.map((item, index) => <Link to={'/' + item } key={ index } >{ item }</Link> )
          }

          <Link to='/cart'>{ props.cartCount }</Link>
        </div>

      </nav>
  )
}

export default NavBar;
