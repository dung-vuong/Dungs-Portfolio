$(window).scroll(function(){
    if($(window).scrollTop()){
        $(".nav-container").addClass("black");
        $(".button-container").addClass("button");
    }
    else{
        $(".nav-container").removeClass("black");
        $(".button-container").removeClass("button");
    }
})

$(document).ready(function () {
    $('#toggle').click(function() {
       $(this).toggleClass('active');
       $('#nav-container').toggleClass('open');
    });

    $('#out a').click(function() {
        $('#nav-container').removeClass('open');
     });
});