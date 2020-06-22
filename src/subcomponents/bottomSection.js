import React from 'react';
import '../App.css';
import { connect } from "react-redux";
import { GOTO, goTo} from "../Actions";

export function navBar(props){
    return(
      <div className="Nav-Background">
      <div className="Nav-Grid-Parent Nav-Flex-Parent">
      <div>{resume()}</div>
      <div className="Nav-Unselected">{switchForSection("Bio", props)}</div>
      <div className="Nav-Selected">{switchForSection("Main", props)}</div>
      <div className="Nav-Unselected">{switchForSection("Portfolio", props)}</div>
      <div className="Nav-Unselected">{switchForSection("Github", props)}</div>
      <div className="Spacer"></div>
      </div>
      &nbsp;</div>
    );
  }
  
  function switchForSection(passTo, props){
 
 /*
 use the passto for actions and 
 to determine which icon to display, text, etc
 */
    return(
      <div>
      <div><button onClick={() => {props.dispatch(goTo(passTo))}}>icon</button></div>
      <div>{passTo}</div>
      </div>
    );
  }
  
  
  
  function resume(){
    return(
      <div className="Nav-Unselected">Résumé
      </div>
    );
  }
  