let login = prompt("input username");

if (login === "Admin") {
    let password = prompt("input password"); 
    if (password === "TheMaster") {
        alert("Welcome");
    }

    else if (password === "" || password === null) {
        alert("Canceled");

    }
    else {
        alert("Wrong password!");
    }
}

else if (login === "" || login === null) {
    alert("Canceled");
}

else {
    alert("I don't know you");
}