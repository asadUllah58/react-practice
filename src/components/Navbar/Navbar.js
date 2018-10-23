import React, { Component } from 'react'
import style from './navbar.scss'
import { throws } from 'assert';

export default class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter:0,
      navbarCollapse: "collapse"
    }
    this.alertFunction = this.alertFunction.bind(this);
    this.nabvarCollapseToggle = this.nabvarCollapseToggle.bind(this);
  }

  alertFunction(){
    this.setState({counter: this.state.counter+1});
  }

  nabvarCollapseToggle(){
    this.setState({navbarCollapse: this.state.navbarCollapse == "collapse" ? "" : "collapse"});
  }
  render() {
    return (
      <nav className={style.navbarContainer}>
        <section className={style.navbarBody}>
          <section className={style.title}>
            <article>{this.props.title}</article>
            <section className={style.hamburgerContainer}>
              <button className={style.hamburger} onClick={this.nabvarCollapseToggle}>
                  <span className={this.state.navbarCollapse == "collapse" ? "" : style.cross}></span>
                  <span className={this.state.navbarCollapse == "collapse" ? "" : style.cross}></span>
                  <span className={this.state.navbarCollapse == "collapse" ? "" : style.cross}></span>
              </button>
            </section>
          </section>
          <ul className={[style.navbarList, style[this.state.navbarCollapse]].join(' ')}>
            {
              this.props.menus.map(item => {
                return (
                  <li><a href={item.url}>{item.title}</a></li>
                )
              })
            }
            <li></li>
          
          </ul>
          <button className={style.incrementButton} onClick={this.alertFunction}>Increment</button>
          <section className={style.incrementResult}>
            <b>Count:</b> { this.state.counter }
          </section>
        </section>
      </nav>
    );
  }
}