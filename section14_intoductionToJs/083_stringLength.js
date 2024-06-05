var tweet = prompt("Text?: ");
tweetLength =  tweet.length;
alert("You have written " 
    + tweetLength
    + " characters. You have " 
    + (280 - tweetLength) 
    + " characters left.");