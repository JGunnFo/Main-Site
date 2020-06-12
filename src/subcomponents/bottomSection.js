import React from 'react';
import '../App.css';
import { connect } from "react-redux";
import { GOTO, goTo} from "../Actions";

export function navBar(props){
    return(
      <div className="Nav-Background">
      <div className="Nav-Grid-Parent Nav-Flex-Parent">
      <div>{resume()}</div>
      <div className="Nav-Unselected">{switchForSection("bio", props)}</div>
      <div className="Nav-Selected">{switchForSection("main", props)}</div>
      <div>{switchForSection("portfolio", props)}</div>
      <div>{switchForSection("github", props)}</div>
      </div></div>
    );
  }
  
  function switchForSection(passTo, props){
 
 /*
 use the passto for actions and 
 to determine which icon to display, text, etc
 */
    return(
      <div>
      <div>{passTo}({props.section})</div>
      <div><button onClick={() => {props.dispatch(goTo(passTo))}}>attempt button</button></div>
      </div>
    );
  }
  
  
  
  function resume(){
    return(
      <div>RESUMAY</div>
    );
  }
  