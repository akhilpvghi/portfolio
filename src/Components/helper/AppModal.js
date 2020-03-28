  import React, {Component} from 'react';
  import Slider from './slider';
  import InstaPhotos from '../helper/APIs/InstaPhotos';
  import Table from '../helper/Table';
  class AppModal extends Component{

      // const [show, setShow] = useState(false);
      state={
        showModal: true,
        componentToLoad: null,
        iconToLoad:null,
        isModalBodyRequire: true
        // messgaeTochild: 'Loading...'
    }
      constructor(props){
        super(props);
        this.checkShow = this.checkShow.bind(this);
        this.setState({show: this.props.isShowModal})
        
      }

      
  
      // compo =(<div className="spinner-border text-secondary" role="status"></div>)=>{
      //   return compo;
      //   }


      updateAndNotify=()=>{
        let successRes =(<div className=" processing" role="status" >
        <i className="fa fa-check-circle text-success" style={{fontSize: 41+"px"}}></i>
        </div>);
  
  let errorRes =(<div className=" processing" role="status" >
  <i className="fa  fa-times-circle text-danger" style={{fontSize: 41+"px"}}></i>
  </div>);
  
  
          let processing =(
            <div className="a">
            <div className="spinner-grow text-primary" role="status">
                  </div>
                  <div className="spinner-grow text-secondary" role="status">
                  </div>
                  <div className="spinner-grow text-success" role="status">
                  </div>
                  <div className="spinner-grow text-danger" role="status">
                  </div>
                  <div className="spinner-grow text-warning" role="status">
                  </div>
                  <div className="spinner-grow text-info" role="status">
                  </div>
                  <div className="spinner-grow text-dark" role="status">
                  </div>
                  </div>) ;
                  
                  // this.setState({mesgFromCompo: this.props.messageToChild})
          console.log("after slicing-------->",this.props.messageToChild.slice(0,4))
          switch(this.props.messageToChild.toLowerCase().slice(0,4)){
            case 'succ': this.setState({iconToLoad: successRes});
            break;
            case 'erro': this.setState({iconToLoad : errorRes});
            break;
            case 'proc': this.setState({iconToLoad : processing});
            break;
          }
      }

      componentDidUpdate=(prevProps)=>{

        if (prevProps.messageToChild !== this.props.messageToChild) {
          this.updateAndNotify();
        }
        
  

      }
      componentDidMount=(props)=>{

        

        // this.setState({messgaeTochild: this.props.messagetoChild});
        if(this.props.componentToLoad.includes('gall')){
          this.setState({componentToLoad: <Slider />});
        }else if(this.props.componentToLoad.includes('tabl')){
          this.setState({componentToLoad: <Table />})
        }else {
          this.setState({isModalBodyRequire : false});
          // this.setState({componentToLoad: 
          
          // })
        }
        this.updateAndNotify();
        
        
        // {(!this.props.messageToChild.includes('succ'))?(this.props.messageToChild.includes('Err'))?errorRes: processing:successRes}
        // bi bi-check
        // spinner-border text-primary
        // console.log('componentToLoadcomponentToLoad from appModal ',this.props.messagetoChild)
        // this.props.componentToLoad
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
            
            <div className= "" id="myModal">
              <div className="modal-dialog incWidth">
                  <div className="modal-content incWidth controlOverflow">
                    <div className="modal-header">
                        <h4 className="modal-title">{this.props.messageToChild}</h4>
                        {/* here modal */} {this.state.iconToLoad}
                        <div className="primary fa fa-times-circle fa-2x cursrPointer" onClick={()=>{this.checkShow("close")}}>
                        </div>
                    </div>
                    
                    {this.state.isModalBodyRequire ? 
                    (<div className="modal-body">
                    {this.state.componentToLoad}
                    </div>):null}
                    
                    
                    <div className="modal-footer">
                          <button type="button" className="btn btn-danger" onClick={()=>{this.checkShow("close")}} >Close</button>
                        </div>
                    </div>
                    </div>
                    </div>
                    
                  )
      }
  }

  export default AppModal;