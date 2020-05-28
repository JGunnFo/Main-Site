import React from 'react';
import '../App.css';
import { connect } from "react-redux";
import { CONSTNAME, constName} from "../Actions";
import { DELIVERER, deliverer} from "../Actions";

export function navBar(props){
    return(
      <div>
      <div>{resume()}</div>
      <div>{switchForSection("bio", props)}</div>
      <div>{switchForSection("main", props)}</div>
      <div>{switchForSection("portfolio", props)}</div>
      <div>{switchForSection("github", props)}</div>
      </div>
    );
  }
  
  function switchForSection(passTo, props){
    return(
      <div>
      <div>{passTo}</div>
      <div>heyyy its {props.section}</div>
      </div>
    );
  }
  
  
  
  function resume(){
    return(
      <div>heres where resume would be</div>
    );
  }
  