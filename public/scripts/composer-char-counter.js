$(document).ready(function() {
  $("#tweet-text").on('keypress', function() {
    const max = 139;
    const remaining = max - $(this).val().length;
    $("#counterr").text(remaining);
    const color = remaining < 0 ? $("#counterr").css('color', 'red') : null;
    
  });
})