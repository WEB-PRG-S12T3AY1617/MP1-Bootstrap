$(document).ready(function(){

  $(document).on("click",".posterDiv",function(){
    $(".classPostDiv").hide();
    $(".classAlbumDiv").hide();
    var x =  $(this).parent().attr("posts-userID");
    $("#profileInfo-" + x).show();
    $(".classPostDiv[posts-userID = "+ x +"]").show();

  });


  $(document).on("click","#homeButton",function(){
    $(".classProfileInfoDiv").hide();
    $(".classPostDiv").show();
  });

  $(document).on("click", "#viewPhotos", function() {
  	$(".classPostDiv").hide();
  	$(".classAlbumDiv").show();
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
