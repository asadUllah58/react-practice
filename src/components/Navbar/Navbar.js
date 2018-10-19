import React, { Component } from 'react'
import './navbar.scss'

export default class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter:0
    }
    this.alertFunction = this.alertFunction.bind(this);
  }

  alertFunction(){
    this.setState({counter: this.state.counter+1});
  }
  render() {
    return (
      <nav className="navbar-container">
        <div className="container navbar-body">
          <div className="title">{this.props.title} {this.state.counter > 0 ? this.state.counter : "" }</div>
          <ul className="navbar-list">
            {
              this.props.menus.map(item => {
                return (
                  <li><a href={item.url}>{item.title}</a></li>
                )
              })
            }
            <li><button className="increment-button" onClick={this.alertFunction}>Increment</button></li>
          </ul>
        </div>
      </nav>
    );
  }
}