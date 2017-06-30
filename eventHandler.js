$(document).ready(function(){

  $(document).on("click",".posterDiv",function(){
    $(".latest").remove();
    $(".classPostDiv").hide();
    $(".classAlbumDiv").hide();
    var x =  $(this).parent().attr("posts-userID");
    $("#profileInfo-" + x).prependTo("#profile-" + x);
    $("#profileInfo-" + x).show();
    $(".classPostDiv[posts-userid = "+ x +"]").show();
    $(".classAlbumDiv[album-userid = "+ x +"]").show();
    $("<p class = \"latest\">Latest Posts</p>").insertBefore($(".classPostDiv").first());
    $("<p class = \"latest\">Latest Albums</p>").insertBefore($(".classAlbumDiv").first());
    $("html,body").scrollTop(0);
  });


  $(document).on("click","#homeButton",function(){
    $(".classProfileInfoDiv").hide();
    $(".classPostDiv").show();
    $(".classAlbumDiv").hide();
    $(".latest").remove();
  });

  $(document).on("click", "#viewPhotos", function() {
    $(".classProfileInfoDiv").hide();
  	$(".classPostDiv").hide();
  	$(".classAlbumDiv").show();
    $(".latest").remove();
  });

  $(document).on("click", ".photoThumbnail", function() {
    var photoID = $(this).attr("photoid");
    var albumTitle = $(this).parent().parent().attr("albumTitle");
    getOriginalImage(photoID,albumTitle);
    $("body").addClass("noScroll");
  });

	$(document).on("click", ".call_modal", function() {
		$(".modal").fadeIn();
		$(".modal_main").show();
    $(".modal_sub").show();
	});

	$(document).on("click", ".closer", function() {
		$(".modal").fadeOut();
		$(".modal_main").fadeOut();
    $(".modal_sub").fadeOut();
    $(".modal_main").empty();
    $(".modal_sub").empty();
    $("body").removeClass("noScroll");
	});

  // $(document).on("click",".classPostDiv",function(){
  //   $(".classPostDiv").hide();
  //   var x =  $(this).attr("posts-userID");
  //   $("#profileInfo-" + x).show();
  // });

  $(document).on("click", ".goToAlbum", function() {
    var title = $(this).attr("album");
    console.log(title);
    $(".modal").fadeOut();
    $(".modal_main").fadeOut();
    $(".modal_sub").fadeOut();
    $(".modal_main").empty();
    $(".modal_sub").empty();
    $("body").removeClass("noScroll");
    $(".classAlbumDiv").hide();
    $(".classAlbumDiv[albumtitle=\"" + title + "\"]").show();
  });
});
