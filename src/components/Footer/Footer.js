import React, {Component} from 'react'
import style from './footer.scss'

export default class Footer extends Component{
  render(){
    return(
      <footer className={style.footerContainer}>
        <section className={style.upperFooter}>
          <ul>
            {
              this.props.menus.map(
                item => {
                  return(
                    <li><a href={item.url}>{item.title}</a></li>
                  )
                }
              )
            }
          </ul>
        </section>

        <section className={style.lowerFooter}>
          <ul>
            <li>&copy;{this.props.copyrightText}</li>
            <li>Terms of use</li>
            <li>Privacy Policy</li>
          </ul>
        </section>
      </footer>
    );
  }
}