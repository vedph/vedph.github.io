$(window).on("scroll load resize", () => {
  //The point where the navbar changes in px
  let startY = $('.navbar').height() * 2;

  if($(window).scrollTop() > startY){
    $('.navbar').addClass("top-nav-collapse");
  }else{
    $('.navbar').removeClass("top-nav-collapse");
  }
});
