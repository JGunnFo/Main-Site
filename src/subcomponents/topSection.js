import React, { useEffect } from 'react';
import '../App.css';
import { connect } from "react-redux";
import { GOTO, GoTo} from "../Actions";
import theL from './corner-L.png';



export function MainContentFrame({props}){

  
    return(
      <div aria-live="polite">
      <SelectContent
      section={props.section}
      />
      </div>  
    );
  }
  

  function SelectContent({section}){

    if (section==="Main"){
      return( 
        <div role="main"><SectionMain/></div>
     )
  }
  
  
  if (section==="About"){
    return( 
      <div role="main"><SectionAbout/></div>
   )
  }
  
  
  if (section==="Sites"){
    return( 
      <div role="main" className="Portfolio-Container"><SectionPortfolio/></div>
   )
  }
   
  }




  function SectionMain(){
    return(
      <div className="Main-Flex-Parent">
        <div className="Main-Text-Emph Line-1 Large-View"><img className="Inline-L" src={theL} aria-hidden="true" />React Redux Front-End Developer</div>
        <div className="Main-Text-Emph Line-1 Mobile-View"><img className="Inline-L" src={theL} aria-hidden="true" />React Redux Front-End Dev</div>
        <div className="Main-Text-Deemph Line-2 "><img className="Inline-L" src={theL} aria-hidden="true" />Jeffrey Gunn</div>
        <div className="Main-Text-Emph Line-3 Hover-Color"><img className="Inline-L" src={theL}  aria-hidden="true" /> Let's work together.<EmailButton location="Main"/></div>
      </div>
    );
  }
  
  function SectionAbout(){
    return(
      <div className="About-Flex-Parent">
        <div className="About-Text-Boundaries">
        <p>Hi, I'm a front-end developer who likes goats and modern European history.</p>
        <div className="Large-View">I grew up in Texas, then moved to Portland and worked QA before deciding to become a front-end developer.</div>
        <div className="Large-View">I love to learn by comparing lots of different things, whether that means comparing different websites' designs or countries' histories. I get a big kick out of understanding possibilities and their nuanced tradeoffs.</div>
        <div className="Mobile-View">I love to learn through comparison, whether that means comparing different websites' designs or countries' histories. I get a big kick out of understanding possibilities and their nuanced tradeoffs.</div>
        <div className="Hover-Color About-Email-Line">Let's work together: <EmailButton location="About"/></div></div>
      </div>
    );
  }
  

  function SectionPortfolio(){
    return(
      <div className="About-Flex-Parent Portfolio-Parent">
        <div className="About-Text-Boundaries Portfolio-Text">
        <a className="Portfolio-Site-Title" href="https://gwrandomizer.com/" aria-label="Sample Site Link">Guild Wars Skill Pool Randomizer </a>
        <p>A Django website that generates random challenges for players of Guild Wars.</p>
        <a className="Portfolio-Site-Title" href="https://sample.jeffrey-gunn.com/" aria-label="Sample Site Link">Transformable Graphs Sample </a>
        <p>Utilizes React and Redux to implement an example blog site featuring transformable graphs that are fully screenreader accessible.</p>
      </div></div>
    );
  }
  
  
  
  function EmailButton({location}){
    let style
      if (location==="Main"){
        style="Svg-Icon Svg-Icon-Email-Button Hover-Color"
    }else{
      style="Svg-Icon Svg-Icon-Email-Button-2 Hover-Color"
    }
  
      return( 
        <a className="Hover-Color"href="mailto:jeffgunnweb@gmail.com?subject=Edit this subject line to avoid the filter for bots." aria-label="Mail Jeffrey Gunn">
        <svg className={style} aria-hidden="true" viewBox="0 0 20 20">
      <path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path>
        </svg></a>
       )
    }
    
    