let numOne = "";
let operator = "";
let numTwo = "";
const $operator = document.querySelector("#operator");
const $result = document.querySelector("#result");
const onClickCalculate = (event) => {
  if (!operator) {
    // 연산자가 비어있다
    numOne += event.target.textContent;
    $result.value += event.target.textContent;
    return;
  } // 연산자가 비어있지 않다
  if (!numTwo || (!numTwo && operator === "-")) {
    $result.value = "";
  }
  numTwo += event.target.textContent;
  $result.value += event.target.textContent; // 두자리 이상의 숫자를 입력할 때 문자열로 만들면 '3' + '6' => 36이 된다.
};

const onClickOperator = (op) => () => {
  // 고차 함수를 사용한 이유는 x때문이다. 만약 x를 *로 바꾸면 고차 함수를 이용하지 않아도 된다.
  if (numTwo) {
    // 이 함수를 아래 함수보다 먼저 써야 하는 이유는 operator는 numOne과 numTwo 중간에 위치해 있기 때문에 아래 함수를 다 통과하고 호출하면 게산결과가 다를 수 있다.
    switch (operator) {
      case "+":
        $result.value = parseInt(numOne) + parseInt(numTwo);
        break;
      case "-":
        $result.value = numOne - numTwo;
        break;
      case "*":
        $result.value = numOne * numTwo;
        break;
      case "/":
        $result.value = numOne / numTwo;
        break;
      default:
        break;
    }
    numOne = $result.value;
    numTwo = "";
  }
  if (numOne) {
    operator = op;
    $operator.value = op;
  } else if (!numOne && op === "-") {
    numOne += op;
  } else {
    alert("숫자를 먼저 입력하세요");
  }
};

document.querySelector("#num-0").addEventListener("click", onClickCalculate);
document.querySelector("#num-1").addEventListener("click", onClickCalculate);
document.querySelector("#num-2").addEventListener("click", onClickCalculate);
document.querySelector("#num-3").addEventListener("click", onClickCalculate);
document.querySelector("#num-4").addEventListener("click", onClickCalculate);
document.querySelector("#num-5").addEventListener("click", onClickCalculate);
document.querySelector("#num-6").addEventListener("click", onClickCalculate);
document.querySelector("#num-7").addEventListener("click", onClickCalculate);
document.querySelector("#num-8").addEventListener("click", onClickCalculate);
document.querySelector("#num-9").addEventListener("click", onClickCalculate);
document.querySelector("#plus").addEventListener("click", onClickOperator("+"));
document
  .querySelector("#minus")
  .addEventListener("click", onClickOperator("-"));
document
  .querySelector("#divide")
  .addEventListener("click", onClickOperator("/"));
document
  .querySelector("#multiply")
  .addEventListener("click", onClickOperator("*")); // 여기 인수에 x가 아닌, *이 들어간 것을 확인!
document.querySelector("#calculate").addEventListener("click", () => {
  if (numTwo) {
    switch (operator) {
      case "+":
        $result.value = parseInt(numOne) + parseInt(numTwo);
        break;
      case "-":
        $result.value = numOne - numTwo;
        break;
      case "*":
        $result.value = numOne * numTwo;
        break;
      case "/":
        $result.value = numOne / numTwo;
        break;
      default:
        break;
    }
    $operator.value = "";
    operator = "";
    numOne = $result.value;
    numTwo = "";
  } else {
    alert("숫자를 먼저 입력하세요");
  }
});
document.querySelector("#clear").addEventListener("click", () => {
  numOne = "";
  operator = "";
  numTwo = "";
  $operator.value = "";
  $result.value = "";
});
