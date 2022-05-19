$(document).ready(function() {
  $("#tweet-text").on('input', function() {
    const max = 140;
    const remaining = max - $(this).val().length;
    $("#counterr").text(remaining);
    const color = remaining < 0 ? $("#counterr").css('color', 'red') : null;
    remaining > 0 ? $('#counterr').css('color', '#424242') : null;
  });
})