import React, { Component } from 'react'
import { HashRouter, BrowserRouter, Route, Link, NavLink } from 'react-router-dom'
import ClassNames from 'classnames'
import { Helmet } from "react-helmet"
import { WorksTop, WorksSites, WorksBooks, WorksTemplates } from './Works'
import { AboutTop, AboutIntro, AboutSkills } from './About'
import { ContactTop, ContactSns, ContactKindle, ContactForm } from './Contact'

import headerItemImgs from './images/header_item.png'
import homeButtonOuterRing from './images/homebutton-outerring.png'
import homeButtonMiddleRing from './images/homebutton-middlering.png'
import Switch from 'react-router-dom/Switch'
const MainColor = '#060419'

const Main = ({ routes }) => (
  <div className="flex">
    {routes.map((route, i) => (
      <RouteWithSubRoutes key={i} {...route} />
    ))}
  </div>
)
const HomeTop = () => (
  <div className="flex">
    <img src={headerItemImgs} className="home_item" alt="header background" />
    <header>
      <h1 className="home_title font-xl glitch glitch-alltime" data-text="PORTFOLIO SITE">PORTFOLIO SITE</h1>
      <p className="home_text font-xs">AUTHOR:<span className="font-xxs">HARUKI KAWASHITA</span></p>
    </header>
  </div>
)
const HomeIntro = () => (
  <div className="row">
    <h2 className="col-12">THIS WEBSITE IS MADE USING THE REACT.js</h2>
    <div className="col-8 col-md-2 offset-2 offset-md-5 home_icon order-first">
      <svg id="react-logo" viewBox="0 0 256 230" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
        <path d="M.754 114.75c0 19.215 18.763 37.152 48.343 47.263-5.907 29.737-1.058 53.706 15.136 63.045 16.645 9.6 41.443 2.955 64.98-17.62 22.943 19.744 46.13 27.514 62.31 18.148 16.63-9.627 21.687-35.221 15.617-65.887 30.81-10.186 48.044-25.481 48.044-44.949 0-18.769-18.797-35.006-47.979-45.052 6.535-31.933.998-55.32-15.867-65.045-16.259-9.376-39.716-1.204-62.996 19.056C104.122 2.205 80.897-4.36 64.05 5.392 47.806 14.795 43.171 39.2 49.097 69.487 20.515 79.452.754 96.057.754 114.75z" fill={MainColor} />
        <path d="M201.025 79.674a151.364 151.364 0 0 0-7.274-2.292 137.5 137.5 0 0 0 1.124-4.961c5.506-26.728 1.906-48.26-10.388-55.348-11.787-6.798-31.065.29-50.535 17.233a151.136 151.136 0 0 0-5.626 5.163 137.573 137.573 0 0 0-3.744-3.458c-20.405-18.118-40.858-25.752-53.139-18.643-11.776 6.817-15.264 27.06-10.307 52.39a150.91 150.91 0 0 0 1.67 7.484c-2.894.822-5.689 1.698-8.363 2.63-23.922 8.34-39.2 21.412-39.2 34.97 0 14.004 16.4 28.05 41.318 36.566a128.44 128.44 0 0 0 6.11 1.91 147.813 147.813 0 0 0-1.775 8.067c-4.726 24.89-1.035 44.653 10.71 51.428 12.131 6.995 32.491-.195 52.317-17.525 1.567-1.37 3.14-2.823 4.715-4.346a148.34 148.34 0 0 0 6.108 5.573c19.204 16.525 38.17 23.198 49.905 16.405 12.12-7.016 16.058-28.247 10.944-54.078-.39-1.973-.845-3.988-1.355-6.04 1.43-.422 2.833-.858 4.202-1.312 25.904-8.582 42.757-22.457 42.757-36.648 0-13.607-15.77-26.767-40.174-35.168z" fill="#53C1DE" />
        <path d="M195.406 142.328c-1.235.409-2.503.804-3.795 1.187-2.86-9.053-6.72-18.68-11.442-28.625 4.507-9.71 8.217-19.213 10.997-28.208 2.311.67 4.555 1.375 6.717 2.12 20.91 7.197 33.664 17.84 33.664 26.04 0 8.735-13.775 20.075-36.14 27.486zm-9.28 18.389c2.261 11.422 2.584 21.749 1.086 29.822-1.346 7.254-4.052 12.09-7.398 14.027-7.121 4.122-22.35-1.236-38.772-15.368-1.883-1.62-3.78-3.35-5.682-5.18 6.367-6.964 12.73-15.06 18.94-24.05 10.924-.969 21.244-2.554 30.603-4.717.46 1.86.87 3.683 1.223 5.466zm-93.85 43.137c-6.957 2.457-12.498 2.527-15.847.596-7.128-4.11-10.09-19.98-6.049-41.265a138.507 138.507 0 0 1 1.65-7.502c9.255 2.047 19.5 3.52 30.45 4.408 6.251 8.797 12.798 16.883 19.396 23.964a118.863 118.863 0 0 1-4.305 3.964c-8.767 7.664-17.552 13.1-25.294 15.835zm-32.593-61.58c-11.018-3.766-20.117-8.66-26.354-14-5.604-4.8-8.434-9.565-8.434-13.432 0-8.227 12.267-18.722 32.726-25.855a139.276 139.276 0 0 1 7.777-2.447c2.828 9.197 6.537 18.813 11.013 28.537-4.534 9.869-8.296 19.638-11.15 28.943a118.908 118.908 0 0 1-5.578-1.746zm10.926-74.37c-4.247-21.703-1.427-38.074 5.67-42.182 7.56-4.376 24.275 1.864 41.893 17.507 1.126 1 2.257 2.047 3.39 3.13-6.564 7.049-13.051 15.074-19.248 23.82-10.627.985-20.8 2.567-30.152 4.686a141.525 141.525 0 0 1-1.553-6.962zm97.467 24.067a306.982 306.982 0 0 0-6.871-11.3c7.21.91 14.117 2.12 20.603 3.601-1.947 6.241-4.374 12.767-7.232 19.457a336.42 336.42 0 0 0-6.5-11.758zm-39.747-38.714c4.452 4.823 8.911 10.209 13.297 16.052a284.245 284.245 0 0 0-26.706-.006c4.39-5.789 8.887-11.167 13.409-16.046zm-40.002 38.78a285.24 285.24 0 0 0-6.378 11.685c-2.811-6.667-5.216-13.222-7.18-19.552 6.447-1.443 13.322-2.622 20.485-3.517a283.79 283.79 0 0 0-6.927 11.384zm7.133 57.683c-7.4-.826-14.379-1.945-20.824-3.348 1.995-6.442 4.453-13.138 7.324-19.948a283.494 283.494 0 0 0 6.406 11.692 285.27 285.27 0 0 0 7.094 11.604zm33.136 27.389c-4.575-4.937-9.138-10.397-13.595-16.27 4.326.17 8.737.256 13.22.256 4.606 0 9.159-.103 13.64-.303-4.4 5.98-8.843 11.448-13.265 16.317zm46.072-51.032c3.02 6.884 5.566 13.544 7.588 19.877-6.552 1.495-13.625 2.699-21.078 3.593a337.537 337.537 0 0 0 6.937-11.498 306.632 306.632 0 0 0 6.553-11.972zm-14.915 7.15a316.478 316.478 0 0 1-10.84 17.49c-6.704.479-13.632.726-20.692.726-7.031 0-13.871-.219-20.458-.646A273.798 273.798 0 0 1 96.72 133.28a271.334 271.334 0 0 1-9.64-18.206 273.864 273.864 0 0 1 9.611-18.216v.002a271.252 271.252 0 0 1 10.956-17.442c6.72-.508 13.61-.774 20.575-.774 6.996 0 13.895.268 20.613.78a290.704 290.704 0 0 1 10.887 17.383 316.418 316.418 0 0 1 9.741 18.13 290.806 290.806 0 0 1-9.709 18.29zm19.913-107.792c7.566 4.364 10.509 21.961 5.755 45.038a127.525 127.525 0 0 1-1.016 4.492c-9.374-2.163-19.554-3.773-30.212-4.773-6.209-8.841-12.642-16.88-19.1-23.838a141.92 141.92 0 0 1 5.196-4.766c16.682-14.518 32.273-20.25 39.377-16.153z" fill={MainColor} />
        <path d="M128.221 94.665c11.144 0 20.177 9.034 20.177 20.177 0 11.144-9.033 20.178-20.177 20.178-11.143 0-20.177-9.034-20.177-20.178 0-11.143 9.034-20.177 20.177-20.177" fill="#53C1DE" />
      </svg>
    </div>
  </div>
)
const HomeCreator = () => (
  <div className="row">
    <h2 className="col-12">THIS WEBSITE IS MADE BY ME</h2>
    <Link to="/about" className="btn home_btn col-8 col-md-4 offset-2 offset-md-4"><span className="flex">Who is ME?</span></Link>
  </div>
)
const pageListsByPath = url => routes.find(pageLists => pageLists.path === url)
class PageLists extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const url = this.props.url
    const pageLists = pageListsByPath(url)
    const Map = pageLists.routes
    return (
      <ul className="linklist">
        {Map.map((route, i) => (
          <li key={i} className="linklist_btn-wrapper">
            <NavLink activeClassName="selected" to={`${route.path}`} className="linklist_btn"
              onClick={() => this.props.parentClear()} data-toggle="tooltip" data-placement="top" title={route.title} >
              <span className="btn-body font-xs flex">{route.number}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    )
  }
}
const routes = [
  {
    path: '/',
    exact: false,
    component: Main,
    routes: [
      {
        path: '/',
        number: 'HOME',
        title: 'HOME TOP',
        exact: true,
        component: HomeTop,
      },
      {
        path: '/intro',
        number: '1st',
        title: 'SITE INTRO',
        exact: false,
        component: HomeIntro,
      },
      {
        path: '/creator',
        number: '2nd',
        title: 'SITE CREATOR',
        exact: false,
        component: HomeCreator,
      }
    ]
  },
  {
    path: '/about',
    exact: false,
    component: Main,
    routes: [
      {
        path: '/about',
        number: 'ABOUT',
        title: 'ABOUT TOP',
        exact: true,
        component: AboutTop,
      },
      {
        path: '/about/intro',
        number: '1st',
        title: 'MY OVERVIEW',
        exact: false,
        component: AboutIntro,
      },
      {
        path: '/about/skills',
        number: '2nd',
        title: 'MY SKILLS',
        exact: false,
        component: AboutSkills,
      }
    ]
  },
  {
    path: '/works',
    exact: false,
    component: Main,
    routes: [
      {
        path: '/works',
        number: 'WORKS',
        title: 'WORKS TOP',
        exact: true,
        component: WorksTop,
      },
      {
        path: '/works/sites',
        number: '1st',
        title: 'SITE WORKS',
        exact: false,
        component: WorksSites,
      },
      {
        path: '/works/books',
        number: '2nd',
        title: 'BOOK WORKS',
        exact: false,
        component: WorksBooks,
      },
      {
        path: '/works/templates',
        number: '3rd',
        title: 'TEMPLATE WORKS',
        exact: false,
        component: WorksTemplates,
      }
    ]
  },
  {
    path: '/contact',
    exact: false,
    component: Main,
    routes: [
      {
        path: '/contact',
        number: 'CONTACT',
        title: 'CONTACT TOP',
        exact: true,
        component: ContactTop,
      },
      {
        path: '/contact/sns',
        number: '1st',
        title: 'MY SNS',
        exact: false,
        component: ContactSns,
      },
      {
        path: '/contact/kindle',
        number: '2nd',
        title: 'KINDLE ACCOUNT',
        exact: false,
        component: ContactKindle,
      }
    ]
  }
]
const RouteWithSubRoutes = (route) => (
  <Route exact={route.exact} path={route.path} render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes} />
  )} />
)
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageTrans: false,
    };
    this.clearView = this.clearView.bind(this);
  }

  clearView(e) {
    this.setState(() => {
      return { pageTrans: true };
    });
    setTimeout(() => {
      this.setState({ pageTrans: false });
    }, 600);
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
      <HashRouter>
        <div>
          <Helmet>
            <title>PORTFOLIO SITE | HARUKI KAWASHITA</title>
            <meta name="Description" CONTENT="ここにページのディスクリプション" />
            <meta property="og:title" content="ここにタイトル" />
            <meta property="og:type" content="ここにタイプ" />
            <meta property="og:url" content="ここにページのURL" />
            <meta property="og:image" content="ここにサムネイル画像のURL" />
            <meta property="og:site_name" content="ここにサイト名" />
            <meta property="og:description" content="ここにページのディスクリプション" />
            <meta property="fb:app_id" content="App-ID（15文字の半角数字）" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@Twitterアカウント" />
          </Helmet>
          <nav className="navbar navbar-expand navbar_global" id="globalNavi">
            <ul className="navbar-nav">
              <li className="page_item home-btn">
                <Link to='/' onClick={() => this.clearView()} >
                  <p className="home-btn_element_text"><span>HOME</span></p>
                  <img className="home-btn_element_outer" alt="home button outer" src={homeButtonOuterRing} />
                  <img className="home-btn_element_middle" alt="home button middle" src={homeButtonMiddleRing} />
                  <div className="home-btn_element_inner"><span></span><div></div></div>
                  <div className="home-btn_element_stick"></div>
                </Link>
              </li>
              <li className="page_item_wrapper">
                <div className="page_item" onClick={() => this.clearView()} >
                  <Link to='/about' className="font-sm">ABOUT</Link>
                </div>
                <div className="page_item" onClick={() => this.clearView()} >
                  <Link to='/works' className="font-sm">THE WORKS</Link>
                </div>
                <div className="page_item" onClick={() => this.clearView()} >
                  <Link to='/contact' className="font-sm">CONTACT</Link>
                </div>
              </li>
            </ul>
          </nav>
          <main>
            <div className={pageTransition}>
              <div className="base-sidebar">
                <span className="base-sidebar_inner"></span>
              </div>
              <div className="base-sidebar">
                <span className="base-sidebar_inner"></span>
              </div>
              <div className="base-content">
                <div className="wrapper flex">
                  {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                  ))}
                </div>
              </div>
            </div>
          </main>
          <footer>
            <Switch>
              <Route path='/about' render={props => <PageLists parentClear={this.clearView} url="/about" />} />
              <Route path='/works' render={props => <PageLists parentClear={this.clearView} url="/works" />} />
              <Route path='/contact' render={props => <PageLists parentClear={this.clearView} url="/contact" />} />
              <Route path='/' render={props => <PageLists parentClear={this.clearView} url="/" />} />
            </Switch>
            <p className="copyright">
              Copyright 2017~ Haruki Kawashita
            {/*LICENSE
            https://github.com/twbs/bootstrap/blob/master/LICENSE
            https://github.com/facebook/react/blob/master/LICENSE
            https://github.com/svenanders/react-iframe/blob/master/LICENSE
            https://github.com/JedWatson/classnames/blob/master/LICENSE
            https://github.com/nfl/react-helmet/blob/master/LICENSE
            https://github.com/expressjs/body-parser/blob/master/LICENSE
             */}
            </p>
          </footer>
        </div>
      </HashRouter>
    )
  }
}

export default App