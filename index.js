//Var vs Let testing , Global variable  with Var.
//While Let only allows the variable to be defined in a specific area

function testSet() {
  let i = "Jer";
  if (true) {
    let i = "on";
    console.log("Your name is Jer", i);
  }
  console.log(i);
  return i;
}
testSet();

//let word1 = "jeron";
// let w2 = "Je";

// const fName = word1 + " " + w2;

// console.log(fName);
