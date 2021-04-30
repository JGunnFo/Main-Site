import React from 'react';
import './App.css';
import { connect } from "react-redux";
import { GOTO, goTo} from "./Actions";
import { MainContentFrame } from "./subcomponents/topSection";
import { NavBar } from "./subcomponents/bottomSection";




class TopComponent extends React.Component {

  renderTop() {
    return(
      <div>
        <MainContentFrame
        props={this.props}
        />
      </div>
    )
  }

  renderBottom() {
    return(
      <div>
        <NavBar
        props={this.props}
        />
      </div>
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
