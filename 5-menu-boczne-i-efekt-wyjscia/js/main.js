$(document).ready(function() {
    $('.hamburger').click(function() {
        console.log('hej');
        $('.main-menu, .hamburger-lines, .menu-text').toggleClass('open');
    });

    $('.main-menu-item a').click(function(e){
            e.preventDefault();
            $('body').fadeOut(400, function(){
                window.location.href = $(e.target).attr('href');
            })
        })

});