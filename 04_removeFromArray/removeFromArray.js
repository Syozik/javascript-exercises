const removeFromArray = function() {
    let arr = arguments[0];
    let elements = Array.from(arguments);
    elements.shift();
    
    let new_array = [];
    for (let elem of arr){
        if (elements.includes(elem)){
            continue;
        }
        new_array.push(elem);
    }
    return new_array
};

// Do not edit below this line
module.exports = removeFromArray;