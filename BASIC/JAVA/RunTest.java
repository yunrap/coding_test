package JAVA;

public class RunTest {
    public static void main(String[] args) {

        // 주사위 게임1
        CubeGame1 cubeGame = new CubeGame1();
        System.out.println(cubeGame.solution(3, 5));

        // 정수 찾기
        IntegerFine integerFine = new IntegerFine();
        System.out.println(integerFine.solution(new int[]{1, 2, 3, 4, 5}, 3));
    }
}