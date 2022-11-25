function permutaciones(params) {
  if (params.length <= 2) {
    return params.length === 2 ? [params, params[1] + params[0]] : [params];
  }

  return params
    .split("")
    .reduce(
      (a, c, i) =>
        a.concat(
          permutaciones(params.slice(0, i) + params.slice(i + 1)).map(
            (v) => c + v
          )
        ),
      []
    );
}

let myArray = ["camilo", "lomica"];

function validar(array) {
  const perm = permutaciones(array[1]);
  for (let index = 0; index < perm.length; index++) {
    const element = perm[index];
    if (element == array[0]) {
      return true;
    }
  }
  return false;
}

console.log(validar(myArray));
