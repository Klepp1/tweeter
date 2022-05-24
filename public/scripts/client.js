/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


// function to create the tweet element based on the layout provided
const createTweetElement = function(tweetData) {
  const $tweet = $(`<article class="sec">
    <header class="users-name">
      <img src="${tweetData.user.avatars}">
    </header>
    <p> ${tweetData.user.name} </p>
    <header class="blue">${tweetData.user.handle}</header>
    <article class="line">
      ${$('<span>').text(tweetData.content.text).html()}
    </article>
    <footer>
      ${timeago.format(tweetData.created_at)}
    </footer>
    <span class="icons"><i class="fa-solid fa-flag"></i></span>
      <span class="icons2"><i class="fa-solid fa-retweet"></i></span>
      <span class="icons3"><i class="fa-solid fa-heart"></i></span>
    </article>`);
  return $tweet;
};
//function to load the tweets into the html container
const renderTweets = function(tweets) {
  tweets.forEach(tweet => {
    $('.tweet-container').prepend(createTweetElement(tweet));
  });
};
//this will retrieve the tweet data from the database
const loadTweets = function() {
  $.get('/tweets')
    .then(response => {
      renderTweets(response);
    });
};
// below is the code to slide down the error messages if an error is present
$(document).ready(() => {
  loadTweets();
  $('form').on('submit', function(event) {
    event.preventDefault();
    if (!$('#tweet-text').val()) {
      $('.no-text').slideDown('slow', function() {
      });
      return;
    }
    if ($('#tweet-text').val().length > 140) {
      $('.too-many-chars').slideDown('slow', function() {
      });
      return;
    }
    //this is the code to serialize the text from the user and then when a tweet is posted it makes sure the counter is set to 140 and the display of the error messages is off if no error is present.
    const $tweetBody = $(this).serialize();
    $.post('/tweets', $tweetBody)
      .then(response => {
        $.get('/tweets', (data) => {
          console.log(data);
          $('textarea').val("");
          renderTweets(data.slice(-1));
        });
        $('.too-many-chars').css('display', 'none');
        $('.no-text').css('display', 'none');
        $('#counterr').text(140);
      });
  });
});
