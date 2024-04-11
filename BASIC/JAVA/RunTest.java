package JAVA;

public class RunTest {
    public static void main(String[] args){
        CubeGame1 cubeGame = new CubeGame1();
        System.out.println(cubeGame.solution(3,5));

        IntegerFine integerFine = new IntegerFine();
        System.out.println(integerFine.solution(new int[]{1, 2, 3, 4, 5},3));
    }
}