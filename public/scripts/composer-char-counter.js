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
});

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
    if (inputValueLength > maxTweetChar) {
      //Change the counter number's color to Red
      counterValue.css({ color: "red" });
    }
  } else {
    tweetButton.attr("disabled", false);
    counterValue.css({ color: "#545149" });
  }
};
