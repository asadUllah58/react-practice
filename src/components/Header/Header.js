import React, {Component} from 'react';
import style from './header.scss';
class Header extends Component{
  render(){
    return(
      <header className={style.mainHeader}>
        <section className={style.headerContent}>
          <section className={style.headerTitle}>
            {this.props.headerTitle}
          </section>

          <p className={style.headerDescription}>
            {this.props.headerDescription}
          </p>
        </section>
      </header>
    )
  }
} 

export default Header