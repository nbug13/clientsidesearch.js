/*
 * ClientSideSearch.js created by Nick Bugeja.
 * Copyright (c) 2013 www.nickbugeja.com.
 *
 * Note: This script is still in development, 
 *       and is currently unstable and might also be intensive.
 */


	var searchColor = 0;
	
	document.getElementById("search").focus();
	
	function clearSearch(){
		document.getElementById('search').value = "";
		$('.searchable').removeClass("hashtml").removeClass("hidden");
		document.getElementById("search").focus();
		if(searchColor == 1){
			$("#search").css("background-color","white");
			searchColor = 0;
		}
	}
	document.getElementById('search').addEventListener('input', function() {
		$('.searchable').removeClass("hashtml");
		$('.searchable').addClass("hidden");
		// beware of css injections!
		if ($('.searchable:contains("'+this.value+'")').length) {
			$('.searchable:contains("'+this.value+'")').removeClass("hidden").addClass("hashtml").show();
		}
		if($('.searchable.hashtml').length == 0){
			$("#search").css("background-color","#FFA6A6");
			searchColor = 1;
		} else {
			if(searchColor == 1){
				$("#search").css("background-color","white");
				searchColor = 0;
			}
		}
	});

