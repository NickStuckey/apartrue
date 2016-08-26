var binarySearch = function(arr, target) {
  if (arr.length === 1 && arr[0]===target) {
    return 0;
  } else if (arr.length===1){
    return -1;
  }
  let midId = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0,midId);
  let rightArr = arr.slice(midId + 1);
  if(arr[midId] === target) {
    return midId;
  } else if (arr[midId] > target){
    return binarySearch(leftArr, target);
  } else {
    let rightArrSearchVal= binarySearch(rightArr, target);
    if (rightArrSearchVal < 0) {
      return -1;
    } else {
      return leftArr.length + 1 + rightArrSearchVal;
    }
  }
};
