// 8 Ball

let output = document.getElementById("output");

document.getElementById("img").addEventListener("click", btnClicked);

function btnClicked() {
  let question = document.getElementById("question").value.toLowerCase();

  let randNum = Math.random();
  console.log(randNum);

  if (question === "") {
    output.innerHTML = "Please ask a question...";
    //
  } else if (
    question === "is javascript awesome?" ||
    question === "is javascript awesome"
  ) {
    output.innerHTML = "Of Course!";
    //
  } else if (
    question === "does the magic 8 ball actually work?" ||
    question === "does the magic 8 ball actually work"
  ) {
    output.innerHTML = "You Dare to Doubt Me!";
    //
  } else if (question === "is this random?" || question === "is this random") {
    output.innerHTML = "Of Course it is";
    //
  } else {
    if (randNum <= 0.2) {
      output.innerHTML = "Without a Doubt.";
    } else if (randNum <= 0.4) {
      output.innerHTML = "As I see it, yes.";
    } else if (randNum <= 0.6) {
      output.innerHTML = "Don't Count on it.";
    } else if (randNum <= 0.8) {
      output.innerHTML = "Concentrate and ask again.";
    } else {
      output.innerHTML = "Outlook not so good.";
    }
  }
}
