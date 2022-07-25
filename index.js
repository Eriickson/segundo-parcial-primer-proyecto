const linearSearch = (list, item) => {
  for (const [i, element] of list.entries()) {
    if (element === item) {
      return i;
    }
  }
};

function jumpSearch(arr, x) {
  const length = arr.length;
  let step = Math.sqrt(length);

  let prev = 0;
  while (arr[Math.min(step, length) - 1] < x) {
    prev = step;
    step += Math.sqrt(length);
    if (prev >= length) return -1;
  }

  while (arr[prev] < x) {
    prev++;
    if (prev == Math.min(step, length)) return -1;
  }
  if (arr[prev] == x) return prev;

  return -1;
}

const valueToSearch = 13;
let arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

console.table({
  linearSearchResult: linearSearch(arr, valueToSearch),
  jumpSearchResult: jumpSearch(arr, valueToSearch),
});
