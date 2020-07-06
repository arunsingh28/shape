$(document).ready(function(){
    $('#bar').click(()=>{
        $('.menu').toggleClass('change');
    })
    // for sign-in fade
   $('#login').click(()=>{
    $('.login_form').toggleClass('fade');
   })
    $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
  });
});