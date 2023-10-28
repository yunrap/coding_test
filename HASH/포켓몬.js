// 1. 총가져가는개수의 /2 가져간다
// 2. 반복문으로 다른수일때 count 증가 / 최대수보다 클때 break

// 변수 max = 최대수 , c = count

function solution(nums) {
  var count = 0;
  var tempArray = [];
  var max = nums.length / 2;

  for (var i = 0; i < nums.length; i++) {
    if (!tempArray.includes(nums[i])) {
      tempArray.push(nums[i]);
    }
    if (tempArray.length > max) {
      count = max;
    } else {
      count = tempArray.length;
    }
  }
  return count;
}

console.log(solution([2, 3, 6, 1]));
