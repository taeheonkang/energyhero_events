$(function(){
    $(".log_btn") .click(function(){
        $(".log_box") .fadeIn();
    });

    $(".log a") .click(function(){
        $(".log_box") .fadeOut();
    });

    $(".sign_btn") .click(function(){
        $(".sign_box") .fadeIn();
    });

    $(".sign a") .click(function(){
        $(".sign_box") .fadeOut();
    });
});