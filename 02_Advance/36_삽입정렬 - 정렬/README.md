# μ½μ μ λ ¬

## π λ¬Έμ 

Nκ°μ΄ μ«μκ° μλ ₯λλ©΄ μ€λ¦μ°¨μμΌλ‘ μ λ ¬νμ¬ μΆλ ₯νλ νλ‘κ·Έλ¨μ μμ±νμΈμ.

μ λ ¬νλ λ°©λ²μ μ½μμ λ ¬μλλ€

### πΉ μλ ₯μ€λͺ

μ²« λ²μ§Έ μ€μ μμ°μ N(1<=N<=100)μ΄ μ£Όμ΄μ§λλ€.

λ λ²μ§Έ μ€μ Nκ°μ μμ°μκ° κ³΅λ°±μ μ¬μ΄μ λκ³  μλ ₯λ©λλ€. κ° μμ°μλ μ μν λ²μ μμ μμ΅λλ€

### πΉ μΆλ ₯ μ€λͺ

μ€λ¦μ°¨μμΌλ‘ μ λ ¬λ μμ΄μ μΆλ ₯ν©λλ€.

### πΉ μλ ₯μμ  1

6 

11 7 5 6 10 9

### πΉ μΆλ ₯ μμ  1

5 6 7 9 10 11

---

## π νμ΄

![11](https://user-images.githubusercontent.com/28912774/118904256-7702dd80-b954-11eb-9553-2c0f99955c73.jpg)


![22](https://user-images.githubusercontent.com/28912774/118904258-779b7400-b954-11eb-9495-a81d7fd4b31d.jpg)



1. μ½μμ λ ¬λ‘ νμ΄

```html
 <head>
  <meta charset="UTF-8">
  <title>μΆλ ₯κ²°κ³Ό</title>
</head>

<body>
  <script>
    function solution(arr) {
      let answer = arr;
      for(let i = 0; i < arr.length; i++) {
        let tmp = arr[i], j; // for loop j λ¬Έμ νκ² λλ©΄  scope λ²μκ° λ²μ΄λκΈ° λλ¬Έμ for loop (j) μμνκΈ° μ μ λ³μ μ μΈ
        for(j = i - 1; j >= 0; j--) { // i μ΄μ λΆν° 0κΉμ§ jλλλ° λ€λ‘ λλκΉ j--
          if(arr[j] > tmp) arr[j+1] = arr[j]; // arr[j] κ° tmp κ°λλ€ ν¬λ©΄ j λ€μ κ°μ λ³΅μ¬νλ©΄ μ μ­ μ§ν
          else break; // false μΌλ, arr[j] κ° tmp λ³΄λ€ μμ κ²½μ°μ for loop μ’λ£ 
        }
        arr[j+1] = tmp; // for loop (j) κ° μ’λ£ λκ³  λλ©΄ j λ€μ tmp κ° μ½μ
      }
      return answer;
    }

    let arr = [11, 7, 5, 6, 10, 9];
    console.log(solution(arr));
  </script>
</body>
```

2. splice() λ₯Ό ν΅ν array μ½μ

![splice](https://user-images.githubusercontent.com/28912774/118901333-f5a84c80-b94d-11eb-84ea-3195eae7b25e.png)

```html
<head>
  <meta charset="UTF-8">
  <title>μΆλ ₯κ²°κ³Ό</title>
</head>

<body>
  <script>
    function solution(arr) {
      let answer = []; // λΉ arr μ μΈ
      answer.push(arr[0]); // 0λ² index μ κ° arr μ push 
      for (let i = 1; i < arr.length; i++) {  //  1λ² index λΆν° νμ
        for (let j = 0; j < answer.length; j++) { // 0λ² index λΆν° iλ₯Ό λ°λΌκ° answer μ ν¬κΈ° κΉμ§
          if (arr[i] < answer[j]) { // i value κ° jμ answer κ°λ³΄λ€ μμκ²½μ°
            answer.splice(j, 0, arr[i]); // splice(jλ²μ§Έ μΈλ±μ€μ μμͺ½μ, 0μ μ½μ, arr[i]μ κ°μ μ½μ)
            break; // κ·Έλ¦¬κ³ λμ for loop μ’λ£
          }
        }
      }
      return answer;
    }

    let arr = [11, 7, 5, 6, 10, 9];
    console.log(solution(arr));
  </script>
</body>
```

