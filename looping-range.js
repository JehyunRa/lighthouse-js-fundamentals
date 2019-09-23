function range (start, end, step) {
  let rangeArray = [];
  if (typeof start === 'number' && typeof end === 'number' && typeof step === 'number' && start <= end && step > 0) {
      for (let i = start; i <= end; i += step) {
        rangeArray.push(i);
      }
  }
  return rangeArray;
}