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
        <div className="Main-Text-Emph Line1"><img className="InlineL" src={theL} />React Redux Front-End Developer.</div>
        <div className="Main-Text-Deemph Line2"><img className="InlineL" src={theL} />Jeffrey Gunn</div>
        <div className="Main-Text-Emph Line3"><img className="InlineL" src={theL} /> Let's work together. [||]</div>
      </div>
    );
  }
  
  function section_Bio(props){
    return(
      <div>this is the "bio" subsection.</div>
    );
  }
  

  