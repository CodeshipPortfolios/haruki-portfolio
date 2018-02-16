import React, { Component } from 'react'
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom'
import headerItemImgs from './images/header_item.png'
import homeButtonOuterRing from './images/homebutton-outerring.png'
import homeButtonMiddleRing from './images/homebutton-middlering.png'
import homeButtonInnerRing from './images/homebutton-innerring.png'
import homeButtonStick from './images/homebutton-stick.png'
import progressScale from './images/progress_scale.png'
import ClassNames from 'classnames';
import Switch from 'react-router-dom/Switch';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      pageTrans: false,
    };
    this.clearView = this.clearView.bind(this);
  }

  clearView(e){
    console.log(this.state.pageTrans);
    this.setState(() => {
      return { pageTrans: true };
    });
    console.log(this.state.pageTrans);
    setTimeout(() => {
      this.setState({ pageTrans: false });
    }, 600);
    console.log(this.state.pageTrans);
  }
  
  render() {
    const pageTransition = ClassNames(
      "container-fluid",
      "base_back",
      "flex",
      {
        "pageTransitioning": this.state.pageTrans === true
      }
    );
    return (
      <BrowserRouter>
        <div>
          <nav className="navbar navbar-toggleable-sm navbar_global" id="globalNavi">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
                <p className="navbar-toggler_text">MENU</p>
            </button>
            <div className="collapse navbar-collapse" id="navbarToggler">
              <ul className="navbar-nav mr-auto ml-auto mt-md-2 mt-lg-0">
                <li className="page_item home_button">
                  <Link to='/'  onClick={ () => this.clearView()} >
                    <p className="home_button_element_text">HOME</p>
                    <img className="home_button_element_outer" alt="home button outer" src={homeButtonOuterRing} />
                    <img className="home_button_element_middle" alt="home button middle" src={homeButtonMiddleRing} />
                    <img className="home_button_element_inner" alt="home button inner" src={homeButtonInnerRing} />
                    <img className="home_button_element_stick" alt="home button stick" src={homeButtonStick} />
                  </Link>
                </li>
                <li className="page_item_wrapper">
                  <div className="page_item"  onClick={ () => this.clearView()} >
                    <Link to='/about' className="font-sm">ABOUT</Link>
                  </div>
                  <div className="page_item" onClick={ () => this.clearView()} >
                    <Link to='/friends' className="font-sm">THE WORKS</Link>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        <main>
          <div className={pageTransition}>
            <div className="base_sidebar">
              <span className="base_sidebar_inner"></span>
            </div>
            <div className="base_sidebar">
              <span className="base_sidebar_inner"></span>
            </div>
            <div className="base_content">
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' render={props => <About parentClear={this.clearView} match={props.match} />} />
              </Switch>
            </div>
          </div>
        </main>
        <footer>
          <Switch>
            <Route exact path='/' render={props => <FooterHome parentClear={this.clearView} />} />
            <Route path='/about' render={props => <PageAboutList parentClear={this.clearView} url="/about" />} />
          </Switch>
        </footer>
        </div>
      </BrowserRouter>
    )
  }
}
class FooterHome extends Component{
  render(){
    return(
      <ul className="linklist flex">
        <li key={0} className="linklist_btn-wrapper">
          <NavLink activeClassName="selected" to="" className="linklist_btn" onClick={ () => this.props.parentClear()}>
            <span className="btn-body font-sm flex">TOP</span>
          </NavLink>
        </li>
      </ul>
    )
  }
}

const Lp = () => (
  <div className="container-fluid lp_back flex">
    <h1 className="lp_title">THINK!</h1>
    <p className="lp_text">GO TO SITE→</p>
  </div>
)

class Home extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){
    return(
        <div className="wrapper flex">
            <img src={headerItemImgs} className="header_item" alt="header background" />
            <header>
              <h1 className="header_title font-xl glitch glitch-alltime" data-text="PORTFOLIO SITE">PORTFOLIO SITE</h1>
              <p className="header_text font-xs">AUTHOR:<span className="font-xxs">HARUKI KAWASHITA</span></p>
            </header>
          </div>
    )
  }
}
const HomeIntro =() =>(
  <div>
  </div>
)
class About extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    PAGELIST.forEach(pageAbout => {
      this.setState({
        ...this.state,
        [pageAbout.id]: 0
      })
    })
  }

  render() {
    const match = this.props.match
    return (
      <div className="wrapper flex">
          <Route exact path={`${match.url}`} component={AboutTop} />
          <Route path={`${match.url}/:id`} render={props => <PageAbout match={props.match} />} />
      </div>
    )
  }
}
const routes = [
  { path: '/about',
    component: About,
    routes: [
      { path: '/about/intro',
        component: AboutIntro
      },
      { path: '/about/skills',
        component: AboutSkills
      }
    ]
  },
  { path: '/about',
    component: About,
    routes: [
      { path: '/about/intro',
        component: AboutIntro
      },
      { path: '/about/skills',
        component: AboutSkills
      }
    ]
  },
]
const PAGELISTS = [
  {
    id: 'about',
    number: '0'
  },
  {
    id: 'works',
    number: '1',
  }
]
const PAGELIST = [
  {
    id: 'intro',
    number: '1',
    title:'INTRODUCTION'
  },
  {
    id: 'skills',
    number: '2',
    title:'MY SKILLS'
  },
]

const pageAboutById = id => PAGELIST.find(pageAbout => pageAbout.id === id)

class PageAboutList extends Component{
  constructor(props) {
    super(props)
    this.state = {}
  }

  render(){
    const url=this.props.url
    return(
      <ul className="linklist flex">
        <li key={0} className="linklist_btn-wrapper">
          <NavLink activeClassName="selected" to={`${url}`} className="linklist_btn" onClick={ () => this.props.parentClear()}>
            <span className="btn-body font-sm flex">TOP</span>
          </NavLink>
        </li>
        {PAGELIST.map(pageAbout => (
          <li key={pageAbout.number} className="linklist_btn-wrapper">
            <NavLink activeClassName="selected" to={`${url}/${pageAbout.id}`} className="linklist_btn" onClick={ () => this.props.parentClear()}>
              <span className="btn-body font-xs flex">{pageAbout.number}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    )
  }
}

class PageAbout extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render(){
    const { id } = this.props.match.params
    const pageAbout = pageAboutById(id)
    const pageAboutContent = [<AboutIntro />,<AboutSkills />]
    if (typeof pageAbout === 'undefined')  {
      return (
        <div>
          <p>Friends with id '{id}' does not exist.</p>
        </div>
      )
    }
    return (
      <section>
        <h1 className="About_title font-lg">{pageAbout.title}</h1>
          {pageAboutContent[pageAbout.number-1]}
      </section>
    )
  }
}
const AboutTop =() =>(
  <div>
    <h1>THINK IT HARD</h1>
    <p>PLEASE SELECT PAGE</p>
  </div>
)
const AboutIntro =() =>(
  <table className="table About_text font-sm">
    <tbody>
      <tr>
        <th scope="row">name</th>
        <td>haruki kawashita</td>
      </tr>
      <tr>
        <th scope="row">job</th>
        <td>College students</td>
      </tr>
      <tr>
        <th scope="row">HOBBY</th>
        <td>tennis, cooking, <span className="nowrap">movie appreciation</span></td>
      </tr>
      <tr>
        <th scope="row">TREND</th>
        <td>pancake</td>
      </tr>
    </tbody>
  </table>
)
class AboutSkills extends Component{
  render(){
    return(
      <div className="About_skills">
      <table className="table About_skills container-fluid">
        <tbody>
        <tr className="About_skills-title row">
          <th scope="row" className="font-sm col-4 col-sm-3 col-md-2">MY SKILLS</th>
          <td className="col-8 col-sm-9 col-md-10">
            <img className="About_skills-scale" src={progressScale} alt="scale" />
          </td>
        </tr>
        <tr className="About_skills-content row">
          <th scope="row" className="font-xs col-4 col-sm-3 col-md-2">HTML5</th>
          <td className="col-8 col-sm-9 col-md-10 progress About_skills_progress">
            <div className="progress-bar About_skills_progress-bar" style={{width:90+'%'}} role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
          </td>
        </tr>
        <tr className="About_skills-content row">
          <th scope="row" className="font-xs col-4 col-sm-3 col-md-2">CSS3</th>
          <td className="col-8 col-sm-9 col-md-10 progress About_skills_progress">
            <div className="progress-bar About_skills_progress-bar" style={{width:95+'%'}} role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
          </td>
        </tr>
        <tr className="About_skills-content row">
          <th scope="row" className="font-xs col-4 col-sm-3 col-md-2">Java<br className="hidden-sm-up" />Script</th>
          <td className="col-8 col-sm-9 col-md-10 progress About_skills_progress">
            <div className="progress-bar About_skills_progress-bar" style={{width:80+'%'}} role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
          </td>
        </tr>
        <tr className="About_skills-content row">
          <th scope="row" className="font-xs col-4 col-sm-3 col-md-2">PHP</th>
          <td className="col-8 col-sm-9 col-md-10 progress About_skills_progress">
            <div className="progress-bar About_skills_progress-bar" style={{width:85+'%'}} role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
          </td>
        </tr>
        <tr className="About_skills-content row">
          <th scope="row" className="font-xs col-4 col-sm-3 col-md-2">C++</th>
          <td className="col-8 col-sm-9 col-md-10 progress About_skills_progress">
            <div className="progress-bar About_skills_progress-bar" style={{width:70+'%'}} role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
          </td>
        </tr>
        <tr className="About_skills-content row">
          <th scope="row" className="font-xs col-4 col-sm-3 col-md-2">PAN<br className="hidden-sm-up" />CAKE</th>
          <td className="col-8 col-sm-9 col-md-10 progress About_skills_progress">
            <div className="progress-bar About_skills_progress-bar" style={{width:100+'%'}} role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    )
  }
}
export default App