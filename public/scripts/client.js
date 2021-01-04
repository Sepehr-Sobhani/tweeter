/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//Load tweets from database
const URL = "http://localhost:8080/";
const loadTweets = () => {
  $.get("/tweets", (tweets) => {
    renderTweets(tweets);
  });
};

//Render each tweet to the page
const renderTweets = (tweets) => {
  const time = new Date().toLocaleDateString();
  $(".tweets-container").empty();
  for (const key of tweets) {
    const tweetToRender = createTweetElement(key, time);
    $(".tweets-container").prepend(tweetToRender);
  }
};

//Error message function
const showErroMessage = (errMessage) => {
  $(".error").slideDown("fast", function () {
    $(".error").css("display", "flex");
    $(".error").find("p").text(errMessage);
  });
};

//Handling form submition
const tweetFormHandler = () => {
  $("#form").submit(function(event) {
    event.preventDefault();
    const tweetText = $(this).find("textarea").val();
    if (tweetText !== "" && tweetText !== null && tweetText.length <= 140) {
      const queryString = $(this).serialize();
      $.post({ url: `${URL}tweets`, data: queryString }).then(() => {
        loadTweets();
        $("#tweet-text").val("");
        $(".counter").val(140);
        $(".counter").css({ color: "#545149" });
      });
    } else {
      if (tweetText.length > 140) {
        showErroMessage("Max char allowed is 140!");
      } else {
        showErroMessage("Can't submit empty Tweet!");
      }
    }
  });
};

//Handling DOM load
$(document).ready(() => {
  tweetFormHandler();
  loadTweets();
});
