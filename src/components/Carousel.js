import React, {Component} from 'react';
import '../styles/carousel.css';

export default class Carousel extends Component {
  render() {
    var leftArrow = "<"
    var rightArrow = ">"
    var exitButton = "X"
    return (
      <div className="outer-carousel-div">
        <div className="carousel-div">
          <img className="carousel-img" src={this.props.imageUrl} role='presentation' />
        </div>
        <button onClick={this.props.getLastImage} className="left-arrow">
          {leftArrow}
        </button>
        <button onClick={this.props.getNextImage} className="right-arrow">
          {rightArrow}
        </button>
        <button onClick={this.props.exitCarousel} className="exitButton">
          {exitButton}
        </button>
      </div>
    )
  }
}
