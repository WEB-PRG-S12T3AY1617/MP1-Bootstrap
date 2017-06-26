$(document).ready(function(){
  $(".classPostDiv").click(function(){
    $(".classPostDiv").hide();
    var x =  $(this).attr("posts-userID");
    $("#profileInfo-" + x).show();
  });
});
