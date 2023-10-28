class Solution {
    public boolean solution(String[] phone_book) {
        
    boolean answer = true;

    for (var i = 0; i < phone_book.length - 1; i++) {
      if (phone_book[i + 1].startWith(phone_book[i]) == true) {
        answer = false;
        break;
      }
    }
    Sytem.out.println(answer);
    return answer;
    }  

}

public class My_class {
  public static void main(String[] args){
    solution(["119", "97674223", "1195524421"]);
  }
}

