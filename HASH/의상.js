function solution(clothes) {
  var answer = 1;
  let clotheMap = new Map();

  clothes.forEach((e) => {
    console.log(e[1]);

    if (clotheMap.has(e[1])) {
      clotheMap.set(e[1], clotheMap.get(e[1]) + 1);
    } else {
      clotheMap.set(e[1], 1);
    }
  });

  console.log(clotheMap);

  for (let a of clotheMap.values()) {
    console.log(a);
    answer *= a + 1;
  }

  answer--;

  console.log(answer);

  return answer;
}

solution([
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
]);
