# 조합 구하기

##  🔍 문제 
1부터  N까지  번호가  적힌  구슬이  있습니다.  이  중    M개를  뽑는  방법의  수를  출력하는  프로그램을  작성하세요


### 🔹 입력설명
첫  번째  줄에  자연수  N(3<=N<=10)과  M(2<=M<=N)  이  주어집니다

### 🔹 출력 설명
첫  번째  줄에  결과를  출력합니다.  맨  마지막  총  경우의  수를  출력합니다.

출력순서는  사전순으로  오름차순으로  출력합니다

### 🔹 입력예제 1
4 2

### 🔹 출력 예제 1
1  2

1  3

1  4

2  3

2  4

3  4


6



----

##  📌 풀이

![image](https://user-images.githubusercontent.com/28912774/123562719-79761400-d7eb-11eb-879b-e4a99ffa4733.png)


![image](https://user-images.githubusercontent.com/28912774/123562723-7d099b00-d7eb-11eb-8ce7-238d62d8ac1a.png)


```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(n, m) {
      let answer = [];
      let tmp = Array.from({length:m}, () => 0);
      function DFS(l, s) {
        if(l === m) {
          answer.push(tmp.slice());
        }
        else {
          for(let i = s; i <= n; i++) {
            tmp[l] = i; // tmp 에다가 먼저 넣어 보는 것임
            DFS(l + 1, i + 1);
          }
        }
      }
      DFS(0, 1);
      return answer;
    }

    console.log(solution(4, 2));
  </script>
</body>
```
