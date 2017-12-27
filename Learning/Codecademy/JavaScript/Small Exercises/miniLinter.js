/*
  This program takes a hardcoded story, with a list of overused words and unnecessary
  words, and determines how many words, sentences, and unnecessary words there are.
  Additionally, the user is returned a story with all unnecessary words removed.
*/

let printer = function(wordCtr, sentenceCtr, overusedWordCtr) {
  console.log(`There are ${wordCtr} words, ${sentenceCtr} sentences, and there are ${overusedWordCtr} overused words used.`);
}


let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyLen = story.length;
let overusedWordsCtr = 0;
let sentenceCtr = 0;

// splits the words of the story into an array
story = story.split(' ');
//console.log(story);

// this loop logic cycles through the story and unnecessary words array to remove
//    unnecessary words from the array of words in the story. If the word in
//    the story is an overused word a counter is incremented. If the word in the
//    story array includes a '.', '!', or '?' then a counter is incremented to
//    account for a sentence.
for(let storyIndex = 0; storyIndex < story.length; storyIndex++) {
  // logic to remove unnecessary words
  for(let uwIndex = 0; uwIndex < unnecessaryWords.length; uwIndex++) {
    if(story[storyIndex] === unnecessaryWords[uwIndex]) {
      story.splice(storyIndex, 1);
    }
  }

  // counts how many overused words are present in the story
  if(story[storyIndex] === overusedWords[0]) {
    overusedWordsCtr++;
  }
  else if(story[storyIndex] === overusedWords[1]) {
    overusedWordsCtr++;
  }
  else if(story[storyIndex] === overusedWords[2]) {
    overusedWordsCtr++;
  }

  // logic to count how many sentences are present
	if(story[storyIndex].includes('.') || story[storyIndex].includes('!') || story[storyIndex].includes('?')) {
    sentenceCtr++;
  }
}

//console.log(story);
//console.log(storyLen);
//console.log(overusedWordsCtr);
//console.log(sentenceCtr);
printer(storyLen, sentenceCtr, overusedWordsCtr);

console.log();
console.log();

// joins the story word array to become a paragraph
console.log(story.join(' '));
