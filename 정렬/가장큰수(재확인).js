function solution(numbers) {
  var answer = "";

  numbers.sort();

  numbers.reverse();

  numbers.sort((a, b) => {
    a + "" + b - (b + "" + a);
  });
  console.log(numbers);

  return numbers.join("");
}

solution([3, 30, 34, 5, 9]);
