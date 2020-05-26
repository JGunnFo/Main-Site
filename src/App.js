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
    <div></div>
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

function switchForSection(passto){
  return(
    <div>{passto}</div>
  );
}



function resume(){
  return(
    <div></div>
  );
}


class TopComponent extends React.Component {

  constNameFunc = () => {
    this.props.dispatch(constName());
  };

  delivererFunc = (passed) => {
    this.props.dispatch(deliverer(passed));
  };
  
  renderEntry(i) {
    return(
      <GridEntry
      value={i}
      count={this.props.count}
      onClickConstName={()=>this.constNameFunc}
      onClickDeliverer={()=>this.delivererFunc(i)}
      />
    )
  }

  render() {
    return (
    <div className="App">
      <div>
      huh
      <div>{this.renderEntry(1)}</div>
      <div>{this.renderEntry(2)}</div>
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
