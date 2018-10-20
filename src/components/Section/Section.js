import React, { Component } from 'react';
import style from './section.scss';

export default class Section extends Component {
  render() {
    return (
      <section className={style.sectionContainer}>
        <p className={style.sectionHeading}>{this.props.heading}</p>

        <section className={style.sectionBody}>
          {this.props.children}
        </section>
      </section>
    );
  }
}