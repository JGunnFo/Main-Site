import React from 'react';
import '../App.css';
import { connect } from "react-redux";
import { GOTO, goTo} from "../Actions";
import theL from './transparent.png';


export function mainContentFrame(props){
    return(
      <div>
      <div>{section_Main(props)}</div>
      </div>  
    );
  }
  
  function section_Main(props){
    return(
      <div className="Main-Grid-Parent Main-Flex-Parent">
        <div className="Main-Text-Emph Line1"><img className="InlineL" src={theL} />React Redux Front-End Developer</div>
        <div className="Main-Text-Deemph Line2"><img className="InlineL" src={theL} />Jeffrey Gunn</div>
        <div className="Main-Text-Emph Line3"><img className="InlineL" src={theL} /> Let's work together. {emailButton()}</div>
      </div>
    );
  }
  
  function section_Bio(props){
    return(
      <div>this is the "bio" subsection.</div>
    );
  }
  

  function emailButton(){
    return( 
      <svg class="svg-icon svg-iconEmailButton" aria-hidden="true" viewBox="0 0 20 20">
    <path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path>
      </svg>
     )
  }
  
  