console.log("YOLO");
//create me a simple sort  function that sorts an array of numbers in ascending order
function sortAsc(arr) {
  //let sorted = arr.sort((a,b) => {return a-b}) //this is the same as saying "if a > b then return 1 else if a <
  //check if the input is an array, if not return false
  if (!Array.isArray(arr)) {
    return false;
  }

  let sorted = arr;
  for (let i = 0; i < sorted.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < sorted.length; j++) {
      if (sorted[j] < sorted[minIndex]) {
        minIndex = j;
      }
    }
    let temp = sorted[i];
    sorted[i] = sorted[minIndex];
    sorted[minIndex] = temp;
  }
  return sorted;
}
console.log(sortAsc([5, 3, 89, -23, 46]));
