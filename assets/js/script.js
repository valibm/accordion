$(document).ready(function(){
    let btn = $(".btn");
    let txt = $(".text");

    btn.click(function(ev){
        txt.slideUp();
        $(this).next().slideDown();
    })
})