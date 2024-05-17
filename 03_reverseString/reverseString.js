const reverseString = function(string) {
    let new_string = "";
    for (letter of string){
        new_string = letter + new_string;
    }
    return new_string;
};

// Do not edit below this line
module.exports = reverseString;