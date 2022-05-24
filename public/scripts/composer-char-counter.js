//function to change counter number based on keyboard input and changes color if too many chars

$(document).ready(function() {
  $("#tweet-text").on('input', function() {
    const max = 140;
    const remaining = max - $(this).val().length;
    $("#counterr").text(remaining);
    remaining < 0 ? $("#counterr").css('color', 'red') : null;
    remaining > 0 ? $('#counterr').css('color', '#424242') : null;
  });
});