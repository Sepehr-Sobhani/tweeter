//Update the counter and change the color if exceeded the 140 character
const characterCounterHandler = (inputValueLength, counterValue) => {
  const maxTweetChar = 140;
  counterValue.val(maxTweetChar - inputValueLength);
  if (inputValueLength > maxTweetChar) {
    if (inputValueLength > maxTweetChar) {
      //Change the counter number's color to Red
      counterValue.css({ color: "red" });
    }
  } else {
    counterValue.css({ color: "#545149" });
  }
};

// Display new tweet form
const tweetComposeButton = () => {
  $("nav button").on("click", () => {
    $(".compose").toggle("fast");
  });
};

// Toggle buttun to scroll up page and open new tweet form
const scrollUpButton = () => {
  $(window).scroll(() => {
    if ($(this).scrollTop()) {
      $(".bottom-toggle").stop(true, true).fadeIn();
    } else {
      $(".bottom-toggle").stop(true, true).fadeOut();
    }
  });
  $(".bottom-toggle").on("click", () => {
    $(".compose").css("display", "block");
    const position = $("main").offset().top;
    $("body, html").animate({
      scrollTop: position,
    });
  });
};

$(document).ready(() => {
  tweetComposeButton();
  scrollUpButton();
  //On keyup changes, handles the allowed length of characters and
  //change the color of character counter to red and disable the tweet button if exceeded
  $("#tweet-text").on("keyup", () => {
    const inputValueLength = $(this).val().length;
    const counterValue = $(this).siblings().find(".counter");
    const bindFunc = characterCounterHandler.bind(this);
    bindFunc(inputValueLength, counterValue);
    $(".error").slideUp("fast", () => {});
  });
});
