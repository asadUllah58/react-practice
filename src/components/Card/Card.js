import React, {Component} from 'react';
import style from './card.scss';

import * as image from './../../Images/features/index-sharing_300x120.png'

export default class Card extends Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }
  render(){
    /* var cardType = this.props.type;*/
    if(this.props.type){
      return(
        <article className={this.props.type == "vertical" ? style.cardContainer : style.horizontalCardContainer}>
          <img src = {this.props.imageSource} className={this.props.type == "vertical" ? style.cardImage : style.horizontalCardImage}/>
          <section className={this.props.type == "vertical" ? (this.props.headingType == "inner" ? style.innerHeading : "") : style.horizontalCardContent}>
            <h1 className={style.cardHeading}>{this.props.heading}</h1>
            <summary className={style.cardDescription}>{this.props.description}</summary>
          </section>
        </article>
      );
    /* }else if(cardType == "horizontal"){
      return(
        <article className={style.horizontalCardContainer}>
          
          <img src={this.props.imageSource} className={style.horizontalCardImage}/>
          
          <div className={style.horizontalCardContent}>
            <h2>{this.props.heading}</h2>
            <p>{this.props.description}</p>
          </div>
        </article>
      ); */
    }else{
      return(
        <div>
          No card type is defined!
        </div>
      );
    }
  }
}