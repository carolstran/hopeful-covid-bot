# Hopeful COVID-19 Twitter Bot

A little bot that tweets uplifting COVID-19 news and stories of solidarity every 12 hours.

You can [follow @hopefulcovidbot on Twitter](https://twitter.com/hopefulcovidbot).

🤖 🖤 💉 🙌🏼 🧼

## Contributing

The best way to get involved is by submitting a story for the bot to tweet.

All of the stories are stored in [`covid19-news.js`](./covid19-news.js). 

To add a story, create an object inside the `data` array with the following structure:

```javascript
{
  text: "",
  link: "",
  source: ""
}
```

Here's what to include in each field...
  * `text`: One-liner about the story with an emoji at the beginning. This could also be the article's headline. 
    <br>Example: 🎂 Oldest COVID-19 survivor celebrates his 104th birthday
  * `link`: URL of the article or video.
    <br>Example: https://www.youtube.com/watch?v=1oiQD2aLBzg&feature=youtu.be
  * `source`: Twitter handle of the news organization that reported this story.
    <br> Example: @Oregonian
    
 Once you've updated the `covid19-news.js` file, [open a pull request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) 💖
