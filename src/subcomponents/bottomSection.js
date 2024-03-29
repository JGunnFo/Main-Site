import React from 'react';
import '../App.css';
import { connect } from "react-redux";
import { GOTO, GoTo} from "../Actions";



export function NavBar({props}){
    return(
      <div className="Nav-Background">
      <div className="Nav-Flex-Parent" role="navigation">
        <NavBarButton
        passTo="About"
        props={props}
        />
        <NavBarButton
        passTo="Main"
        props={props}
        />
        <NavBarButton
        passTo="Resume"
        props={props}
        />
        <NavBarButton
        passTo="Github"
        props={props}
        />
        <NavBarButton
        passTo="Sites"
        props={props}
        />
      </div>
      </div>
    );
  }

/*
Fairly simple: based on which navbar button name is passed, 
the below function will determine the style based on state(as in, is it selected?)
and the function will get the html right and call the svg function appropriately.
*/
  
  function NavBarButton({passTo, props}){

    let navStyle
    if (props.section===passTo){
      navStyle="Nav-Selected As-Text Default-Styling Nav-Flex-Child Hover-Color"
    } else {
      navStyle="Nav-Unselected As-Text Default-Styling Nav-Flex-Child Hover-Color"
    }
 
    if (passTo==="Resume"){
      return(
      <div className={navStyle}>
      <SelectSVG
      passTo="Resume"
      />
      <a className="Hover-Color" href="https://docs.google.com/document/d/1_vqqhpSAl3kXKC-hNbROnguHFbJenmrUCTGnEJ2KfAQ/" aria-label="Resumé Link">Résumé</a>
      </div>
      )
    }

    if (passTo==="Github"){
      return(
      <div className={navStyle}>
      <SelectSVG
      passTo="Github"
      />
      <a className="Hover-Color" href="https://github.com/JGunnFo?tab=repositories" aria-label="Github Link">{passTo} </a>
      </div>
      )
    }

    

    return(
      <div>
      <div className="Hover-Mobile-Adjustment"><button className={navStyle} onClick={() => {props.dispatch(GoTo(passTo))}}>
        <SelectSVG
        passTo={passTo}
        />
        {passTo}
        </button></div>
      </div>
    );
  }
  
  
  

function SelectSVG({passTo}){

  if (passTo==="About"){
    return( 
    <svg className="Svg-Icon Svg-Icon-Margin-Norm" aria-hidden="true" viewBox="0 0 20 20">
  <path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>
</svg>
   )
}


if (passTo==="Github"){
  return( 
    <svg className="Svg-Icon Svg-Icon-Margin-Alternate" aria-hidden="true" viewBox="0 0 1024 770.3333740234375">	
    <path d="M236 184.667q-9-10-22.5-10t-22.5 10l-182 181q-9 9-9 22.5t9 22.5l182 182q9 10 22.5 10t22.5-10q10-9 10-22.5t-10-22.5l-159-159 159-159q10-10 10-23t-10-22zm552 0q9-10 22.5-10t22.5 10l182 181q9 9 9 22.5t-9 22.5l-182 182q-9 10-22.5 10t-22.5-10q-10-9-10-22.5t10-22.5l159-159-159-159q-10-10-10-23t10-22zm-97-180q12 6 16 19t-2 24l-371 704q-7 12-19.5 16t-24.5-2q-11-7-15-19.5t2-24.5l371-703q6-12 18.5-16t24.5 2z">
    </path>
						</svg>
 )
}



if (passTo==="Main"){
  return( 
<svg className="Svg-Icon Svg-Icon-Margin-Norm" aria-hidden="true" viewBox="0 0 20 20">
							<path d="M18.121,9.88l-7.832-7.836c-0.155-0.158-0.428-0.155-0.584,0L1.842,9.913c-0.262,0.263-0.073,0.705,0.292,0.705h2.069v7.042c0,0.227,0.187,0.414,0.414,0.414h3.725c0.228,0,0.414-0.188,0.414-0.414v-3.313h2.483v3.313c0,0.227,0.187,0.414,0.413,0.414h3.726c0.229,0,0.414-0.188,0.414-0.414v-7.042h2.068h0.004C18.331,10.617,18.389,10.146,18.121,9.88 M14.963,17.245h-2.896v-3.313c0-0.229-0.186-0.415-0.414-0.415H8.342c-0.228,0-0.414,0.187-0.414,0.415v3.313H5.032v-6.628h9.931V17.245z M3.133,9.79l6.864-6.868l6.867,6.868H3.133z"></path>
						</svg>

 )
}



if (passTo==="Resume"){
  return( 
<svg className="Svg-Icon Svg-Icon-Margin-Alternate" aria-hidden="true" viewBox="0 0 20 20">
							<path fill="none" d="M2.25,12.584c-0.713,0-1.292,0.578-1.292,1.291s0.579,1.291,1.292,1.291c0.713,0,1.292-0.578,1.292-1.291S2.963,12.584,2.25,12.584z M2.25,14.307c-0.238,0-0.43-0.193-0.43-0.432s0.192-0.432,0.43-0.432c0.238,0,0.431,0.193,0.431,0.432S2.488,14.307,2.25,14.307z M5.694,6.555H18.61c0.237,0,0.431-0.191,0.431-0.43s-0.193-0.431-0.431-0.431H5.694c-0.238,0-0.43,0.192-0.43,0.431S5.457,6.555,5.694,6.555z M2.25,8.708c-0.713,0-1.292,0.578-1.292,1.291c0,0.715,0.579,1.292,1.292,1.292c0.713,0,1.292-0.577,1.292-1.292C3.542,9.287,2.963,8.708,2.25,8.708z M2.25,10.43c-0.238,0-0.43-0.192-0.43-0.431c0-0.237,0.192-0.43,0.43-0.43c0.238,0,0.431,0.192,0.431,0.43C2.681,10.238,2.488,10.43,2.25,10.43z M18.61,9.57H5.694c-0.238,0-0.43,0.192-0.43,0.43c0,0.238,0.192,0.431,0.43,0.431H18.61c0.237,0,0.431-0.192,0.431-0.431C19.041,9.762,18.848,9.57,18.61,9.57z M18.61,13.443H5.694c-0.238,0-0.43,0.193-0.43,0.432s0.192,0.432,0.43,0.432H18.61c0.237,0,0.431-0.193,0.431-0.432S18.848,13.443,18.61,13.443z M2.25,4.833c-0.713,0-1.292,0.578-1.292,1.292c0,0.713,0.579,1.291,1.292,1.291c0.713,0,1.292-0.578,1.292-1.291C3.542,5.412,2.963,4.833,2.25,4.833z M2.25,6.555c-0.238,0-0.43-0.191-0.43-0.43s0.192-0.431,0.43-0.431c0.238,0,0.431,0.192,0.431,0.431S2.488,6.555,2.25,6.555z"></path>
						</svg>

 )
}



if (passTo==="Sites"){
  return( 
<svg className="Svg-Icon Svg-Icon-Margin-Norm" aria-hidden="true" viewBox="0 0 20 20">
<path d="M17.701,3.919H2.299c-0.223,0-0.405,0.183-0.405,0.405v11.349c0,0.223,0.183,0.406,0.405,0.406h15.402c0.224,0,0.405-0.184,0.405-0.406V4.325C18.106,4.102,17.925,3.919,17.701,3.919 M17.296,15.268H2.704V7.162h14.592V15.268zM17.296,6.352H2.704V4.73h14.592V6.352z M5.947,5.541c0,0.223-0.183,0.405-0.405,0.405H3.515c-0.223,0-0.405-0.182-0.405-0.405c0-0.223,0.183-0.405,0.405-0.405h2.027C5.764,5.135,5.947,5.318,5.947,5.541"></path>
						</svg>

 )
}







}