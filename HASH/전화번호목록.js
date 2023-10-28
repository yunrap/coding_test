// 배열중 같은 번호를 포함하고있으면 false 아니면 true 반환
function solution(phone_book) {
  var answer = true;

  // 정렬
  phone_book.sort();

  for (var i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i + 1].indexOf(phone_book[i]) === 0) {
      answer = false;
      break;
    }
  }
  return answer;
}

console.log(solution(["119", "97674223", "1195524421"]));

// 참고
// 정렬은한후 접두어면, 앞에서만 일치해야한다는조건 즉 indexof가 0이여야한다.
