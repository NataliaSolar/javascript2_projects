//Natalia Solar Assignment 6

let s = 'azcbobobegghakl';

function numberOfVowels(text){
    let count = 0;
    for(let i = 0; i < text.length; i++){
        if(text[i]=== 'a' || text[i]=== 'e' || text[i]=== 'i' || text[i]=== 'o'|| text[i]=== 'u') count ++;
    }

    return console.log('Number of vowels: ' + count)
}


numberOfVowels(s);


function numberOfKeyword(text, keyword){
    let count = 0;
    let keywordLen = keyword.length;
    let textLen = text.length;
    let same = true;

    // iterate over characters of the string
    for(let i = 0;  i < textLen - keywordLen + 1; i++){
        //set k to 0
        let k = 0;
        //compare the string character with the keyword character, if they are not the same change the value of 'same' to false, then increment k
        //to compare next character of the keyword with next character in the string
        for(let j = i; j < i + keywordLen; j++){

            if(text[j] != keyword[k]) same = false;
            k++;
        }
        //if charecter of the string and the keyword are the same increment count
        if(same === true) count++;
        //set same back to true
        same = true;
    }

    return console.log('Number of times ' + keyword + ' occurs is: ' + count);
}


numberOfKeyword(s, 'bob');