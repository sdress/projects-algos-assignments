// remove blanks

// function based
function removeBlanks(str){
    let wordArr = str.split(' ');
    var finalStr = "";
    for (var i = 0; i < wordArr.length; i++){
        finalStr += wordArr[i];
    }
    return finalStr;
}

// console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));
// console.log(removeBlanks("I can not BELIEVE it's not BUTTER"));

// get digits from string
function getDigits(str){
    var nums = "";
    for (var i=0; i<str.length; i++){
        if (isNaN(str[i]) === false){
            nums += str[i];
        }
    }
    return nums;
}

// console.log(getDigits('abc'));
// console.log(getDigits("abc8c0d1ngd0j0!8"));
// console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));

// acronyms
function acronym(str){
    wordsArr = str.split(' ');
    console.log(wordsArr);
    acnString = '';
    for(var i = 0; i<wordsArr.length; i++){
        let word = wordsArr[i];
        acnString += word[0];
    }
    return acnString.toUpperCase();
}

// console.log(acronym(" there's no free lunch - gotta pay yer way. "));
// console.log(acronym("Live from New York, it's Saturday Night!"));

// count non-space characters
function countNonSpaces(str){
    count = 0;
    for(var i = 0; i<str.length; i++){
        if(str[i] !== " "){
            count ++;
        }
    }
    return count;
}

// console.log(countNonSpaces("Honey pie, you are driving me crazy"));
// console.log(countNonSpaces("Hello world !"));

// remove shorter strings

function removeShorterStrings(arr, num){
    longStrs = [];
    for(const str of arr){
        if (str.length > num){
            longStrs.push(str);
        }
    }
    return longStrs;
}

console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4));