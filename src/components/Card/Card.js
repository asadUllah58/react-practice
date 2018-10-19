import React, {Component} from 'react';
import './card.scss';

import * as image from './../../Images/features/index-sharing_300x120.png'

export default class Card extends Component{
  
  render(){
    var cardType = this.props.type;
    if(cardType == "vertical"){
      return(
        <div className="card-container">
          {/* <img src={this.props.imageSource} className="card-image"/> */}
          <img src = {this.props.imageSource} className="card-image"/>
          <h1 className="card-heading">{this.props.heading}</h1>
          <p className="card-description">{this.props.description}</p>
        </div>
      );
    }else if(cardType == "horizontal"){
      return(
        <div className="horizontal-card-container">
          <div className="horizontal-card-image">
            <img src={this.props.imageSource} className="horizontal-card-image"/>
          </div>

          <div className="horizontal-card-content">
            <h2>{this.props.heading}</h2>
            <p>{this.props.description}</p>
          </div>
        </div>
        
      );
    }else{
      return(
        <div>
          No card type is defined!
        </div>
      );
    }
  }
}