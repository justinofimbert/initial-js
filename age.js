let age = prompt("how old are you?", 21)

let message = (age < 4) ? "hey baby, how are you?" :
  (age < 18) ? "hello" :
  (age < 100) ? "greetings" :
  "you are really old i think";

alert(message)