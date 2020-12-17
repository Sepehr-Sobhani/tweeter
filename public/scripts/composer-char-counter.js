const characterCounterHandler = function (
  inputValueLength,
  counterValue,
  tweetButton
) {
  const maxTweetChar = 140;
  counterValue.val(maxTweetChar - inputValueLength);
  if (inputValueLength === 0 || inputValueLength > maxTweetChar) {
    //Disable the tweet button
    tweetButton.attr("disabled", true);
    tweetButton.css({ "background-color": "grey" });
    if (inputValueLength > maxTweetChar) {
      //Change the counter number's color to Red
      counterValue.css({ color: "red" });
    }
  } else {
    tweetButton.attr("disabled", false);
    tweetButton.css({ "background-color": "#4056a1" });
    counterValue.css({ color: "#545149" });
  }
};

$(document).ready(function () {
  //On keyup changes, handles the allowed length of characters and
  //change the color of character counter to red and disable the tweet button if exceeded
  $("#tweet-text").on("keyup", function () {
    const inputValueLength = $(this).val().length;
    const counterValue = $(this).siblings().find(".counter");
    const tweetButton = $(this).parent().find("#button");
    const bindFunc = characterCounterHandler.bind(this);
    bindFunc(inputValueLength, counterValue, tweetButton);
  });
  $("#button").attr("disabled", true);
  $("#button").css({ "background-color": "grey" });
});
