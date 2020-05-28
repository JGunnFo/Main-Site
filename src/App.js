import React from 'react';
import './App.css';
import { connect } from "react-redux";
import { CONSTNAME, constName} from "./Actions";
import { DELIVERER, deliverer} from "./Actions";
import { mainContentFrame } from "./subcomponents/topSection";
import {navBar} from "./subcomponents/bottomSection";

/*
functions needed:
email function
resume funciotn

onclicks to dispatch action for navbar
*/



class TopComponent extends React.Component {

  renderTop() {
    return(
      <div>{mainContentFrame(this.props)}</div>
    )
  }

  renderBottom() {
    return(
      <div>{navBar(this.props)}</div>
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
