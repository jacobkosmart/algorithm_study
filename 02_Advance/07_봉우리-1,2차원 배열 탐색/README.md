# λ΄μ°λ¦¬

##  π λ¬Έμ  
μ§λ μ λ³΄κ° N*N κ²©μνμ μ£Όμ΄μ§λλ€. κ° κ²©μμλ κ·Έ μ§μ­μ λμ΄κ° μ°μ¬μμ΅λλ€. κ° κ²©μ
νμ μ«μ μ€ μμ μ μνμ’μ° μ«μλ³΄λ€ ν° μ«μλ λ΄μ°λ¦¬ μ§μ­μλλ€. λ΄μ°λ¦¬ μ§μ­μ΄ λͺ κ°μλ μ§ μμλ΄λ νλ‘κ·Έλ¨μ μμ±νμΈμ.   
κ²©μμ κ°μ₯μλ¦¬λ 0μΌλ‘ μ΄κΈ°ν λμλ€κ³  κ°μ νλ€.   
λ§μ½ N=5 μ΄κ³ , κ²©μνμ μ«μκ° λ€μκ³Ό κ°λ€λ©΄ λ΄μ°λ¦¬μ κ°μλ 10κ°μλλ€.  

![image](https://user-images.githubusercontent.com/28912774/116320583-76fb3c00-a7f3-11eb-8f3f-08ceec7b821b.png)


### πΉ μλ ₯μ€λͺ
μ²« μ€μ μμ°μ Nμ΄ μ£Όμ΄μ§λ€.(1<=N<=50)   
λ λ²μ§Έ μ€λΆν° Nμ€μ κ±Έμ³ κ° μ€μ Nκ°μ μμ°μκ° μ£Όμ΄μ§λ€. κ° μμ°μλ 100μ λμ§ μλλ€.


### πΉ μΆλ ₯ μ€λͺ
λ΄μ°λ¦¬μ κ°μλ₯Ό μΆλ ₯νμΈμ.

### πΉ μλ ₯μμ  1

5  
5 3 7 2 3  
3 7 1 6 1  
7 2 5 3 4  
4 3 6 4 1  
8 7 3 5   

### πΉ μΆλ ₯ μμ  1
10


----

##  π νμ΄
4λ°©ν₯ νμ λ¬Έμ 
![λΈνΈ 2021  4  27](https://user-images.githubusercontent.com/28912774/116326272-ff330e80-a7fe-11eb-8fc5-6abcc21a4d95.jpg)

```html
<head>
  <meta charset="UTF-8">
  <title>μΆλ ₯κ²°κ³Ό</title>
</head>

<body>
  <script>
    function solution(arr) {
      let answer = 0;
      let n = arr.length;
      let dx = [-1, 0, 1, 0]; // (ν) 12μ, 3μ, 6μ, 9μ λ°©ν₯μ κ°λ¦¬ν€λ λ°°μ΄
      let dy = [0, 1, 0, -1]; // (ν) 12μ, 3μ, 6μ, 9μ λ°©ν₯μ κ°λ¦¬ν€λ λ°°μ΄
      for (let i = 0; i < n; i++) { 
        for (let j = 0; j < n; j++) {
          let flag = 1; // μΌλ¨ flag (λ΄μ°λ¦¬κ° true μμ μ€μ )
          for (let k = 0; k < 4; k++) { // 4λ°©ν₯ νμ for λ¬Έ
            let nx = i + dx[k]; // κ°λ°©ν₯μ index μ€μ  (ν)
            let ny = j + dy[k]; // κ°λ°©ν₯μ index μ€μ  (μ΄)
            // κ°μ₯μλ¦¬λ λΉκ΅νλ©΄ λ¬΄μ‘°κ±΄ ν¬κΈ° λλ¬Έμ λ²μμ€μ  && κ° 4λ°©ν₯κ³Ό λΉκ΅ν΄μ ν° κ°μ΄ 1κ°λΌλ μμΌλ©΄,
            if (nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] >= arr[i][j]) {
              flag = 0; // flag κ° false μ²λ¦¬ 
              break // false κ° λλ©΄ λ°λ‘ for λ¬Έ νμΆ
            }
          }
          if(flag) answer ++ // flag κ° true μΌ κ²½μ° count +1 μ¦κ°
        }
      }
      return answer;
    }
    let arr = [
      [5, 3, 7, 2, 3],
      [3, 7, 1, 6, 1],
      [7, 2, 5, 3, 4],
      [4, 3, 6, 4, 1],
      [8, 7, 3, 5, 2]
    ];
    console.log(solution(arr));
  </script>
</body>
```
