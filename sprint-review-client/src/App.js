import React, {Component} from 'react';
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
  baseURL: 'http://localhost:8080',
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
    return (
      <div>
        <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport"/>
        <link href="https://fonts.googleapis.com/css?family=Cambo|Poppins:400,600" rel="stylesheet" type="text/css"/>
        <link href="http://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" rel="stylesheet"/>
        <nav className="navbar navbar-default navbar-transparent navbar-fixed-top" color-on-scroll={200}>
          {/* if you want to keep the navbar hidden you can add this class to the navbar "navbar-burger"*/}
          <div className="container">
            <div className="navbar-header">
              <button id="menu-toggle" type="button" className="navbar-toggle" data-toggle="collapse"
                      data-target="example">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar bar1"/>
                <span className="icon-bar bar2"/>
                <span className="icon-bar bar3"/>
              </button>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav navbar-right navbar-uppercase">
                <li>
                  <a href="http://www.creative-tim.com/product/gaia-bootstrap-template"
                     className="btn btn-danger btn-fill">Login/Register</a>
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
                  <h3>For Successful Meetings</h3>
                </div>

                <div className="button-get-started">
                  <a href="http://www.creative-tim.com/product/gaia-bootstrap-template" target="_blank"
                     rel="noopener noreferrer" className="btn btn-white btn-fill btn-lg ">
                    Try Me!
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
                <h2>how it works</h2>
                <div className="separator separator-danger">✻</div>
                <p className="description">Meeting Review boosts and synthesizes all your meetings for making them
                  useful for real</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="info-icon">
                  <div className="icon text-danger">
                    <i className="pe-7s-edit"/>
                  </div>
                  <h3>Choose</h3>
                  <p className="description">Choose your meeting review whether it is a Sprint review or your team
                    weekly meeting</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="info-icon">
                  <div className="icon text-danger">
                    <i className="pe-7s-light"/>
                  </div>
                  <h3>Put your ideas</h3>
                  <p className="description">Put your ideas in live anonymously or not to get the big picture</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="info-icon">
                  <div className="icon text-danger">
                    <i className="pe-7s-note2"/>
                  </div>
                  <h3>Get the report</h3>
                  <p className="description">Get a full meeting report to organise the next steps to make things
                    work</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="info-icon">
                  <div className="icon text-danger">
                    <i className="pe-7s-plane"/>
                  </div>
                  <h3>Share</h3>
                  <p className="description">Share your meeting reports with people and invite them to join future
                    huddles!</p>
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
                    <h2>Why this tool?</h2>
                    <div className="separator separator-danger">✻</div>
                    <p className="description">Meetings are part of our life and can be efficient but also very
                      useless.</p>
                    <p className="description">Meeting review is here to fix it!</p>
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
                                <p className="small-text">Executive</p>
                                <p className="description">I wish I could have every time the best way to handle a
                                  meeting. Having time to prepare it and to synchronize the players around the day
                                  topic. It's really difficult to make people focus at the same time.</p>
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
                                <h3 className="title">Andrew</h3>
                                <p className="small-text">Project Manager</p>
                                <p className="description">I hate having really interesting meetings and loosing most of
                                  the outputs afterward. I need to track everything in a way I can organize my next
                                  actions.</p>
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
                                <p className="small-text">Developper</p>
                                <p className="description">I need to code and to make things work. My goal is to have
                                  the shortest and most efficient meetings to focus afterward on what is really
                                  important: to get things done.</p>
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
                <h5 className="subtitle text-gray">Here is</h5>
                <h2>Your Journey</h2>
                <div className="separator separator-danger">✻</div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="info-icon">
                  <div className="icon text-danger">
                    <i className="pe-7s-gift"/>
                  </div>
                  <h3>Use it for free</h3>
                  <p className="description">Registered or not, you can use it for free and invite your co-workers to
                    join your reviews.</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="info-icon">
                  <div className="icon text-danger">
                    <i className="pe-7s-cart"/>
                  </div>
                  <h3>Pay for more</h3>
                  <p className="description">Pay for 7$/month to keep all your reviews, search them and use them
                    forever!</p>
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
                <h2 className="text-white">Need to contact us?</h2>
                <div className="separator line-separator">♦</div>
                <p className="description">We would be really happy to help you!</p>
              </div>
              <div className="button-get-started">
                <a href="gaia" className="btn btn-danger btn-fill btn-lg">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer footer-big footer-color-black" data-color="black">
          <div className="container">
            <div className="row">
              <div className="col-md-2 col-sm-3">
                <div className="info">
                  <h5 className="title">Meeting Review</h5>
                  <nav>
                    <ul>
                      <li>
                        <a href="">Home</a></li>
                      <li>
                        <a href="">About Us</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-md-3 col-md-offset-1 col-sm-3">
                <div className="info">
                  <h5 className="title">Help and Support</h5>
                  <nav>
                    <ul>
                      <li>
                        <a href="">Contact Us</a>
                      </li>
                      <li>
                        <a href="">Terms &amp; Conditions</a>
                      </li>
                      <li>
                        <a href="">Unsubscribe</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-md-3 col-sm-3">
                <div className="info">
                  <h5 className="title">Latest News</h5>
                  TWITTER
                </div>
              </div>
              <div className="col-md-2 col-md-offset-1 col-sm-3">
                <div className="info">
                  <h5 className="title">Follow us on</h5>
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
              © Meeting Review, made with <i className="pe-7s-like"/>
            </div>
          </div>
        </footer>
        {/*   core js files    */}
        {/*  js library for devices recognition */}
        {/*  script for google maps   */}
        {/*   file where we handle all the script from the Gaia - Bootstrap Template   */}
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

export default App;
