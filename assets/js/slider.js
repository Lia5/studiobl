///////////////////////////////////////////////////////////////////
	// Powered By MapsEasy.com Maps Generator                        
	// Please keep the author information as long as the maps in use.
	// You can find the free service at: http://www.MapsEasy.com     
	///////////////////////////////////////////////////////////////////
	function LoadGmaps() {
		var myLatlng = new google.maps.LatLng(55.7853187,37.6022987);
		var myOptions = {
			zoom: 16,
			center: myLatlng,
			disableDefaultUI: true,
			panControl: true,
			zoomControl: true,
			zoomControlOptions: {
				style: google.maps.ZoomControlStyle.DEFAULT
			},

			mapTypeControl: true,
			mapTypeControlOptions: {
				style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR
			},
			streetViewControl: true,
			mapTypeId: google.maps.MapTypeId.ROADMAP
			}
		var map = new google.maps.Map(document.getElementById("MyGmaps"), myOptions);
		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title:"55.785068,37.601867"
		});
	}

$(document).ready(function (){
    $('.slider').cycle({ 
    fx: "scrollHorz",
	timeout: 4000,
    speed:800,
    pause: 1,
	pager:".pager",
	pagerAnchorBuilder: function(index, el) {
        return '<a href="#"> </a>'; // whatever markup you want
    }
});
});

$(document).ready(function (){
    $('.sliderok').cycle({ 
    fx: "scrollVert",
	timeout: 4000,
    speed:800,
    pause: 1,
	pager:".pagerok",
	pagerAnchorBuilder: function(index, el) {
        return '<a href="#"> </a>'; // whatever markup you want
    }
});
});