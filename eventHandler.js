$(document).ready(function(){
  $(document).on("click",".classPostDiv",function(){
    $(".classPostDiv").hide();
    var x =  $(this).attr("posts-userID");
    $("#profileInfo-" + x).show();
  });

  $(document).on("click","#homeButton",function(){
    $(".classProfileInfoDiv").hide();
    $(".classPostDiv").show();
  });
	
	$(document).on("click", ".call_modal", function() {
		$(".modal").fadeIn();
		$(".modal_main").show();
	});

	$(document).on("click", ".closer", function() {
		$(".modal").fadeOut();
		$(".modal_main").fadeOut();
	});
});
