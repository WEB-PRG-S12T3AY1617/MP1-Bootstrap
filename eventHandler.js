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
});
