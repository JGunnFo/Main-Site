import React from 'react';
import './App.css';
import { connect } from "react-redux";
import { CONSTNAME, constName} from "./Actions";
import { DELIVERER, deliverer} from "./Actions";

/*
functions needed:
email function
resume funciotn

onclicks to dispatch action for navbar
*/


function mainContentFrame(props){
  return(
    <div>hey its {props.section}
    <div>{section_Main()}</div>
    <div>{section_Bio()}</div>
    </div>  
  );
}

function section_Main(){
  return(
    <div>
      <div>hey its {props.transition}</div>
    </div>
  );
}

function section_Bio(){
  return(
    <div>no</div>
  );
}

function navBar(){
  return(
    <div>
    <div>{resume()}</div>
    <div>{switchForSection("bio")}</div>
    <div>{switchForSection("main")}</div>
    <div>{switchForSection("portfolio")}</div>
    <div>{switchForSection("github")}</div>
    </div>
  );
}

function switchForSection(passTo){
  return(
    <div>{passTo}</div>
  );
}



function resume(){
  return(
    <div></div>
  );
}


class TopComponent extends React.Component {

  renderTop() {
    return(
      <mainContentFrame
      section={this.props.section}
      />
    )
  }

  renderBottom() {
    return(
      <div>{navBar()}</div>
    )
  }

  render() {
    return (
    <div className="App">
      <div>
      hmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
      <div>{this.renderTop()}</div>
      <div>{this.renderBottom()}</div>
    </div>

    </div>
  );
}
}


function mapStateToProps(state) {
  return {
    section: state.section,
    transition: state.transition
  };
}

export default connect(mapStateToProps)(TopComponent);
