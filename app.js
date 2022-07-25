const express = require("express");

const app = express();
const port = 1000;

let arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
const valueToSearch = 13;

app.get("/linear-search/", (req, res) => {
  const linearSearch = (list, item) => {
    for (const [i, element] of list.entries()) {
      if (element === item) {
        return i;
      }
    }
  };

  const result = linearSearch(arr, valueToSearch);
  res.send(`Linear search result: ${result}`);
});

app.get("/jump-search", (req, res) => {
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
  const result = jumpSearch(arr, valueToSearch);

  res.send(`Jump search result: ${result}`);
});

app.listen(port, () => {
  console.log("listening for request on port 8080");
});
