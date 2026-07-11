const year = 1513;

function isLeapYear(number){

    if(number%400 === 0){
        return `${number} is  a leap year.`
    }
    else if(number%100 === 0){
        return `${number} is not a leap year.`
    }
    else if(number%4 === 0){
        return `${number} is a leap year.`
    }
    else return `${number} is not a leap year.` // what if the number is not divisible by 4 , 100 or 400
    

};

let result = isLeapYear(year);
console.log(result);

console.log(isLeapYear(2024));
console.log(isLeapYear(2000));
console.log(isLeapYear(1900));
console.log(isLeapYear(1356));