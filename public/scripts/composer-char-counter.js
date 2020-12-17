const characterCounterHandler = function (
  inputValueLength,
  counterValue,
  errorMessage
) {
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

$(document).ready(function () {
  //On keyup changes, handles the allowed length of characters and
  //change the color of character counter to red and disable the tweet button if exceeded
  $("#tweet-text").on("keyup", function () {
    const inputValueLength = $(this).val().length;
    const counterValue = $(this).siblings().find(".counter");
    const errorMessage = $(this).parent().find(".error");
    const bindFunc = characterCounterHandler.bind(this);
    bindFunc(inputValueLength, counterValue, errorMessage);
    $(".error").slideUp("fast", function () {});
  });
});
