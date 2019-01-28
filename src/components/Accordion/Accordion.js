import React, {Component} from 'react'
import style from './accordion.scss'

export default class Accordion extends Component{
  constructor(props){
    super(props);
    this.state = {
      accordionCollapse: "collapse"
    }

    this.accordionToggle = this.accordionToggle.bind(this);
  }

  accordionToggle(){
    this.setState({ accordionCollapse: this.state.accordionCollapse == "collapse"? '' : 'collapse' });
  }
  
  render(){
    return(
      <div>
        <button className={style.accordion} onClick={this.accordionToggle}>{this.props.title}</button>
        <div className={[style.panel, this.state.accordionCollapse == "collapse"? style.hide : style.show].join(' ')}>
          <p>{this.props.content}</p>
        </div>
      </div>
    );
  }
}