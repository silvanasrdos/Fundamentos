$(document).ready(function() {
    $('#colorButton').click(function() {
        $('#targetText').css('color', 'red');
    });


    $('#toggleButton').click(function() {
        $('#hiddenContent').toggle();
    });


    $('.hover-effect').hover(
        function() {
            $(this).fadeOut(100).fadeIn(100);
        }
    );

    
    $('#addButton').click(function() {
        $('#itemList').append('<li>Nuevo elemento</li>');
    });
});