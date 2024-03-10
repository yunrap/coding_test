// --> js에서 해시쓰는법
var hashArr = [];
hashArr["나이"] = 28;
hashArr["직업"] = "개발자ㄴ";

console.log(hashArr["나이"]); // 일반배열에 key값에 문자열이가능하다
console.log(hashArr);

// --> Map을 통해 해쉬테이블 생성
// set, has, delete, get () 메소드로 키값삭제추가존재체크가능

var hashMap = new Map();

hashMap.set("나이", 28);
hashMap.set("직업", "개발자");
hashMap.set("전화번호", "모름");

console.log(hashMap);

if (hashMap.has("나이")) {
  console.log(hashMap.get("나이"));
}

hashMap.delete("전화번호");

if (!hashMap.has("전화번호")) {
  console.log("전화번호가 삭제되었습니다");
}

// --> 배열객체와 Map 사용s
var kvArray = [
  ["key1", "value1"],
  ["key2", "value2"],
];

var myMap = new Map(kvArray);
console.log(myMap.get("key1"));
console.log(Array.from(myMap));
console.log(Array.from(myMap.keys()));
