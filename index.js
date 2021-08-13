function sayHello() {
  console.log("Hello!");
}

function sayHelloToIsabel() {
  console.log("Hello, Isabel!");
}

function sayHelloToSofia() {
  console.log("Hello, Sofia!");
}

function sayHelloToBrendan() {
  console.log("Hello, Brendan!");
}

function doSomething(thing) {
  console.log(thing);
}
  function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
  }
  
  function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  }
  //say("Julio", "hello");
  function say(greeting, firstName) {
    console.log("firstName: ", firstName);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
  }
  //say("Julio", "hello");


  function add(x, y) {
    return x + y;
  }
  //console.log(add(80, 9000));
  function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
  }
  //console.log(say("Hello", "Sofia")); 
  function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  }
  //console.log(say("Hello", "Sofia"));
  function add(x, y) {
     return x + y;
  }
  //console.log(add(1, 2));
  function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
    console.log("I was called!");
  }
  //console.log(say("Howdy", "partner"));
  function say(greeting, firstName) {
    console.log("I was called!");
    return `${greeting}, ${firstName}!`;
  }
  //console.log(say("Howdy", "partner"));

function intro(name, age) {
  console.log("I am working");
  return `${name} is ${age} years old!`;
}  
console.log(intro("Niss", 37));
