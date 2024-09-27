//-----------undefined and null-------------
const MY_NULL_VAR = null;
const MY_UNDEFINED_VAR = undefined;
// null means the variable is explicitly set to represent "no value" or "nothing"
// undefined means the variable is declared but no value is assigned to it, or a function doesn't return a value
function nullAndUndefinedCheck() {
  //null and false are same
  if (MY_NULL_VAR == null) {
    console.log("I am null/false");
  }
  if (!MY_NULL_VAR) {
    console.log("I am null/false");
  }
  if (MY_UNDEFINED_VAR == undefined) {
    console.log("I am undefined");
  }
  //null and undefined are different things
  if (!MY_UNDEFINED_VAR) {
    console.log("I am null/false");
  }
}
nullAndUndefinedCheck();

// ---------let const and var scope--------

function test() {
  const myVar = "outside the if";
  let functional = "I am functional scoped";
  if (myVar) {
    //let and const are blocked scoped
    let anotherVar = "inside the if";
    console.log(functional);
  }
  //console.log(anotherVar);
  console.log(functional);
}
test();
