import React from 'react';
import './App.css';
import { connect } from "react-redux";
import { GOTO, goTo} from "./Actions";
import { mainContentFrame } from "./subcomponents/topSection";
import { navBar } from "./subcomponents/bottomSection";




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
      <div className="Overall-Grid-Parent">
      <div>{this.renderTop()}</div>
      <div>{this.renderBottom()}</div>
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


/*
Despite what the above implies, no code for transition state is currently implemented.
*/

export default connect(mapStateToProps)(TopComponent);
