const words = require('./words.js');
const sentences = require('./sentences.js');

const wordTypeArr = ['NOUN','VERB','ADJECTIVE','TIME','NUM'];

function generateRandWord(wordType){
    //Use this function to select a random word of type wordType from wherever they are being kept.
    switch (wordType){
        case wordTypeArr[0]:
            return words.nouns[Math.floor(Math.random()*words.nouns.length)].toLowerCase();
        case wordTypeArr[1]:
            return words.verbs[Math.floor(Math.random()*words.verbs.length)].toLowerCase();
        case wordTypeArr[2]:
            return words.adjectives[Math.floor(Math.random()*words.adjectives.length)].toLowerCase();
        case wordTypeArr[3]:
            return words.times[Math.floor(Math.random()*words.times.length)].toLowerCase();
        case wordTypeArr[4]:
            return words.nums[Math.floor(Math.random()*words.nums.length)].toLowerCase();
    }
}

function constructRandSentence(){
    // select the topic and it's array of potential phrases from sentences object
    const sentencesKeysArr = Object.keys(sentences);
    const sentenceTypeIndex = Math.floor(Math.random()*sentencesKeysArr.length); //will work with any num of keys so other topics can easily be added to sentences.js
    const sentenceTypeArr = sentences[sentencesKeysArr[sentenceTypeIndex]];
    let randSentence = sentenceTypeArr[Math.floor(Math.random()*sentenceTypeArr.length)];
    //console.log(randSentence);
    randSentence = randSentence.split(' ');
    for (let i=0; i<randSentence.length;i++){
        for (let j=0; j<wordTypeArr.length; j++){
            if (randSentence[i].includes(wordTypeArr[j])){
                /* 
                Generally works ok, but get poor grammar when past tense of VERB is not VERBed.
                Additional scenarios which don;t make sense when particualr nouns 
                */
                let randWord = generateRandWord(wordTypeArr[j])
                const RandWordLen = randWord.length;
                const vowels = 'aeiou';
                
                if (randSentence[i]==='VERBed' && (randWord.lastIndexOf('e') === RandWordLen-1 || 
                (randWord.lastIndexOf('e') === RandWordLen-2 && randWord[RandWordLen-1]===/\p/))){
                    randSentence[i] = 'VERBd';
                } else if (randSentence[i]==='VERBs' && (randWord.lastIndexOf('s') === RandWordLen-1 || 
                (randWord.lastIndexOf('s') === RandWordLen-2 && randWord[RandWordLen-1]===/\p/))){
                    randSentence[i] = 'VERBes';
                } else if (randSentence[i]==='VERBed' && (randWord.lastIndexOf('y') === RandWordLen-1 || 
                (randWord.lastIndexOf('y') === RandWordLen-2 && randWord[RandWordLen-1]===/\p/))){
                    randWord = randWord.slice(0,RandWordLen-1)+'i';
                } else if ((randSentence[i].includes('NOUN') || randSentence[i].includes('ADJECTIVE')) && 
                vowels.includes(randWord[0]) && randSentence[i-1]==='a'){
                    randSentence[i-1] = 'an'
                } else if ((randSentence[i].includes('NOUN') || randSentence[i].includes('ADJECTIVE')) && 
                vowels.includes(randWord[0]) && randSentence[i-1]==='A'){
                    randSentence[i-1] = 'An'
                }
                if (i===0){
                    const upperCaseStart = randWord[0].toUpperCase();
                    randWord = upperCaseStart + randWord.slice(1);
                }
                randSentence[i] = randSentence[i].replace(wordTypeArr[j],randWord);
            }
        }
    }
    randSentence = randSentence.join(' ');
    console.log(randSentence);
    return randSentence
}

constructRandSentence();
