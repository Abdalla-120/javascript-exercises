const removeFromArray = function(array, ...out) {
    let newArray = [];
    array.forEach((item) => {
        if (out.includes(item)){}
        else{
            newArray.push(item);
        };
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
