import React from 'react'

import progressScale from './images/progress_scale.png'

export const AboutTop = () => (
    <div>
      <h1>THINK IT HARD</h1>
      <p>PLEASE SELECT PAGE</p>
    </div>
)
export const AboutIntro =() =>(
  <table className="table About_text font-md">
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
export const AboutSkills =() =>(
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