function concatVetores(arrayA, arrayB) {
  return [...arrayA, ...arrayB];
}

const arrayA = [1, 2, 3];
const arrayB = [4, 5, 6];

const novoArray = concatVetores(arrayA, arrayB);

console.log(novoArray);
