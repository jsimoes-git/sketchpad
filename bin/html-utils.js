function htmlUtils(){
	
	// Available screen space in the format:
	// {width: ?, height:?}
	var getAvailableSpace = function(domNode){
		if(domNode === undefined){
			var availWidth = window.innerWidth
			|| document.documentElement.clientWidth
			|| document.body.clientWidth;

			var availHeight = window.innerHeight
			|| document.documentElement.clientHeight
			|| document.body.clientHeight;
			
			return {width: availWidth, height: availHeight};
		}
		return {width: domNode.clientWidth, height: domNode.clientHeight};
	}
	
	var copyJsObjProperties = function(objSrc, objDest){
		for(var prop in objSrc){
			objDest[prop] = objSrc[prop];
		}			
	}
	
	var createDiv = function(styleObj){
		var div = document.createElement('div');
		
		if(styleObj){
			copyJsObjProperties(styleObj, div.style);
		}
		
		return div;
	}
	
	// Creates a grid inside a div,
	// by creating multiple divs
	var createGridDiv = function(div, lineCount, divBorderSize, borderColor){
		var divSpace = getAvailableSpace(div);
		
		// Calculate the width, removing the
		// left and right border size
		var width = ((100/lineCount) - 2*divBorderSize) + "%";
		var height = width;
		var border = divBorderSize + "px " + borderColor;
		var i;
		
		var style = {
			width: width,
			height: height,
			border: border,
			display: "inline-block"};
		
		for(i = 0; i < lineCount; i++){
			div.appendChild(createDiv(style));
		}		
	}
	
	return {
		getAvailableSpace: getAvailableSpace,
		copyJsObjProperties: copyJsObjProperties,
		createDiv: createDiv,
		createGridDiv: createGridDiv
	};
}