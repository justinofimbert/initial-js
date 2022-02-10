function add7(number) {
    return number + 7
}

let multiply = (a, b) => a * b;

function capitalize(string) {
    const first_capped = string.slice(0, 1).toUpperCase();
    const remaining_lower = string.slice(1).toLowerCase();
    return first_capped + remaining_lower;
}

let lastLetter = str => str.slice(-1);