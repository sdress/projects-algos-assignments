// for-loop method
function pushFront1(arr, num){
    var new_arr = [];
    new_arr.push(num);
    for(var i = 0; i < arr.length; i++){
        new_arr.push(arr[i]);
    }
    return new_arr;
}

// built-in method
function pushFront2(arr, num){
    arr.unshift(num);
    return arr;
}

// console.log(pushFront1([5,7,2,3], 8));
// console.log(pushFront1([99], 7));

// console.log(pushFront2([5,7,2,3], 8));
// console.log(pushFront2([99], 7));

// for-loop method
function popFront1(arr){
    var first = arr[0];
    var new_arr = [];
    for (var i = 1; i < arr.length; i++){
        new_arr.push(arr[i]);
    }
    console.log(new_arr);
    return first;
}

// built-in method
function popFront2(arr){
    let poppedNum = arr.shift();
    console.log(arr);
    return poppedNum;
}

// console.log(popFront1([0,5,10,15]));
// console.log(popFront1([4,5,7,9]));

// console.log(popFront2([0,5,10,15]));
// console.log(popFront2([4,5,7,9]));

function insertAt(arr, i, val){
    arr.splice(i, 0, val);
    return arr;
}

// console.log(insertAt([100,200,5], 2, 311));
// console.log(insertAt([9,33,7], 1, 42));


// BONUS!

