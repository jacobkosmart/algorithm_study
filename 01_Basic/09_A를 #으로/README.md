# A๋ฅผ #์ผ๋ก 

##  ๐ ๋ฌธ์  
๋๋ฌธ์๋ก ์ด๋ฃจ์ด์ง ์์ด๋จ์ด๊ฐ ์๋ ฅ๋๋ฉด ๋จ์ด์ ํฌํจ๋ โA'๋ฅผ ๋ชจ๋ โ#โ์ผ๋ก ๋ฐ๊พธ์ด ์ถ๋ ฅํ๋
ํ๋ก๊ทธ๋จ์ ์์ฑํ์ธ์.

### ๐น ์๋ ฅ์ค๋ช
์ฒซ ๋ฒ์งธ ์ค์ ๋ฌธ์์ด์ด ์๋ ฅ๋๋ค.

### ๐น ์ถ๋ ฅ ์ค๋ช
์ฒซ ๋ฒ์งธ ์ค์ ๋ฐ๋ ๋จ์ด๋ฅผ ์ถ๋ ฅํ๋ค.

### ๐น ์๋ ฅ์์  1
BANANA

### ๐น ์ถ๋ ฅ ์์  1
B#N#N#

> ์ถ์ฒ : ํ๊ตญ์ ๋ณด์ฌ๋ฆผํผ์๋
----

##  ๐ ํ์ด
๋จ์ ๋ฌธ์์ด ํ์ ๋ฌธ์ ์.  
`A`๋ฅผ ->` #` ์ผ๋ก ๋ณํ ํ๋๋ฐ, 2๊ฐ์ง ๋ฐฉ๋ฒ์ด ์์. 
1. ๋ฐ๋ณต๋ฌธ ํตํด์ A๋ฅผ ๋ฝ์๋ด์, `'#'`์ผ๋ก ๋ฐ๊ฟ ์ฃผ๊ธฐ
2. `replace` ํจ์, ์ ๊ทํํ์์ ํตํด์ ํ์ (2๋ฒ ์งธ ๋ฐฉ๋ฒ์ ๊ถ์ฅ)

- ๋ฐ๋ณต๋ฌธ ํ์ฉ
```html
<html>

<head>
  <meta charset="UTF-8">
  <title>์ถ๋ ฅ๊ฒฐ๊ณผ</title>
</head>

<body>
  <script>
    function solution(s) {
      let answer = "";
      for (let x of s) {
        if (x === 'A') answer+='#';
        else answer+=x;
      }
      return answer;
    }

    let str = "BANANA";
    console.log(solution(str));
  </script>
</body>

</html>
```

- `replace()`, ์ ๊ทํํ์ 
```html
<html>

<head>
  <meta charset="UTF-8">
  <title>์ถ๋ ฅ๊ฒฐ๊ณผ</title>
</head>

<body>
  <script>
    function solution(s) {
      let answer=s; // string์ ๊ฐ๋ง ๋ณต์ฌ ๋๋๊ฒ์. array ์ฒ๋ผ ์ฃผ์ ์ฐธ์กฐ๊ฐ ์๋๊ฒ์. 
      answer = answer.replace(/A/g, '#'); // ๊ธ๋ก๋ฒ g๋ฅผ ๋ฃ์ด์ ๋ค ์ ์ฉ๋๊ฒ ํด์ผํจ 
      return answer;
    }
    let str = "BANANA";
    console.log(solution(str));
  </script>
</body>

</html>
```
