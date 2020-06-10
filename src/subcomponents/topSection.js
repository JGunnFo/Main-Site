import React from 'react';
import '../App.css';
import { connect } from "react-redux";
import { GOTO, goTo} from "../Actions";


export function mainContentFrame(props){
    return(
      <div>   this is the upper frame
      <div>prop for currently toggled section:{props.section}
      <div>{section_Main(props)}</div>
      <div>{section_Bio(props)}</div>
      <div>{section_Main(props)}</div>
      <div>{section_Bio(props)}</div>
      <div>{section_Main(props)}</div>
      <div>{section_Bio(props)}</div>
      </div></div>  
    );
  }
  
  function section_Main(props){
    return(
      <div className="Main-Grid-Parent Main-Flex-Parent">
        <div className="Main-Text-Emph">First line. this is the "mainpage" subsection.</div>
        <div className="Main-Text-Deemph">second, deemph, line. heres a prop: TRANSITION:{JSON.stringify(props.transition)}</div>
      </div>
    );
  }
  
  function section_Bio(props){
    return(
      <div>this is the "bio" subsection.</div>
    );
  }
  

  