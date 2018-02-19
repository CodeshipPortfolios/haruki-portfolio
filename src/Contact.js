import React, { Component } from 'react'
import classNames from 'classnames'
import {Helmet} from "react-helmet"

export const ContactTop = () =>(
    <h1>CONTACT ME</h1>
)
const snsList=[
    {
        sns:"FACEBOOK",
        link:"https://www.facebook.com/square.river",
        text:"日々の活動や成果を発信しています。",
        number:0
    },
    {
        sns:"LINE@",
        link:"https://line.me/R/ti/p/%40wqa3200n",
        text:"テンプレートの配布やサイト・電子書籍の作り方を伝えています。",
        number:1
    },
    {
        sns:"VALU",
        link:"https://valu.is/square",
        text:"夢を実現するための資金集めをしています。",
        number:2
    }
]
export class ContactSns extends Component{
    constructor(props) {
    super(props);
    this.state = {
      onLook : [false,false,false]
    }
    this.Looking = this.Looking.bind(this);
  }
  
  Looking(number){
        for(var i = 0 ; i < snsList.length ; i++ ){
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
    render(){
        return(
        <div className="Contact Contact_sns row flex">
            <h1 className="col-12">MY SNS ACCOUNT</h1>
            <div className="col-12">
                <ul className="nav nav-tabs nav-fill">
                    {snsList.map(snsList => (
                        <EachSnsTitle key={snsList.number} sns={snsList.sns} number={snsList.number} onLook ={this.state.onLook[snsList.number]} LookingThis={this.Looking}/>
                    ))}
                </ul>
                <div className="Contact_sns-bodyWrapper flex">
                    {snsList.map(snsList => (
                        <EachSnsBody key={snsList.number} sns={snsList.sns} link={snsList.link} text={snsList.text} number={snsList.number}  onLook ={this.state.onLook[snsList.number]} LookingThis={this.Looking}/>
                    ))}
                </div>
            </div>
        </div>
        )
    }
}
class EachSnsTitle extends Component{
    render(){
      const props = this.props
      const nowLooking = classNames(
        "nav-link",
        "Contact_sns-title",
        {
          "active": props.onLook === true
        },
        {
          "": props.onLook === false
        }
      );
      return(
        <li className="nav-item" key={props.number}>
            <h2 className={nowLooking} onClick={ () => props.LookingThis(props.number)}>
                <span>{props.sns}</span>
            </h2>
        </li>
      )
    }
  }
class EachSnsBody extends Component{
    render(){
      const props = this.props
      const nowLooking = classNames(
        "Contact_sns-body",
        {
          "active": props.onLook === true
        },
        {
          "": props.onLook === false
        }
      );
      return(
        <div key={props.number} className={nowLooking}>
            <h3>{props.sns}</h3>
            <p className="font-xs">{props.text}</p>
            <a className="btn Contact_btn" href={props.link} target="_blank" rel="noopener noreferrer" >
                <span className="flex">CONTACT</span>
            </a>
        </div>
      )
    }
}
export const ContactKindle = () =>(
    <div className="Contact Contact_kindle row flex">
        <div className="col-10 Contact_kindle-bgr">
            <h1 className="col-12 col-md-10 offset-md-1 font-md">MY AMAZON ACCOUNT</h1>
            <p className="font-xs">
                出版した電子書籍をまとめています。<br/>
                僅か１ヶ月で500冊以上ダウンロードされた人気作や、ICTの最先端の情報を載せた書籍があります。
            </p>
            <a className="btn Contact_btn" href="https://www.amazon.co.jp/%E3%81%AF%E3%82%8B%E3%81%8D/e/B077QVC2FF" target="_blank" rel="noopener noreferrer" >
                <span className="flex">CONTACT</span>
            </a>
        </div>
    </div>
)
