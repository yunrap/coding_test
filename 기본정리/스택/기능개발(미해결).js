// progresses : 작업진도 , speeds : 개발속도 , return : 각배포마다 몇개기능배포되는가
// 배포는하루에한번
function solution(progresses, speeds) {
  var tempAnswer = [];
  var answer = [];

  for (var i = 0; i < progresses.length; i++) {
    var x = Math.ceil((100 - progresses[i]) / speeds[i]);
    tempAnswer.push(x);
  }

  console.log(tempAnswer);

  var popCount = 0;
  for (var j = 0; j < tempAnswer.length; j++) {
    popCount = 1;
    for (var k = j + 1; k < tempAnswer.length; k++) {
      if (tempAnswer[j] >= tempAnswer[k]) {
        popCount++;
      } else {
        break;
      }
    }
    if (j !== tempAnswer.length - 1) {
      answer.push(popCount);
      tempAnswer.shift(popCount);
      console.log(popCount + "횟수" + tempAnswer + "확인하기");
    }
  }
  return answer;
}

// solution([93, 30, 55], [1, 30, 5]);
// solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]);

console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));

//  x = (100 - progresses[index])/speeds[index]
//  new array 넣는다   [7, 2, 9] [2, 7, 9]
//  뒷배열보다 크면   뒷배열++, count++   같아질때까지 같아지면 같이 pop
//  단, 뒷배열이 계속작은 index 잡기
//  뒷배열보다 작으면 바로 pop
