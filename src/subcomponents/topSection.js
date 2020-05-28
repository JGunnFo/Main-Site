import React from 'react';
import '../App.css';
import { connect } from "react-redux";
import { CONSTNAME, constName} from "../Actions";
import { DELIVERER, deliverer} from "../Actions";

export function mainContentFrame(props){
    return(
      <div>hey its SECTION:{props.section}
      <div>{section_Main(props)}</div>
      <div>{section_Bio(props)}</div>
      </div>  
    );
  }
  
  function section_Main(props){
    return(
      <div>
        <div>hey its TRANSITION:{JSON.stringify(props.transition)}</div>
      </div>
    );
  }
  
  function section_Bio(props){
    return(
      <div>no</div>
    );
  }
  

  