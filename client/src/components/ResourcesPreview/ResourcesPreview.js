import React from "react";
import "./ResourcesPreview.css";

const ResourcesPreview = props => {
	console.log('these are our props in ResourcesPreview', props);
	return (
	  <div>
	  	<div class="container">
	      <div class="row resourceBorder">
	        <div id="pictures" class="col-md-4">
	          <img src={props.imageURL} height="200" width="300"/>
	        </div>
       		<div id="bodyPar" class="col-md-8">
	          <h2>Title: {props.title}</h2>
	          <a href={props.url}>{props.url}</a>
	        </div>
	      </div>
	    </div>
	  </div>
	)
}

export default ResourcesPreview;
