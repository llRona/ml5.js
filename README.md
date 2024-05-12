# ml5.js
ml5.js Practice at Graphics lecture

learn ml5.js by using p5.js editer

# links

[ml5.js reference](https://learn.ml5js.org/#/) 

[p5.js](https://editor.p5js.org/)

[ml5 예제]([https://editor.p5js.org/](https://medium.com/simon-bak/ml5-js-%EC%86%8C%EA%B0%9C-%EB%B0%8F-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-f0104ee7cdf7))

# study
- html head에 라이브러리 추가<br>
```bash
<script src=”https://unpkg.com/ml5@0.4.3/dist/ml5.min.js"></script>
```
- 라이브러리 추가된것을 버전으로 확인<br>
```Javascript
console.log(ml5.version)
```

- 분류기와 이미지 변수<br>
```javascript
let classifier //분류기 변수
let img //이미지 변수
```

- 분류기와 이미지 로드<br>
```javascript
function preload() {
 classifier = ml5.imageClassifier('MobileNet')
 img = loadImage('이미지 주소')
}
```

- setup <br>
  - 콜백함수? : 다른 함수에게 전달되어 특정 이벤트나 조건이 발생했을 때 호출되는 함수<br>
```javascript
function setup() {
  createCanvas(400, 400);
  classifier.classify(img, gotResult); //분류기에서 classify호출, 매개변수 1. 분류하려는 이미지, 2. gotResult 콜백 함수호출
  image(img, 0, 0);
}
```

- gotResult 콜백함수의 정의 <br>
```javascript
//errors와 results를 매개변수로 가지는 함수
function gotResult(error, results) {
  // 에러시
  if (error) {
    console.error(error);
  } else {
    // 결과를 신뢰도에 따라 순차배열에 저장함.
    console.log(results);
    createDiv(`Label: ${results[0].label}`); //결과에 따른 라벨로 이미지 분류
    createDiv(`Confidence: ${nf(results[0].confidence, 0, 2)}`); //결과에 따른 신뢰도
  }
}

```


# Review

- 전하준(Hajun Jeon)
  - 처음 과제를 받았을 때는 머신러닝에 대한 관심과 동시에 두려움이 있었습니다. <br> 하지만, 이전 강의에서 배웠던 p5js를 토대로하여 생각보단 쉽게 공부할 수 있었습니다. <br> Links에 첨부한 링크를 통하여 ml5.js의 기초와 예제들을 공부했습니다. <br> 결과적으로 어떠한 프로그램을 만들었습니다. <br> 머신러닝에 관심이 있어 이론적으로 알고는 있었지만, 실제로 구현하거나 활용해본 해본적은 없었는데, ml5 라이브러리를 통하여 머신러닝을 사용해볼 수 있었어서 좋았습니다.
