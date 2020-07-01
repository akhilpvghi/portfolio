  import React, {Component} from 'react';
  import '../../Styles/Footer.css';
  import {Link} from 'react-router-dom';
  class Footer extends Component{
      render() {
          return(
              <footer className="page-footer font-small cyan darken-3 pt-5 mt-3">
          <div className="mb-3 flex-center" style={{textAlign: "center"}}>
            <Link to="//facebook.com/adgrt" target="_blank"  className="fb-ic black"   >
            <i  className="fa fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
            </Link>
            <Link to="//twitter.com/akhilpvghi" target="_blank" className="tw-ic black">
              <i className="fa fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
              </Link>
            <Link to="//linkedin.com/in/akhil-kumar-91097566" target="_blank"  className="li-ic black"   >
              <i className="fa fa-linkedin fa-fw fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
            </Link>
            <Link to="//instagram.com/akhilpandey709" target="_blank" className="ins-ic black">
              <i className="fa fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
              </Link>
            <Link to="//in.pinterest.com/akhilpvghi" target="_blank" className="pin-ic black">
              <i className="fa fa-pinterest fa-lg white-text fa-2x"> </i>
              </Link>
          </div>
    <div className="footer-copyright text-center">© {new Date().getFullYear()} Copyright: PVGHI
    </div>

  </footer>
          );
      }
  }

  export default Footer;
