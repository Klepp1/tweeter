/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  const tweetData = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1652639242172
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1652725642172
    }
  ]
  
  const createTweetElement = function(tweetData) {
    const $tweet = (`<section class="sec">
    <header class="users-name">
      <img src="${tweetData.user.avatars}">
     ${tweetData.user.name}
    </header>
    <header class="blue">${tweetData.user.handle}</header>
    <article>
      ${tweetData.content.text}
    </article>
    <footer>
      ${tweetData.created_at}
    </footer>
    <span class="icons"><i class="fa-solid fa-flag"></i></span>
      <span class="icons2"><i class="fa-solid fa-retweet"></i></span>
      <span class="icons3"><i class="fa-solid fa-heart"></i></span>
    </section>`);
    return $tweet;
  };
  
  const renderTweets = function(tweets) {
    for(const prop of tweets) {
      const $tweets = createTweetElement(prop);
      $('.container').append($tweets);
    }
  };
  renderTweets(tweetData);
});
