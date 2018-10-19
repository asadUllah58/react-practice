import React, {Component} from 'react'
import './footer.scss'
export default class Footer extends Component{
  render(){
    return(
      <footer className="footer-container">
        <div className="upper-footer">
          <ul>
            {/* <li>Contact us</li>
            <li>About Clipmine</li>
            <li>Blog</li>
            <li>Help Center</li> */}
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
        </div>

        <div className="lower-footer">
          <ul>
            <li>&copy;{this.props.copyrightText}</li>
            <li>Terms of use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </footer>
    );
  }
}