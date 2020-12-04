# Mixed Messages
> JavaScript program which logs a random message each time it is run by the user.

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Status](#status)
* [Sources](#sources)

## General info
This project is a solution to Codecademy Portfolio Project 'Mixed Messages' and is intended to be used as practice for JavaScript and Git/GitHub version control.

The program generates a message constructed from a random selection of sentences populated in places with random verbs, adjectives, nouns, numbers and time periods. It uses two basic formats as a basis for each message: that of a Chinese proverb; or that of a Monty Python style insult.

The sentences are chosen from the selection in sentences.js and the words from words.js.

## Technologies
* JavaScript
* Node.js

## Setup
Download the three .js files to the same directory and use Node.js to run message_generator.js in the console.


## Status
Project is finished to the point of being a useful learning exercise, but definitely not functioning absolutely perfectly. See list of updates to undertake below:

To-do list:
* Still some grammatical issues to be fixed (eg when throw is imported into a past tense verb location teh message will print throwed)
* It would be great to integrate a whole english dictionary, but I could not establish an easy way of doing this and determining between verb/noun etc
* Currently all numbers are greater than one as I didn't see it as too important to solve the grammatical problem of d=sngular/plural,would be good to fix this


## Sources
Word lists were gathered from: https://7esl.com/english-verbs/, http://www.desiquintans.com/nounlist and https://gist.github.com/hugsy/8910dc78d208e40de42deb29e62df913

Project idea from Codecademy.com 
