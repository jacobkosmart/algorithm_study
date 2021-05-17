# 교육과정 설계

## 🔍 문제

현수는 1년 과정의 수업계획을 짜야 합니다.수업중에는 필수과목이 있습니다.

이 필수과목은 반드시 이수해야 하며, 그 순서도 정해져 있습니다.

만약 총 과목이 A, B, C, D, E, F, G가 있고, 여기서 필수과목이 CBA로 주어지면 필수과목은 C, B, A과목이며 이 순서대로 꼭 수업계획을 짜야 합니다.

여기서 순서란 B과목은 C과목을 이수한 후에 들어야 하고, A과목은 C와 B를 이수한 후에 들어야 한다는 것입니다.

현수가 C, B, D, A, G, E로 수업계획을 짜면 제대로 된 설계이지만C, G, E, A, D, B 순서로 짰다면 잘 못 설계된 수업계획이 됩니다

수업계획은 그 순서대로 앞에 수업이 이수되면 다음 수업을 시작하다는 것으로 해석합니다.수업계획서상의 각 과목은 무조건 이수된다고 가정합니다

필수과목순서가 주어지면 현수가 짠 N개의 수업설계가 잘된 것이면 “YES", 잘못된 것이면 ”NO“를 출력하는 프로그램을 작성하세요

### 🔹 입력설명

첫 줄에 한 줄에 필수과목의 순서가 주어집니다. 모든 과목은 영문 대문자입니다.두 번 째 줄부터 현수가 짠 수업설계가 주어집니다.

(수업설계의 길이는 30이하이다)

### 🔹 출력 설명

수업설계가 잘된 것이면 “YES", 잘못된 것이면 ”NO“를 출력합니다

### 🔹 입력예제 1

CBA

CBDAGE

### 🔹 출력 예제 1

YES

## 📌 풀이

![11](https://user-images.githubusercontent.com/28912774/118421395-18432700-b6fc-11eb-8130-fa20b9832955.jpg)

![22](https://user-images.githubusercontent.com/28912774/118421405-1bd6ae00-b6fc-11eb-8f71-f3df05f70cc2.jpg)

```html
<head>
  <meta charset="UTF-8" />
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(need, plan) {
      let answer = "YES";
      let queue = Array.from(need); // need 를 array 로 만들기 queue = need.split(''); 로 해도 array 로 만들 수 있음
      for (let x of plan) {
        if (queue.includes(x)) {
          // queue에 x 가 있는지 탐색 있으면 true
          if (x !== queue.shift()) return "NO"; // queue에 x가 있는데 순서대로 와야 되니 (shift) 처음 값이 x 가 아닐경우 (x가 첫번째가 아니라 2번째 이상에 있는 경우)
        }
      }
      if (queue.length > 0) return "NO"; // 탐색을 다 했는데도 queue 에 값이 남아 있다면 return "no"
      return answer;
    }
    let a = "CBA";
    let b = "CBDAGE";
    console.log(solution(a, b));
  </script>
</body>
```
