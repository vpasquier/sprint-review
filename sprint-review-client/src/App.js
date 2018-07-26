import React, {Component} from 'react';
import {Trans, translate} from "react-i18next";
import axios from 'axios';
/********* STYLES *********/
import './App.css';
import './assets/css/bootstrap.css'
import './assets/css/gaia.css'
import './assets/css/fonts/pe-icon-7-stroke.css'
/********* IMAGES *********/
import image1 from './assets/img/firstImage.jpg'
import image2 from './assets/img/secondImage.jpg'
import image3 from './assets/img/thirdImage.jpg'
import face1 from './assets/img/faces/face_1.jpg'
import face2 from './assets/img/faces/face_2.jpg'
import face3 from './assets/img/faces/face_3.jpg'

const axiosSR = axios.create({
  baseURL: 'https://sprint-review-dev.herokuapp.com',
});

const GET_ADULT = `
  {
    jedi(phase:"adult"){
      name
    }
  }
`;

const firstImage = {backgroundImage: `url('${image1}')`};
const secondImage = {backgroundImage: `url('${image2}')`};
const thirdImage = {backgroundImage: `url('${image3}')`};


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {jedi: {}};
  }

  render() {
    const {i18n} = this.props;

    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };
    return (
      <div>
        <Trans>
          <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport"/>
          <link href="https://fonts.googleapis.com/css?family=Cambo|Poppins:400,600" rel="stylesheet" type="text/css"/>
          <link href="http://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" rel="stylesheet"/>
          <nav className="navbar navbar-default navbar-transparent navbar-fixed-top" color-on-scroll={200}>
            {/* if you want to keep the navbar hidden you can add this class to the navbar "navbar-burger"*/}
            <div className="container">
              <div className="navbar-header">
                <button className="btn btn-sm btn-round btn-black btn-fill" onClick={() => changeLanguage("es")}>Es</button>
                <button className="btn btn-sm btn-round btn-black btn-fill" onClick={() => changeLanguage("en")}>En</button>
                <button className="btn btn-sm btn-round btn-black btn-fill" onClick={() => changeLanguage("fr")}>Fr</button>
              </div>
              <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right navbar-uppercase">
                  <li>
                    <a href="http://www.creative-tim.com/product/gaia-bootstrap-template"
                       className="btn btn-round btn-black btn-fill btn-lg"><Trans>login.register</Trans></a>
                  </li>
                </ul>
              </div>
              {/* /.navbar-collapse */}
            </div>
          </nav>
          <div className="section section-header">
            <div className="parallax filter filter-color-red">
              <div className="image" style={firstImage}>
              </div>
              <div className="container">
                <div className="content">
                  <div className="title-area">
                    <h1 className="title-modern">Meeting Review</h1>
                    <div className="separator line-separator">♦</div>
                    <h3><Trans>baseline</Trans></h3>
                  </div>

                  <div className="button-get-started">
                    <a href="http://www.creative-tim.com/product/gaia-bootstrap-template" target="_blank"
                       rel="noopener noreferrer" className="btn btn-round btn-black btn-fill btn-lg">
                      <Trans>button.try</Trans>
                    </a>
                  </div>
                  <Jedi jedi={this.state.jedi}/>
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="container">
              <div className="row">
                <div className="title-area">
                  <h2><Trans>how.work</Trans></h2>
                  <div className="separator separator-danger">✻</div>
                  <p className="description"><Trans>how.work.definition</Trans></p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <div className="info-icon">
                    <div className="icon text-danger">
                      <i className="pe-7s-edit"/>
                    </div>
                    <h3><Trans>Choose</Trans></h3>
                    <p className="description"><Trans>Choose.message</Trans></p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="info-icon">
                    <div className="icon text-danger">
                      <i className="pe-7s-light"/>
                    </div>
                    <h3><Trans>Put your ideas</Trans></h3>
                    <p className="description"><Trans>ideas.message</Trans></p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="info-icon">
                    <div className="icon text-danger">
                      <i className="pe-7s-note2"/>
                    </div>
                    <h3><Trans>Get the report</Trans></h3>
                    <p className="description"><Trans>report.message</Trans></p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="info-icon">
                    <div className="icon text-danger">
                      <i className="pe-7s-paper-plane"/>
                    </div>
                    <h3><Trans>Share</Trans></h3>
                    <p className="description"><Trans>share.message</Trans></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section section-our-team-freebie">
            <div className="parallax filter filter-color-black">
              <div className="image" style={secondImage}>
              </div>
              <div className="container">
                <div className="content">
                  <div className="row">
                    <div className="title-area">
                      <h2><Trans>Why this tool?</Trans></h2>
                      <div className="separator separator-danger">✻</div>
                      <p className="description"><Trans>why.message.1</Trans></p>
                      <p className="description"><Trans>why.message.2</Trans></p>
                    </div>
                  </div>
                  <div className="team">
                    <div className="row">
                      <div className="col-md-10 col-md-offset-1">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="card card-member">
                              <div className="content">
                                <div className="avatar avatar-danger">
                                  <img alt="..." className="img-circle" src={face1}/>
                                </div>
                                <div className="description">
                                  <h3 className="title">David</h3>
                                  <p className="small-text"><Trans>Executive</Trans></p>
                                  <p className="description"><Trans>executive.message</Trans></p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="card card-member">
                              <div className="content">
                                <div className="avatar avatar-danger">
                                  <img alt="..." className="img-circle" src={face2}/>
                                </div>
                                <div className="description">
                                  <h3 className="title"><Trans>Andrew</Trans></h3>
                                  <p className="small-text"><Trans>Project Manager</Trans></p>
                                  <p className="description"><Trans>manager.message</Trans></p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="card card-member">
                              <div className="content">
                                <div className="avatar avatar-danger">
                                  <img alt="..." className="img-circle" src={face3}/>
                                </div>
                                <div className="description">
                                  <h3 className="title">Michelle</h3>
                                  <p className="small-text">Developer</p>
                                  <p className="description">
                                    <Trans>developer.message</Trans>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="container">
              <div className="row">
                <div className="title-area">
                  <h5 className="subtitle text-gray"><Trans>Here is</Trans></h5>
                  <h2><Trans>Your Journey</Trans></h2>
                  <div className="separator separator-danger">✻</div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="info-icon">
                    <div className="icon text-danger">
                      <i className="pe-7s-gift"/>
                    </div>
                    <h3><Trans>Use it for free</Trans></h3>
                    <p className="description"><Trans>free.message</Trans></p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="info-icon">
                    <div className="icon text-danger">
                      <i className="pe-7s-cart"/>
                    </div>
                    <h3><Trans>Pay for more</Trans></h3>
                    <p className="description"><Trans>pay.message</Trans></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section section-small section-get-started">
            <div className="parallax filter">
              <div className="image" style={thirdImage}>
              </div>
              <div className="container">
                <div className="title-area">
                  <h2 className="text-white"><Trans>contact.need.us</Trans></h2>
                  <div className="separator line-separator">♦</div>
                  <p className="description"><Trans>happy.message</Trans></p>
                </div>
                <div className="button-get-started">
                  <a href="gaia" className="btn btn-danger btn-fill btn-lg"><Trans>Contact Us</Trans></a>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer footer-big footer-color-black" data-color="black">
            <div className="container">
              <div className="row">
                <div className="col-md-2 col-sm-3">
                  <div className="info">
                    <h5 className="title"><Trans>Meeting Review</Trans></h5>
                    <nav>
                      <ul>
                        <li>
                          <a href=""><Trans>Home</Trans></a></li>
                        <li>
                          <a href=""><Trans>About Us</Trans></a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-md-3 col-md-offset-1 col-sm-3">
                  <div className="info">
                    <h5 className="title"><Trans>Help and Support</Trans></h5>
                    <nav>
                      <ul>
                        <li>
                          <a href=""><Trans>Contact Us</Trans></a>
                        </li>
                        <li>
                          <a href=""><Trans>Terms &amp; Conditions</Trans></a>
                        </li>
                        <li>
                          <a href=""><Trans>Cancel Account</Trans></a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-md-3 col-sm-3">
                  <div className="info">
                    <h5 className="title"><Trans>Latest News</Trans></h5>
                    TWITTER
                  </div>
                </div>
                <div className="col-md-2 col-md-offset-1 col-sm-3">
                  <div className="info">
                    <h5 className="title"><Trans>Follow us on</Trans></h5>
                    <nav>
                      <ul>
                        <li>
                          <a href="" className="btn btn-social btn-facebook btn-simple">
                            <i className="fa fa-facebook-square"/> Facebook
                          </a>
                        </li>
                        <li>
                          <a href="" className="btn btn-social btn-twitter btn-simple">
                            <i className="fa fa-twitter"/> Twitter
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <hr/>
              <div className="copyright">
                © Meeting Review, made with <i className="pe-7s-like"/> en el Barrio, NYC
              </div>
            </div>
          </footer>
          {/*   core js files    */}
          {/*  js library for devices recognition */}
          {/*  script for google maps   */}
          {/*   file where we handle all the script from the Gaia - Bootstrap Template   */}
        </Trans>
      </div>);
  }

  componentDidMount() {
    this.onFetch();
  }

  onFetch = () => {
    axiosSR
      .post('/query', {query: GET_ADULT})
      .then(result =>
        this.setState(() => ({
          jedi: result.data.data.jedi,
          errors: result.data.errors,
        })),
      );
  };
}

const Jedi = ({jedi}) => (
  <div>
    <p>
      <strong>Jedi:</strong>
      {jedi.name}
    </p>
  </div>
);

export default translate("translations")(App);
