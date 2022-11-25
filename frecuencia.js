var myArray = [1, 2, 1, 3, 3, 1, 2, 1, 5, 1, 6, 6, 5, 5];

var frecuencia = {};

myArray.forEach((numero) => {
  frecuencia[numero] = (frecuencia[numero] || 0) + 1;
});

for (let index = 1; index <= Math.max(...myArray); index++) {
  let output = "";
  output += `${index}: `;
  for (let i = 0; i < frecuencia[index]; i++) {
    output += "*";
  }
  console.log(output);
}