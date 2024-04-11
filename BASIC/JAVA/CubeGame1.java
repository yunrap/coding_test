package JAVA;

public class CubeGame1 {
    public int solution(int a, int b) {
        int answer = 0;

        int aDoubleCheck = a % 2;
        int bDoubleCheck = b % 2;

        if (aDoubleCheck == 1 && bDoubleCheck == 1) {
            answer = (a * a) + (b * b);
        } else if (aDoubleCheck == 1 || bDoubleCheck == 1) {
            answer = 2 * (a + b);
        } else {
            answer = Math.abs(a - b);
        }

        return answer;
    }
}


// a와 b가 홀수라면 a2 + b2 결과를 담는다   a /2 != 0 && b / 2 != 0
// a와 b중 하나만 홀수라면 2 x (a + b) 결과를 담는다
// a와 b 모두 홀수가 아니라면 | a - b | 점을 얻는다.

// TIP : 나머지연산 %  ,  홀수는 1일때로체크, Math.abs 절대값구하는법