import React from 'react';
import './App.css';
import { connect } from "react-redux";
import { GOTO, goTo} from "./Actions";
import { mainContentFrame } from "./subcomponents/topSection";
import { navBar } from "./subcomponents/bottomSection";


/*
functions needed:
email function
resume funciotn
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
      1.   This is Topmost Component
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
