// JavaScript Document
$(document).ready(function() {
	
	$(".contacts .one_third:first-child").click(function() {
		if($(this).hasClass('active')){ }
		else {
			$(this).addClass("active");
			$("#map").css("display","block");
			$("#map2").css("display","none");
			$("#map3").css("display","none");
			$(".contacts .one_third:nth-child(2)").removeClass('active');
    		$(".contacts .one_third:nth-child(3)").removeClass('active');
		}
	});
	
	$(".contacts .one_third:nth-child(2)").click(function() {
		if($(this).hasClass('active')){ }
		else {
			$(this).addClass("active");
			$("#map2").css("display","block");
			$("#map").css("display","none");
			$("#map3").css("display","none");
			$(".contacts .one_third:first-child").removeClass('active');
    		$(".contacts .one_third:nth-child(3)").removeClass('active');
		}
	});
	
	$(".contacts .one_third:nth-child(3)").click(function() {
		if($(this).hasClass('active')){ }
		else {
			$(this).addClass("active");
			$("#map3").css("display","block");
			$("#map2").css("display","none");
			$("#map").css("display","none");
			$(".contacts .one_third:nth-child(2)").removeClass('active');
    		$(".contacts .one_third:first-child").removeClass('active');
		}
	});	
	
	


});