var bot = require(__dirname + '/bot.js'),
    res = null;

/* Setting things up. */
let path = require( 'path' ),
    express = require( 'express' ),
    app = express();

app.use( express.static( path.join(__dirname, "public") ) );

/* Uses cron-job to wake up the app and make the bot tweet. */

app.all( `/${process.env.BOT_ENDPOINT}`, function( req, res ) {
  bot.postTweet() 
});

let listener = app.listen( process.env.PORT, function(){
  console.log( `your bot is running on port ${ listener.address().port }` );
} );
