import React, {Component} from 'react';
import './header.scss';
class Header extends Component{
  render(){
    return(
      <header className="main-header">
        <div className="container header-content">
          <div className="header-title">
            {this.props.headerTitle}
          </div>

          <p className="header-description">
            {this.props.headerDescription}
          </p>
        </div>
      </header>
    )
  }
} 

export default Header