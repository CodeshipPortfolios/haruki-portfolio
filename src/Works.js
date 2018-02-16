import React, { Component } from 'react'
import Iframe from 'react-iframe'
import ClassNames from 'classnames'

import worksSilva from './images/silva.PNG'
import worksMeguri from './images/megurinomori.PNG'
import worksFelice from './images/felice.PNG'
import cpp1st from './images/cpp1st.jpg'
import cpp2nd from './images/cpp2nd.jpg'
import cpp3rd from './images/cpp3rd.jpg'
import CAMBRIC1st from './images/CAMBRIC1st.jpg'
import CAMBRIC2nd from './images/CAMBRIC2nd.jpg'

export const WorksTop = () =>(
    <h1>MY WORKS</h1>
)
const SiteLists=[
  {
    img:worksSilva,
    title:"silva",
    position:"DIRECTOR",
    url:"https://www.silva.or.jp",
    number:0
  },
  {
    img:worksMeguri,
    title:"めぐりの森",
    position:"MANAGER",
    url:"http://megurinomori.net/",
    number:1
  },
  {
    img:worksFelice,
    title:"Felice nail school",
    position:"DIRECTOR",
    url:"http://www.felice-nailschool.com/",
    number:2
  }
]
const SiteListsByTitle = title => SiteLists.find(SiteLists => SiteLists.title === title)

export class WorksSites extends Component{
  constructor(props) {
  super(props);
  this.state = {
    onLook : [false,false,false]
  }
  this.Looking = this.Looking.bind(this);
}

Looking(number){
      for(var i = 0 ; i < SiteLists.length ; i++ ){
        if(i === number){
          if(this.state.onLook[i] === false){
          let state = [false,false,false]
          state[i] = true
          this.setState({onLook : state})
        }else{
          let state = [false,false,false]
          this.setState({onLook : state})
        }
        }
      }
}

  render() {
    return(
      <div className="Works Works_sites row flex">
        <h1 className="col-12 Works_title">SITES</h1>
        {SiteLists.map(SiteLists => (
          <WorksSite key={SiteLists.number} img={SiteLists.img} title={SiteLists.title} position={SiteLists.position} url={SiteLists.url} onLook ={this.state.onLook[SiteLists.number]} LookingThis={this.Looking}/>
        ))}
        <div className="col-12 order-11"></div>
      </div>
    )
  }
}
class WorksSite extends Component{
  render(){
    const props = this.props
    const nowRender = SiteListsByTitle(props.title)
    const nowLooking = ClassNames(
      "card",
      "Works_thumbnail",
      {
        "active": props.onLook === true
      },
      {
        "flex": props.onLook === false
      }
    );
    const nowLookingWrapper = ClassNames(
      {
        "Works_wrapper flex": props.onLook === true
      },
      {
        "": props.onLook === false
      }
    );
    return(
      <div className={nowLookingWrapper} onClick={ () => props.LookingThis(nowRender.number)}>
        <div className={nowLooking}>
          <span className="label">{props.title}</span>
          <span className="close">×</span>
          <img className="card-img-top" src={props.img} alt={props.title}　/>
          <div className="card-body">
            <h2 className="card-title font-xs">{props.title}</h2>
            <p className="card-text font-xxs">POSITION : {props.position}</p>
            <a href={props.url} className="btn Works_btn" target="_blank" rel="noopener noreferrer">
              <span className="flex">Go Site</span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

const BookLists=[
  {
    img:cpp1st,
    title:"プログラミング初心者の為のＣ++超入門編",
    url:"https://www.amazon.co.jp/dp/B071XWP9Z3",
    number:0
  },
  {
    img:cpp2nd,
    title:"プログラミング初心者の為のＣ++入門編",
    url:"https://www.amazon.co.jp/dp/B072MB9BNJ",
    number:1
  },
  {
    img:cpp3rd,
    title:"プログラミング初心者の為のＣ++続・入門編",
    url:"https://www.amazon.co.jp/dp/B078L6KMPQ",
    number:2
  },
  {
    img:CAMBRIC1st,
    title:"クラウドのもたらす革新",
    url:"https://www.amazon.co.jp/dp/B078XGJ3BP",
    number:3
  },
  {
    img:CAMBRIC2nd,
    title:"AIは考えない-人工知能の現実",
    url:"https://www.amazon.co.jp/dp/B0797YJ8MZ",
    number:4
  }
]
const BookListsByTitle = title => BookLists.find(BookLists => BookLists.title === title)

export class WorksBooks extends Component{
  constructor(props) {
  super(props);
  this.state = {
    onLook : [false,false,false,false,false]
  }
  this.Looking = this.Looking.bind(this);
}

Looking(number){
      for(var i = 0 ; i < BookLists.length ; i++ ){
        if(i === number){
          if(this.state.onLook[i] === false){
          let state = [false,false,false,false,false]
          state[i] = true
          this.setState({onLook : state})
        }else{
          let state = [false,false,false,false,false]
          this.setState({onLook : state})
        }
        }
      }
}

  render() {
    return(
      <div className="Works Works_books row flex">
        <h1 className="col-12 Works_title">BOOKS</h1>
        {BookLists.map(BookLists => (
          <WorksBook key={BookLists.number} img={BookLists.img} title={BookLists.title} url={BookLists.url} onLook ={this.state.onLook[BookLists.number]} LookingThis={this.Looking}/>
        ))}
        <div className="col-12 order-11"></div>
      </div>
    )
  }
}
class WorksBook extends Component{
  render(){
    const props = this.props
    const nowRender = BookListsByTitle(props.title)
    const nowLooking = ClassNames(
      "card",
      "Works_thumbnail",
      {
        "active": props.onLook === true
      },
      {
        "flex": props.onLook === false
      }
    );
    const nowLookingWrapper = ClassNames(
      {
        "Works_wrapper flex": props.onLook === true
      },
      {
        "": props.onLook === false
      }
    );
    return(
      <div className={nowLookingWrapper} onClick={ () => props.LookingThis(nowRender.number)}>
        <div className={nowLooking}>
          <span className="label">{props.title}</span>
          <span className="close">×</span>
          <a href={props.url} target="_blank" rel="noopener noreferrer">
            <img className="card-img-top" src={props.img} alt={props.title}　/>
          </a>
        </div>
      </div>
    )
  }
}
const TemplateLists=[
  {
    title:"parallaxDesign",
    subtitle:"知識ゼロ経験ゼロでもすぐ分かる！初心者の為だけの入門書！",
    url:"/templates/parallaxDesign/",
    number:0
  },
  {
    img:cpp2nd,
    title:"slashDesign",
    subtitle:"経験ゼロでもすぐできる！初心者の為だけの入門書！",
    url:"/templates/slashDesign/",
    number:1
  },
  {
    img:cpp3rd,
    title:"artstyleDesign",
    subtitle:"たった4日で基礎が分かる！初心者の為だけの入門書！",
    url:"/templates/artstyleDesign/",
    number:2
  },
]
const TemplateListsByTitle = title => TemplateLists.find(TemplateLists => TemplateLists.title === title)

export class WorksTemplates extends Component{
  constructor(props) {
  super(props);
  this.state = {
    onLook : [false,false,false,false,false]
  }
  this.Looking = this.Looking.bind(this);
}

Looking(number){
      for(var i = 0 ; i < TemplateLists.length ; i++ ){
        if(i === number){
          if(this.state.onLook[i] === false){
          let state = [false,false,false,false,false]
          state[i] = true
          this.setState({onLook : state})
        }else{
          let state = [false,false,false,false,false]
          this.setState({onLook : state})
        }
        }
      }
}

  render() {
    return(
      <div className="Works Works_templates row flex">
        <h1 className="col-12 Works_title">TEMPLATES</h1>
        {TemplateLists.map(TemplateLists => (
          <WorksTemplate key={TemplateLists.number} title={TemplateLists.title} url={TemplateLists.url} onLook ={this.state.onLook[TemplateLists.number]} LookingThis={this.Looking}/>
        ))}
        <div className="col-12 order-11"></div>
      </div>
    )
  }
}
class WorksTemplate extends Component{
  
  render(){
    const props = this.props
    const nowRender = TemplateListsByTitle(props.title)
    const nowLooking = ClassNames(
      "card",
      "Works_thumbnail",
      {
        "active": props.onLook === true
      },
      {
        "flex": props.onLook === false
      }
    );
    const nowLookingWrapper = ClassNames(
      {
        "Works_wrapper": props.onLook === true
      },
      {
        "": props.onLook === false
      }
    );
    const IframeDisplay = ClassNames(
      {
        "block": props.onLook === true
      },
      {
        "none": props.onLook === false
      }
    );
    return(
      <div className={nowLookingWrapper} onClick={ () => props.LookingThis(nowRender.number)}>
        <div className={nowLooking}>
          <span className="label">{props.title}</span>
          <span className="close">×</span>
          <div className="Works_template">
            <Iframe url={props.url} display={IframeDisplay} position="relative" />
          </div>
        </div>
      </div>
    )
  }
}