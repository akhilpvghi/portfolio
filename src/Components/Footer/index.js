import React, {Component} from 'react';
import '../../Styles/Footer.css';
class Footer extends Component{
    render() {
        return(
            // <div className="Footer">{this.props.footerElements.map((a,index)=>{
            //     return(<a key={index}>{a}</a>)
            // })}</div>
            <footer className="page-footer font-small cyan darken-3">

  <div className="container">
    <div className="row">

      <div className="col-md-12 py-5">
        <div className="mb-5 flex-center">

          <a className="fb-ic">
            <i className="fa fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          <a className="tw-ic">
            <i className="fa fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          <a className="gplus-ic">
            <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          <a className="li-ic">
            <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          <a className="ins-ic">
            <i className="fa fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          <a className="pin-ic">
            <i className="fa fa-pinterest fa-lg white-text fa-2x"> </i>
          </a>
        </div>
      </div>

    </div>

  </div>
  <div className="footer-copyright text-center py-3">© 2018 Copyright:
    <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
  </div>

</footer>
        );
    }
}

export default Footer;
