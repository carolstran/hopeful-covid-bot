const Twit = require("twit");
const config = require("./config");
const posiNews = require("./covid19-news.js");

const bot = new Twit(config);

const getRandomNews = arrayOfData =>
  arrayOfData[Math.floor(Math.random() * arrayOfData.length)];

const generateTweetText = () => {
  const randomNews = getRandomNews(posiNews.data);
  const tweetContent = `${randomNews.text} via ${randomNews.source} ${randomNews.link}`
  return tweetContent;
};

module.exports = {
  postTweet: function() {
    return bot.post(
    "statuses/update",
    {
      status: generateTweetText()
    },
    (err, data, response) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log(`${data.text} tweeted!`);
      }
    }
  );
  }
};