function IntegerFine(num_list, n) {
    var answer = 0;
    for(var a = 0; a<num_list.length; a++){
        if (num_list[a] == n) {
            answer = 1;
            break;
        } else {
            answer = 0
        }
    }
    return answer;
}

console.log(IntegerFine([1, 2, 3, 4, 5], 3));
console.log(IntegerFine([15, 98, 23, 2, 15], 20));


// num_list 안에 n이있다면 result 1대입
// num_list 안에 n이없다면 result 0대입

// 3 ≤ num_list의 길이 ≤ 100
// 1 ≤ num_list의 원소 ≤ 100
// 1 ≤ n ≤ 100