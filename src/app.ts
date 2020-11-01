const button = document.getElementById("button")!;

function clickHandler(message: string) {
  console.log("Clicked.", message);
}

button.addEventListener("click", clickHandler.bind(null, "Hello"));

function sendAnalytics(msg: string) {
  console.log(msg);
}

function add(n1: number, n2: number) {
  if (n1 + n2 > 10) {
    return n1 + n2;
  }
  return;
}
