/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const URL = "http://localhost:8080/";
const loadTweets = function () {
  $.ajax({ url: `${URL}tweets/` })
    .then((res) => {
      // pass the result to the render tweets function
      renderTweets(res);
    })
    .catch((err) => {
      console.log("Error rendering tweets");
    });
};

//Render each tweet to the page
const renderTweets = function (tweets) {
  $("#tweet-text").val("");
  for (const key in tweets) {
    const tweet = tweets[key];
    const tweetToRender = createTweetElement(tweet);
    $(".tweets-container").prepend(tweetToRender);
  }
};

//Handling DOM load
$(document).ready(function () {
  //Handling form submition
  $("#form").submit(function (event) {
    event.preventDefault();
    const formText = $(this).serialize();
    $.post({ url: `${URL}tweets/`, data: formText })
      .then((res) => {
        renderTweets(loadTweets());
      })
      .then((res) => {
        //Disabling the tweet button
        $("#button").attr("disabled", true);
      })
      .catch((err) => {
        console.log("Error retreiving tweets");
      });
  });
  renderTweets(loadTweets());
});
