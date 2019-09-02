import React from 'react';
import arrowRight from '../../Assets/Images/B5216.jpg';
import arrowLeft from '../../Assets/Images/B5216.jpg';
import InstaPhotos from '../helper/APIs/InstaPhotos'
 class Slider extends React.Component {

 
  constructor() {
    super();
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);

    
      
      this.state = {
        // holding the current index for the image that has to be rendered at each time on the screen 
        currentImageIndex: 0,
        images:[],
        // array of the source links to the images, simple placeholders for now
          //  images: [
          //      'https://via.placeholder.com/200x150?text=first',
          //      'https://via.placeholder.com/200x150?text=second',
          //      'https://via.placeholder.com/200x150?text=third',
          //      'https://via.placeholder.com/200x150?text=fourth',
          //      'https://via.placeholder.com/200x150?text=fifth',
          //      'https://via.placeholder.com/200x150?text=sixth',
          //      'https://via.placeholder.com/200x150?text=seventh',
          //      'https://via.placeholder.com/200x150?text=eighth',
          //      'https://via.placeholder.com/200x150?text=ninth',
          //      'https://via.placeholder.com/200x150?text=tenth'
          //  ],
          
        // imported images of right and left arrows
        arrowNext: arrowRight,
        arrowPrev: arrowLeft
    };
}

componentDidMount=()=>{
  this.setState({images: InstaPhotos.getInstaphotos()})
  
}
    prevSlide() {
        // find the index of the last image in the array
        const lastIndex = this.state.images.length - 1;
        // check if we need to start over from the last index again
        const resetIndex = this.state.currentImageIndex === 0;
        const index = resetIndex ? lastIndex : this.state.currentImageIndex - 1;
       // assign the logical index to currentImageIndex that will use in render method
           this.setState({
                currentImageIndex: index
           })
       }
       nextSlide() {
        // find the index of the last image in the array
        const lastIndex = this.state.images.length - 1;
        // check if we need to start over from the first index
        const resetIndex = this.state.currentImageIndex === lastIndex;
        const index = resetIndex ? 0 : this.state.currentImageIndex + 1;
        // assign the logical index to currentImageIndex that will use in render method
          this.setState({
              currentImageIndex: index
          });
       }
       render() {
        // get current image index
        const index = this.state.currentImageIndex;
        // create a new array with 5 videos from the source images
        let firstFiveVideo = this.state.images.slice(index, index + 2);
        // check the length of the new array (it’s less than 5 when index is near the end of the array)
        if (firstFiveVideo.length < 2) {
        // if the firstFiveVideo's length is lower than 5 images than append missing images from the beginning of the original array 
          firstFiveVideo = firstFiveVideo.concat(this.state.images.slice(0, 2 - firstFiveVideo.length))
        }
       return (
          <div>
           {/* // render the left arrow  */}
           {/* <img src={this.state.arrowPrev} /> */}
           {/* <div className="glyphicon glyphicon-arrow-left" onClick={this.prevSlide}></div> */}
           {/* <span className="glyphicon glyphicon-arrow-left" onClick={this.prevSlide}></span>  */}
           <div><i className="fa fa-chevron-circle-left fa-3x floaty-left"  onClick={this.prevSlide}></i></div>
           {/* // render images */}
           {/* <i class="fas fa-chevron-circle-left"></i> */}
           { 
firstFiveVideo.map((image, index) =>
!image ?<div className="spinner-border text-secondary" role="status">
</div> :
                              <img key={index} src={image} style={{width: "200px",height:"180px"}} alt=""/>

)}
           {/* // render the right arrow */}
           <div className="floaty-right"><i className="fa fa-chevron-circle-right fa-3x"  onClick={this.nextSlide}></i></div>
           {/* <div className="glyphicon glyphicon-arrow-left" onClick={this.nextSlide}></div> */}
           {/* <img src={this.state.arrowNext} onClick={this.nextSlide}/> */}
          </div>
         );
    }
};

export default Slider;