//Create tweet elements
const createTweetElement = function (tweetObj) {
  const $tweet = ` <article class="tweet">
      <div class="tweet-header">
        <div class="author">
          <div class="author-avatar">
          <img src="${escape(
            tweetObj.user.avatars
          )}" alt="author-avatar" width="50" height="50">
          </div>
          <div class="author-name">
          ${escape(tweetObj.user.name)}
          </div>
        </div>
        <div class="author-handle">
        ${escape(tweetObj.user.handle)}
        </div>
      </div>
      <div class="tweet-body">
        <p>${escape(tweetObj.content.text)}</p>
      </div>
      <div class="tweet-footer">
        <div class="tweet-age">
        <p>Posted ${escape(tweetObj.created_at)}</p>
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
