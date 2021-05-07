function solution(arr) {
  let answer = arr; // 얕은 복사 했기 때문에 answer = arr 는 같게 나옴
  //reduce array에서 하나씩 더해가는것 함수, 하나씩 돌면서 a는 고정, b가 하나씩 들어가면서 sum 해줌, 0부터 시작.
  let sum = arr.reduce((a, b) => a + b, 0); 
  for (let i = 0; i < (arr.length - 1); i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        arr.splice(j, 1); // splice()는 array 에서 삭제(빼는거임) 
        arr.splice(i, 1); // 근데 i부터 지우게 되면 index가 뒤에서부터 한개씩 당겨 지기 때문에 뒷에있는 j부터 지워야지 순서가 밀리지 않음
      }
    }
  }
  return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));