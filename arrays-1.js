// for-loop method
function pushFront(arr, num){
    var new_arr = [];
    new_arr.push(num);
    for(var i = 0; i < arr.length; i++){
        new_arr.push(arr[i]);
    }
    return new_arr;
}

// console.log(pushFront([5,7,2,3], 8));
// console.log(pushFront([99], 7));

// for-loop method
function popFront(arr){
    var first = arr[0];
    var new_arr = [];
    for (var i = 1; i < arr.length; i++){
        new_arr.push(arr[i]);
    }
    console.log(new_arr);
    return first;
}

// console.log(popFront([0,5,10,15]));
// console.log(popFront([4,5,7,9]));

function insertAt(arr, ind, val){
    new_arr = [];
    for(var i = 0; i<arr.length; i++){
        if(i<ind || i> ind){
            new_arr.push(arr[i]);
        } else if(i = ind) {
            new_arr.push(val);
            new_arr.push(arr[i]);
        }
    }
    return new_arr;
}

console.log(insertAt([100,200,5], 2, 311));
console.log(insertAt([9,33,7], 1, 42));

