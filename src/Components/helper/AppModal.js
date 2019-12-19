import React, {Component} from 'react';
import Slider from './slider';
import InstaPhotos from '../helper/APIs/InstaPhotos';
import Table from '../helper/Table';
class AppModal extends Component{

    // const [show, setShow] = useState(false);
    state={
      showModal: true,
      componentToLoad: null
  }
    constructor(props){
      super(props);
      this.checkShow = this.checkShow.bind(this);
      this.setState({show: this.props.isShowModal})
      
    }

    componentDidMount=(props)=>{
      if(this.props.componentToLoad.includes('gall')){
        this.setState({componentToLoad: <Slider />})
      }else if(this.props.componentToLoad.includes('tabl')){
        this.setState({componentToLoad: <Table />})
      }
      console.log('componentToLoadcomponentToLoad  ',this.props.componentToLoad)
    }

    

    setShow = (setVal) => {
      
        //
        //     show: setVal
        // })
        // this.state.show=setVal;
        // console.log("setShoww",this.state.show,setVal,"this.checkShow()",this.checkShow());
        this.setState({});
    }

   handleClose = () => this.setShow(false);
   handleShow = () => this.setShow(true);

  //  componentDidUpdate(prevProps, prevState) {
  //   // only update chart if the data has changed
  //   // if (prevProps.isShowModal !==  this.state.show) {
  //     this.state.show=false;
  //     return
  //   // }
  // }

   checkShow=(event)=>{
    this.props.isClosedFromAppModal(event);
     
   }
 
 

    render(props){
      // this.setState({show:this.props.isShowModal});
      // this.state.show=this.props.isShowModal;
        return(
          <div>
          <div className= "" id="myModal">
             <div className="modal-dialog incWidth">
                <div className="modal-content incWidth controlOverflow">
                   <div className="modal-header">
                      <h4 className="modal-title">How Do you like them?</h4>
                      <div className="primary fa fa-times-circle fa-2x cursrPointer" onClick={()=>{this.checkShow("close")}}>
                      </div>
                   </div>
                   
                   <div className="modal-body">
                     {this.state.componentToLoad}
                   </div>
                   <div className="modal-footer">
                         <button type="button" className="btn btn-danger" onClick={()=>{this.checkShow("close")}} >Close</button>
                      </div>
                   </div>
                   </div>
                   </div>
                   </div>
                )
    }
}

export default AppModal;