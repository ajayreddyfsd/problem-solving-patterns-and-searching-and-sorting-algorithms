//if no swaps in inner loop, detect using flag variable and break
//also, as the code runs, last eles are already sorted, so can decrease the iteration count of inner loop

function x(arr) {
  for (let count = 0; count <= arr.length - 1; count++) {
    let swapped = false;
    for (let i = 0; i < arr.length - 1 - count; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }

    if (swapped === false) {
      break;
    }
  }

  return arr;
}

// ✅ Basic Tests
console.log(x([5, 1, 4, 2, 8])); // [1, 2, 4, 5, 8]
console.log(x([64, 34, 25, 12, 22])); // [12, 22, 25, 34, 64]

// ⚠️ Edge Cases
console.log(x([])); // []
console.log(x([7])); // [7]
console.log(x([3, 3, 3])); // [3, 3, 3]
console.log(x([2, 1])); // [1, 2]

// 🌀 Already Sorted / Reversed
console.log(x([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(x([5, 4, 3, 2, 1])); // [1, 2, 3, 4, 5]

// 🔁 With Duplicates
console.log(x([4, 2, 7, 3, 7, 1])); // [1, 2, 3, 4, 7, 7]
console.log(x([2, 2, 1, 1, 3, 3])); // [1, 1, 2, 2, 3, 3]

// ➕➖ With Negative Numbers
console.log(x([-2, -5, 0, 3, -1])); // [-5, -2, -1, 0, 3]
console.log(x([-1, -1, -2, -2, 0])); // [-2, -2, -1, -1, 0]

// 🧪 Stress Test (Optional)
const big = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));
console.log(x(big)); // Should be sorted
