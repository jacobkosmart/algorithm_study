# 연속 부분수열 1

##  🔍 문제 
N개의 수로 이루어진 수열이 주어집니다.  
이 수열에서 연속부분수열의 합이 특정숫자 M이 되는 경우가 몇 번 있는지 구하는 프로그램을 작성하세요.  
만약 N=8, M=6이고 수열이 다음과 같다면  
1 2 1 3 1 1 1 2   
합이 6이 되는 연속부분수열은 {2, 1, 3}, {1, 3, 1, 1}, {3, 1, 1, 1}로 총 3가지입니다


### 🔹 입력설명
첫째 줄에 N(1≤N≤100,000), M(1≤M≤100,000,000)이 주어진다.  
수열의 원소값은 1,000을 넘지 않는 자연수이다

### 🔹 출력 설명
첫째 줄에 경우의 수를 출력한다.

### 🔹 입력예제 1
8 6  
1 2 1 3 1 1 1 2

### 🔹 출력 예제 1
3


----

##  📌 풀이

![1](https://user-images.githubusercontent.com/28912774/117388686-2471fc00-af26-11eb-92f0-cf4c8aa33faf.jpg)

![2](https://user-images.githubusercontent.com/28912774/117388719-318eeb00-af26-11eb-9bd6-b212c3c945bc.jpg)

![3](https://user-images.githubusercontent.com/28912774/117388730-36539f00-af26-11eb-8689-688a50ab8ebc.jpg)


```html
<head>
  <meta charset="UTF-8">
  <title>출력결과</title>
</head>

<body>
  <script>
    function solution(m, arr) {
      let answer=0, lt=0, sum=0;
      for(let rt=0; rt<arr.length; rt++) {
        sum += arr[rt];
        if(sum === m) answer++; // 더할때와 뺄때도 항상 확인해야 한다.
        while(sum>=m) { // 같아도 lt 로 빼야 되고, sum 이 m 보다 크게 되면 lt 가 하나씩 증가 하면서 m 보다 작을때까지 해야되기 때문에 while 반복문 사용
          sum -= arr[lt++] // lt에서 빼로 lt가 증가 되는것임 (후치 연산)
          if(sum === m) answer++;// 뺄때도 같을 경우가 있기 때문에 확인 해줘야 함
        }
      }
      return answer;
    }

    let a = [1, 2, 1, 3, 1, 1, 1, 2];
    console.log(solution(6, a));
  </script>
</body>
```
