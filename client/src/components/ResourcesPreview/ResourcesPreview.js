import React from "react";
import "./ResourcesPreview.css";

const ResourcesPreview = props => {
	console.log('these are our props in ResourcesPreview', props);
	return (
	  <div id="resources">
	  	<div className="container" id="resource">
	      <div className="row resourceBorder">
	        <div id="pictures" class="col-md-4">
	          <img src={props.imageURL} height="200" width="300"/>
	        </div>
       		<div id="bodyPar" className="col-md-8">
	          <h2><a href={props.url}>{props.title}</a></h2>
	          
	        </div>
	      </div>
	    </div>
	  </div>
	)
}

export default ResourcesPreview;
