  import React, {Component} from 'react';
  import Slider from './slider';
  import InstaPhotos from '../helper/APIs/InstaPhotos';
  import Table from '../helper/Table';
import Auth from './Auth';
  class AppModal extends Component{

      // const [show, setShow] = useState(false);
      // const[isAuthenticated,setIsAuthenticated] =  useState(false);
      state={
        showModal: true,
        componentToLoad: null,
        iconToLoad:null,
        isModalBodyRequire: true,
        isProcessing: false,
        columns: null,
        isAuthenticated: false
        // messgaeTochild: 'Loading...'
    }
      constructor(props){
        super(props);
        this.checkShow = this.checkShow.bind(this);
        this.setState({show: this.props.isShowModal})
        // this.setState({columns: })
        
      }

      
  
      // compo =(<div className="spinner-border text-secondary" role="status"></div>)=>{
      //   return compo;
      //   }
      funcToFindIsUserAuthenticated=(isAuthenticatedreplyFromAuthComp)=>{
        this.setState({isAuthenticated: isAuthenticatedreplyFromAuthComp});
        this.props.isAuthenticatedEventToAuth(true);
     }


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

          switch(this.props.messageToChild.toLowerCase().slice(0,4)){
            case 'succ': this.setState({iconToLoad: successRes});
            this.setState({isProcessing:false})
            break;
            case 'erro': this.setState({iconToLoad : errorRes});
            this.setState({isProcessing:false})
            break;
            case 'proc': this.setState({iconToLoad : processing});
                        this.setState({isProcessing:true})
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
          this.setState({componentToLoad: <Table columns={this.props.textFieldObjectcolumns}></Table>})
        }else if(this.props.componentToLoad.includes('Auth')){
          this.setState({componentToLoad: <Auth isAuthenticatedEventToAuth={this.funcToFindIsUserAuthenticated}></Auth>})
        }else {
          this.setState({isModalBodyRequire : false});
          // this.setState({componentToLoad: 
          
          // this.setState({isProcessing : this.props.messageToChild.toLowerCase().slice(0,4).includes('proc')});
          // })
        }
        this.updateAndNotify();
      }

      

      setShow = (setVal) => {
          this.setState({});
      }

    handleClose = () => this.setShow(false);
    handleShow = () => this.setShow(true);

    checkShow=(event)=>{
      this.props.isClosedFromAppModal(event);
      
    }
  
  

      render(props){
        // this.setState({show:this.props.isShowModal});
        // this.state.show=this.props.isShowModal;


          return(
            <div className="col-md-12 Appmodal padd0"> 
            <div className= "" id="myModal">
              <div className="modal-dialog incWidth">
                  <div className="modal-content incWidth controlOverflow">
                    <div className="modal-header">
                        <h4 className="modal-title">{this.props.messageToChild}</h4>
                        {/* here modal */} 
                        {this.state.iconToLoad}
                        {!this.state.isProcessing? <div className="primary fa fa-times-circle fa-2x cursrPointer" onClick={()=>{this.checkShow("close")}}>
                        </div>:null}
                        
                    </div>
                    
                    {this.state.isModalBodyRequire ? 
                    (<div className="modal-body">
                    {this.state.componentToLoad}
                    </div>):null}
                    
                    
                    <div className="modal-footer">
                      {!this.state.isProcessing?<button type="button" className="btn btn-danger" onClick={()=>{this.checkShow("close")}} >Close</button>
                        :null}
                          </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    
                  )
      }
  }

  export default AppModal;