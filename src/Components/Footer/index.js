  import React, {Component} from 'react';
  import '../../Styles/Footer.css';
  import {Link} from 'react-router-dom';
  class Footer extends Component{
      render() {
          return(
              // <div className="Footer">{this.props.footerElements.map((a,index)=>{
              //     return(<a key={index}>{a}</a>)
              // })}</div>
              <footer className="page-footer font-small cyan darken-3 pt-5 mt-3">

    <div className="container">
      <div className="row">

        <div className="col-md-12">
          <div className="mb-3 flex-center" style={{textAlign: "center"}}>

            {/* <a className="fb-ic">
            <i href="https://www.facebook.com/adgrt" className="fa fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
            </a>
            to="route" target="_blank" onClick={(event) => {event.preventDefault(); window.open(this.makeHref("route"));}} */}

            <Link to="//facebook.com/adgrt" target="_blank"  className="fb-ic black"   >
            <i  className="fa fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
            </Link>
            {/* <a className="tw-ic"> */}
            <Link to="//twitter.com/akhilpvghi" target="_blank" className="tw-ic black">
              <i className="fa fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
              </Link>
            {/* </a> */}
            {/* <a className="gplus-ic black"> */}
            {/* <Link className="gplus-ic black">
              <i className="fa fa-google-plus fa-fw fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
              </Link> */}
            {/* </a> */}
            {/* <a className="li-ic "> */}
            <Link to="//linkedin.com/in/akhil-kumar-91097566" target="_blank"  className="li-ic black"   >
            {/* https://www.linkedin.com/in/akhil-kumar-91097566 */}
              <i className="fa fa-linkedin fa-fw fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
            {/* </a> */}
            </Link>
            {/* <a className="ins-ic black"> */}
            <Link to="//instagram.com/akhilpandey709" target="_blank" className="ins-ic black">
              <i className="fa fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
              </Link>
            {/* </a> */}
            {/* <a className="pin-ic black"> */}
            <Link to="//in.pinterest.com/akhilpvghi" target="_blank" className="pin-ic black">
              <i className="fa fa-pinterest fa-lg white-text fa-2x"> </i>
              </Link>
            {/* </a> */}
          </div>
        </div>

      </div>

    </div>
    <div className="footer-copyright text-center">© 2019 Copyright: PVGHI
      {/* <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a> */}
    </div>

  </footer>
          );
      }
  }

  export default Footer;
