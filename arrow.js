// function declaration version
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
  );

// arrow version

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask("do you agree?", () => alert("you agree"), () => alert("you disagree"))