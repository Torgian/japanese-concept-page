import React from 'react';
import './gallerySlider.css';
import X1 from './assets/x1.png';
import X2 from './assets/x2.png';
import X3 from './assets/x3.png';
import X4 from './assets/x4.png';

const listItems = [
  {content: X1},
  {content: X2},
  {content: X3},
  {content: X4}
];

function SlideItem(props) {
  return (
    <div className="item-slide">
      <img src={props.prevslide} alt="" />
      <img src={props.content} alt="" />
      <img src={props.nextslide} alt="" />
    </div>
  );
}

const Indicators = (props) => {
  const listIndicators = listItems.map((item, index) => 
    <li
      key={index}
      className={props.currentSlide === index ? 'active' : ''} 
      onClick={() => props.changeSlide(index)}
    ></li>
  );
  return (
    <ul className="indicators">
      {listIndicators}
    </ul>
  );
};

class Slides extends React.Component {
  constructor(props) {
     super(props);
    this.state = {         
         slideshow: props.slide,         
         slideIndex: 0,
         prevslide: props.slide,
         //nextslide: props.slide
    };
    this.currentIndex = 0;
    this.prevIndex = 0;
    this.nextIndex = 1;
    this.pause = false;
  }
   
  componentDidMount() {
    var that = this;
    this.timeout = setTimeout(function () {
        that.goTo('auto')
      }, 3000);    
  }
  
  componentDidUpdate() {
    var that = this;
    if(this.pause === true) {
      clearInterval(this.timeout);
      this.timePause = setTimeout(function(){
        clearInterval(this.timePause);        
      }, 8000);
      this.pause = false;
    }         
    this.timeout = setTimeout(function () {
      that.goTo('auto')
    }, 3000);
    
  }
    
  componentWillUnmount() {
    clearInterval(this.timeout);
  }
  
  goTo = (direction) => { 
      let index = 0;

      switch(direction) {
        case 'auto':
          index = this.currentIndex + 1;
          console.log( this.nextindex, index, listItems.length);
          this.currentIndex = index >= listItems.length ? 0 : index;
          //this.prevIndex = index-1 > listItems.length ? 0 : index;
          //this.nextIndex = index+1 === listItems.length ? 0 : index+1;
        break;
        case 'prev':
          index = this.currentIndex - 1;
          this.currentIndex = index < 0 ? listItems.length - 1 : index;
          //this.prevIndex = index >= 0 ? listItems.length : index;
          this.pause = true;
        break;
        case 'next':
          index = this.currentIndex + 1;
          this.currentIndex = index >= listItems.length ? 0 : index;
          //this.prevIndex = index-1 > listItems.length ? 0 : index;
          this.pause = true;
        break;
        default:
          this.currentIndex = direction;
          //this.prevIndex = direction;
          this.pause = true;
        break;
      }
      console.log('pause:', this.pause);
       this.setState({
         slideIndex: this.currentIndex,
         slideshow: listItems[this.currentIndex],
         //prevslide: listItems[this.prevIndex-1],
         //nextslide: listItems[this.nextIndex]
       });
      
  };
   
  render() {    
    return (
      <div className="slideshow-simple">
        <SlideItem 
          content={this.state.slideshow.content}
          //prevslide={this.state.prevslide.content}
          //nextslide={this.state.nextslide.content}
        />        
        <Indicators 
          changeSlide={this.goTo} // function
          currentSlide={this.state.slideIndex}
          />
        <div className="wrap-control">
          <button className="btn btn-prev" value="Prev" onClick={() => this.goTo('prev')}>Prev</button>   
          <button className="btn btn-next" value="Next" onClick={() => this.goTo('next')}>Next</button>          
        </div>
      </div>
    );
  }    
}

class Element extends React.Component {

  render(){
    return(<Slides slide={listItems[0]}/>);
  }
}

export default Element;
/*ReactDOM.render(
  element,
  document.getElementById("root")
);*/