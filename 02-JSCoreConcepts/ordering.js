const numbers = [8,3,2,1,5,4,6];

const reverse = function(arr) {
    const arrReversed = [];
    arr.forEach(item => arrReversed.push(item));
    arrReversed.reverse();
    return arrReversed;
}

const sort = function(arr) {
    const arrSorted = arr.sort();
    return arrSorted;
}

const even = function(arr) {
    const arrEven = [];
    for(var a = 0; a < arr.length; a ++){
      if(arr[a] % 2 == 0){
        arrEven.push(arr[a]);
    }
  }
  return arrEven;
}
console.log(numbers);
console.log(sort(numbers));
console.log(even(numbers));
console.log(reverse(even(numbers)));
console.log(even(sort(numbers)));
