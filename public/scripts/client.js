/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const tweetData = [
  {
    user: {
      name: "Newton",
      avatars: "https://i.imgur.com/73hZDYK.png",
      handle: "@SirIsaac",
    },
    content: {
      text:
        "If I have seen further it is by standing on the shoulders of giants",
    },
    created_at: 1607975875913,
  },
  {
    user: {
      name: "Descartes",
      avatars: "https://i.imgur.com/nlhLi3I.png",
      handle: "@rd",
    },
    content: {
      text: "Je pense , donc je suis",
    },
    created_at: 1608062275913,
  },
];

//Render each tweet to the page
const renderTweets = function (tweets) {
  for (const tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    $(".tweets-container").append($tweet);
  }
};

//Create tweet elements
const createTweetElement = function (tweetObj) {
  const $tweet = ` <article class="tweet">
  <div class="tweet-header">
  <div class="author">
  <div class="author-avatar">
  <img src="${tweetObj.user.avatars}" alt="author-avatar" width="50" height="50">
  </div>
  <div class="author-name">
  ${tweetObj.user.name}
  </div>
  </div>
  <div class="author-handle">
  ${tweetObj.user.handle}
  </div>
  </div>
  <div class="tweet-body">
  <p>${tweetObj.content.text}</p>
  </div>
  <div class="tweet-footer">
  <div class="tweet-age">
  <p>Posted ${tweetObj.created_at}</p>
  </div>
  <div class="tweet-actions">
  <i class="fas fa-flag fa-xs"></i>
  <i class="fas fa-retweet fa-xs"></i>
  <i class="fas fa-heart fa-xs"></i>
  </div>
  </div>
  </article>`;
  return $tweet;
};

$(document).ready(function () {
  renderTweets(tweetData);
  $("#form").submit(function (event) {
    event.preventDefault();
    console.log($(this).serialize());
    $.ajax()
  });
});
