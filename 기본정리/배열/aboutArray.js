//특징
// 1. 배열은 크기조정이가능하다
// 2. 첫번째요소는 0인덱스 , 마지막요소는 배열의 length-1 뺀값이다.
// 3. 배열복사는 얕은 복사본을 생성한다.

var fruits = [];
fruits.push("바나나", "사과", "복숭아"); // push() 메서드로 배열을끝에 하나이상추가
console.log(fruits.length);

fruits[5] = "mango";
console.log(Object.keys(fruits)); // Obejct.keys 객체의속성을 배열로반환
console.log(fruits.length);

// --> length로 배열을 늘리면 확장가능하다

fruits.length = 10; // length를 늘리면 배열을 확장할수있다.
console.log(fruits);
console.log(Object.keys(fruits));
console.log(fruits[8]); // 할당되지않은값은 undefined로 표시

// --> length로 배열을 줄이면 요소가 삭제된다.

fruits.length = 2;
console.log(Object.keys(fruits));
console.log(fruits.length); // 2

// --> 배열만들기
var fruits2 = new Array("사과", "바나나"); // 1.Array생성자로 가능
console.log(fruits2.length);
var fruits3 = "Apple, Banana".split(", "); //String.prototype.split()을 사용
console.log(fruits3);

// --> 배열에서 문자열만들기
var sports = ["축구", "농구"];
var sportString = sports.join(", ");
console.log(sportString);

// --> 배열인덱스로 항목에접근
var food = ["치킨", "피자"];

console.log(food[0]);
console.log(food[1]);
console.log(food[food.length - 1]);
console.log(food[99]);

// --> 배열에서 항목의 인덱스찾기
var fruits = ["사과", "바나나"];
console.log(fruits.indexOf("바나나")); //indexOf메서드를 사용

// --> 배열에서 특정항목이 포함되있는지확인
var sports = ["축구", "농구", "배구"];
console.log(sports.includes("야구"));
console.log(sports.includes("농구"));

// --> 배열에서 항목 추가하기
var food = ["치킨", "피자", "족발"];
var newLength = food.push("감자");
console.log(newLength);

// --> 배열에서 마지막항목 제거하기
var sports = ["축구", "농구", "배구"];
sports.pop();
console.log(sports);

// --> 배열에서 여러항복 삭제하기
var fruits = ["사과", "바나나", "포도", "딸기", "거봉"];
var start = -3;
var removedItems = fruits.splice(start);
console.log(fruits);
console.log(removedItems);

// --> 배열에서 첫항목제거하기
var fruits = ["사과", "바나나", "포도", "딸기", "거봉"];
var removedItem = fruits.shift();
console.log(fruits);

// --> 배열에서 첫항목추가하기
var fruits = ["사과", "바나나", "포도", "딸기", "거봉"];
fruits.unshift("오렌지");
console.log(fruits);

// --> 인덱스로 여러항목 제거하기
var sports = ["축구", "농구", "배구"];
var removeItems = sports.splice(0, 2);
console.log(sports);

// --> 배열순회하기 (for of 문구)
var fruits = ["사과", "바나나", "포도", "딸기", "거봉"];
for (var fruit of fruits) {
  console.log(fruit);
}

// --> 배열의 각요소에대해 함수호출
var sports = ["축구", "농구", "배구"];
sports.forEach((item, indexOf) => {
  console.log(item, indexOf);
});

// --> 여러 배열 병합하기
var fruits = ["사과", "바나나", "포도"]; // 기본배열은 변경안됨
var newFruits = ["딸기", "거봉"]; // 기본배열은 변경안됨
var combineFruits = fruits.concat(newFruits);
console.log(combineFruits);

//--> 배열 복사하기
var sports = ["축구", "농구", "배구"];

var sportsCopy = [...sports];
var sportsCopy2 = Array.from(sports);
var sportsCopy3 = sports.slice();

console.log(sportsCopy, sportsCopy2, sportsCopy3);

// --> 배열의 복사시 주의사항
var sports = ["축구", "농구", "배구"];
var sportsAlias = sports;

console.log(sports === sportsAlias);

sports.unshift("hello");
console.log(sports + "원본배열");
console.log(sportsAlias + "참조배열");
