package JAVA;

public class IntegerFine {
    public int solution(int[] num_list, int n){
        int answer = 0;
        for(int a=0; a<num_list.length; a++){
            if(num_list[a] == n){
                answer = 1;
                break;
            }else{
                answer = 0;
            }
        }
        return answer;
    }
}
