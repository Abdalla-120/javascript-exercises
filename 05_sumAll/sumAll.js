const sumAll = function(num1, num2) {
    let sum = 0;
    if (((typeof(num1) == "number")& (typeof(num2)=="number"))&((num1 >=0)&(num2 >= 0))){
        if(num1 > num2){
            temp = num1;
            num1 = num2;
            num2 = temp;
        };
        for (i = num1; i < num2+1; i++){
            sum += i;
        }
        return sum
    }   
    else {return "ERROR"};
};

// Do not edit below this line
module.exports = sumAll;
