$(document).ready(function() {
	var vP = "";
	if ($.browser.webkit) {
		vP = "-webkit-";
	} else if ($.browser.msie) {
		vP = "-ms-";
	} else if ($.browser.mozilla) {
		vP = "-moz-";
	} else if ($.browser.opera) {
		vP = "-o-";
	}
	
	$('#td3controls #td3xrot').change(function () {
			$('#cube').css(vP+"transform","rotateX("+$('#td3controls input#td3xrot').val()+"deg)");
			$('label[for="td3xrot"]').html("X rotation ("+$('#td3controls input#td3xrot').val()+" deg)")
	});
	$('#td3controls #td3yrot').change(function () {
			$('#Ycube').css(vP+"transform","rotateY("+$('#td3controls input#td3yrot').val()+"deg)");
			$('label[for="td3yrot"]').html("Y rotation ("+$('#td3controls input#td3yrot').val()+" deg)")			
	});
	$('#td3controls #td3zrot').change(function () {
			$('#Zcube').css(vP+"transform","rotateZ("+$('#td3controls input#td3zrot').val()+"deg)");
			$('label[for="td3zrot"]').html("Z rotation ("+$('#td3controls input#td3zrot').val()+" deg)")			
	});	
	$('#td3controls #td3perspective').change(function () {
			$('#transDemo3').css(vP+"perspective",$('#td3controls input#td3perspective').val());
			$('label[for="td3perspective"]').html("Perspective ("+$('#td3controls input#td3perspective').val()+")")			
	});		
});