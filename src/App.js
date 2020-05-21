import React from 'react';
import './App.css';
import { connect } from "react-redux";
import { CONSTNAME, constName} from "./Actions";
import { DELIVERER, deliverer} from "./Actions";


function GridEntry(props){
  return(
    <div>hey its {props.count}
    <div> also wao {props.value}</div>
    <button onClick={props.onClickConstName()}>button..!!</button>
    <button onClick={() => {props.onClickDeliverer()}}>button..!!</button>
    </div>  
);
}




class AppTop extends React.Component {

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
    anArray: state.anArray,
    count: state.count,
    boolThing: state.boolThing,
  };
}
export default connect(mapStateToProps)(AppTop);
