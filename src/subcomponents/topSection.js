import React from 'react';
import '../App.css';
import { connect } from "react-redux";
import { GOTO, goTo} from "../Actions";


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
        <div className="Main-Text-Emph Line1">React Redux Front-End Developer.</div>
        <div className="Main-Text-Deemph Line2">Jeffrey Gunn</div>
        <div className="Main-Text-Emph Line3">Let's work together. [||]</div>
      </div>
    );
  }
  
  function section_Bio(props){
    return(
      <div>this is the "bio" subsection.</div>
    );
  }
  

  