/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const URL = "http://localhost:8080/";
const loadTweets = function () {
  $.get("/tweets", function (tweets) {
    renderTweets(tweets);
  });
};

//Render each tweet to the page
const renderTweets = function (tweets) {
  $(".tweets-container").empty();
  for (const key of tweets) {
    const tweetToRender = createTweetElement(key);
    $(".tweets-container").prepend(tweetToRender);
  }
};

//Handling form submition
const tweetFormHandler = function () {
  $("#form").submit(function (event) {
    event.preventDefault();
    const formText = $(this).serialize() ? $(this).serialize() : "";
    if (formText) {
      $.post({ url: `${URL}tweets`, data: formText })
        .then(() => {
          loadTweets();
          $("#tweet-text").val("");
          $(".counter").val(140);
        })
        .then(() => {
          //Disabling the tweet button
          $("#button").attr("disabled", true);
          $("#button").css({ "background-color": "grey" });
        })
        .catch((err) => {
          console.log("Error retreiving tweets");
        });
    } else {
      alert("Tweet can't be empty");
    }
  });
};

//Handling DOM load
$(document).ready(function () {
  tweetFormHandler();
  loadTweets();
});
