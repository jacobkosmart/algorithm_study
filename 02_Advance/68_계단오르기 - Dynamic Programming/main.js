function solution(n) {
  let answer = 0;
  let dy = Array.from({ length: n + 1 }, () => 0); // dynamic arr 생성 (길이는 n 까지니까 n + 1 , 모두 일단 0으로 초기화 시켜 줌)
  dy[1] = 1; // 직관적으로 알수 있는 부분은 값을 넣어 줌
  dy[2] = 2;
  for (let i = 3; i <= n; i++) {
    dy[i] = dy[i - 2] + dy[i - 1]; // 관계 식을 만들어서 사용하면 쉽게 구할 수 있음
  }
  answer = dy[n];
  return answer;
}

console.log(solution(7));