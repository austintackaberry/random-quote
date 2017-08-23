var randNum;
var arrQuote = [
  {
    "quote": "Java is to Javascript what Car is to Carpet.",
    "author": "Chris Heilmann"
  },
  {
    "quote": "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "author": "Brian W. Kernighan"
  },
  {
    "quote": "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
    "author": "Rick Osborne"
  },
  {
    "quote": "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
    "author": "Bill Gates"
  },
  {
    "quote": "The question of whether computers can think is like the question whether submarines can swim.",
    "author": "Edsger Dijkstra"
  },
  {
    "quote": "Should array indices start at 0 or 1? My compromise of 0.5 was rejected without, I thought, proper consideration.",
    "author": "Stan Kelly-Bootle"
  },
  {
    "quote": "I Hate Programming. I Hate Programming. I Hate Programming. It works! I Love Programming.",
    "author": "/u/eleete"
  },
  {
    "quote": "Stay hungry, stay foolish",
    "author": "Steve Jobs"
  },
  {
    "quote": "Learning to program is easy...Learning to program is difficult",
    "author": "Austin Tackaberry"
  },
  {
    "quote": "The best thing about a boolean is even if you are wrong, you are only off by a bit.",
    "author": "Anonymous"
  },
  {
    "quote": "In order to understand recursion, one must first understand recursion.",
    "author": "Anonymous"
  },
  {
    "quote": "Pointers are a difficult concept for people who suffer from short-term memory loss",
    "author": "Austin Tackaberry"
  },
  {
    "quote": "He's making a database. He's sorting it twice, SELECT * from contacts WHERE behavior = 'nice'. SQL Clause is coming to town.",
    "author": "Karen Kringle"
  },
  {
    "quote": "It never works the first time. And probably won't the second or third time.",
    "author": "Cecily Carver"
  },
  {
    "quote": "You can write code on most laptops. Yet, your productivity will improve if you use a machine suited to the type of tasks that you perform.",
    "author": "Ayo Isaiah"
  },
  {
    "quote": "The best time to plant a tree is 20 years ago. The second best time is now.",
    "author": "A lot of people"
  },
  {
    "quote": "We crave for new sensations but soon become indifferent to them. Wonders of yesterday are today common occurrences.",
    "author": "Nikola Tesla"
  },
  {
    "quote": "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    "author": "Patrick McKenzie"
  },
  {
    "quote": "You do not really understand something unless you can explain it to your grandmother.",
    "author": "Albert Einstein"
  },
  {
    "quote": "The first step of any project is to grossly underestimate its complexity and difficulty.",
    "author": "Nicoll Hunt"
  },
  {
    "quote": "Any app that can be written in JavaScript, will eventually be written in JavaScript.",
    "author": "Jeff Atwood"
  }
];

$(document).ready(function () {
  $("#getQuote").on("click",function() {
    randNum = Math.floor(Math.random()*arrQuote.length);
    $(".quote").html(arrQuote[randNum].quote);
    $(".author").html('-'+arrQuote[randNum].author+'-');
  });
  $("#tweetQuote").on("click", function() {
    $("#tweetQuote").attr('href',"http://twitter.com/home?status=" + arrQuote[randNum].quote);
  });
});
