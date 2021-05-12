# 괄호 문자 제거

##  🔍 문제 
입력된  문자열에서  소괄호  (  )  사이에  존재하는  모든  문자를  제거하고  남은  문자만  출력하는 프로그램을 작성하세요.


### 🔹 입력설명
첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.

### 🔹 출력 설명
남은 문자만 출력한다.

### 🔹 입력예제 1
(A(BC)D)EF(G(H)(IJ)K)LM(N)

### 🔹 출력 예제 1
EFLM



----

##  📌 풀이


![11](https://user-images.githubusercontent.com/28912774/117902293-0df1e900-b308-11eb-9519-9b1a4660485d.jpg)


```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(s) {
      let answer;
      let stack = [];
      for(let x of s) {
        if(x === ')') { // ) 닫는 괄호 일때 여는 괄호 까지 문자들을 꺼내야함
          while(stack.pop() !== '('); // stack 에 pop 을 했는데 '(' 가 아닐 때까지 pop 하는것.(문자열 지우기) '(' 만나면 false 되서 while 문 종료 
        }
        else stack.push(x); // 닫는 괄호가 아니라, 여는 괄호나 아무 문자등 은 무조건 stack 에 push 
      }
      answer = stack.join(''); // array 인 stack 을 문자나열로 합치기 (join) 해서  answer 로 담기
      return answer;
    }

    let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
    console.log(solution(str));
  </script>
```
