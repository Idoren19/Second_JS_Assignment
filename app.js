const Array1 = [15, 30, 45, 60];
const Array2 = [5, 6, 3, 10];

const result = div(Array1, Array2);
function div(array1, array2) {
  if (array1.length !== array2.length) {
    throw new Error("Arrays do not have same length.");
  }
  let result = [];
  for (let i = 0; i < array1.length; i++) {
    result.push(array1[i] / array2[i]);
  }

  return result;
}

console.log(result); // Output: [3, 5, 15, 6]
