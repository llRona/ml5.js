console.log(ml5.version); //ml5 버전 확인으로 ml5작동여부 확인

let classifier; //이미지를 분류할 분류기
let img; //분류할 이미지

function preload() {
 classifier = ml5.imageClassifier('MobileNet')
 img = loadImage('images/dog.jpg')
}

function setup() {
  createCanvas(400, 400);
  //분류기에서 classify호출, 매개변수 1. 분류하려는 이미지, 2. gotResult 콜백 함수호출
  classifier.classify(img, gotResult);
  image(img, 0, 0, width, height);
}

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

