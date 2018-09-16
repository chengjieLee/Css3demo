setTimeout(function() {
    $('.wrapper').removeClass('init');
}, 200);

$('.item').on('click', function() {
    $(this).addClass('active');
    $('.wrapper').addClass('activeWrap');
});

$('.close').on('click', function(e) {
    e.stopPropagation();
    $('.active').removeClass('active');
    $('.wrapper').removeClass('activeWrap');
})