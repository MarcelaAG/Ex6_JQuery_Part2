$(document).ready(function(){
    let text = $('#texte');
    let green = $('#green');
    let red = $('#red');
    let blue = $('#blue');
        $(green).mouseenter(function(){
            $(text).css('color', 'green');
        });
        $(red).mouseenter(function(){
            $(text).css('color', 'red');
        });
        $(blue).mouseenter(function(){
            $(text).css('color', 'blue');
        });
        $('div').mouseleave(function(){
            $(text).css('color', 'black');
        });

});




// $(red).mouseleave(function(){
//     $(text).css('color', 'black');
// });
// $(blue).mouseleave(function(){
//     $(text).css('color', 'black');
// });