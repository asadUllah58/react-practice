import React, {Component} from 'react';
import './section.scss';

export default class Section extends Component{
  render(){
    return(
      <section className="section-container">
        <div className="container">
          <p className="section-heading">{this.props.heading}</p>

          <div className="section-body">
            {this.props.children}
          </div>
        </div>
      </section>
    );
  }
}