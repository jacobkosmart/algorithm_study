function solution(arr) {
  let answer = 0;
  let dy = Array.from({ length: arr.length }, () => 0);
  dy[0] = 1;
  for (let i = 1; i < arr.length; i++) {
    let max = 0; // max 1로 초기화
    for (let j = i - 1; j >= 0; j--) { // 뒤로 j 탐색
      if (arr[j] < arr[i] && dy[j] > max) { // 탐색한 앞에 부분보다 i 번째가 큰경우, dy[j] 가 max 값보다 클경우
        max = dy[j]; // max 값으로 dy[j] 로 할당
      }
    }
    dy[i] = max + 1; // max 값에서 1더함 
    answer = Math.max(answer, dy[i]); // answer 는 dy[i] 중에서 가장 큰값을 max 로 함
  }
  return answer;
}

let arr = [5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(arr));