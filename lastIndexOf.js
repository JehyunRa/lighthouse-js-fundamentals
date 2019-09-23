const lastIndexOf = (indexArray, num) => {
  let i = -1;
  for (let j = 0; j <= indexArray.length - 1; j++) {
    if (indexArray[j] === num) {
      i = j;
    }
  }
  return i;
}