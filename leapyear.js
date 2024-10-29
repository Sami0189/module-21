/**
 * simple logic
 * year will be a leap year if the year is divisible by 4
 */

// function isLeapYear (year){
//        if(year%4===0){
//         return true;
//        }
//        else{
//         return false;
//        }
// }
// const isLiPi = isLeapYear(2052);
// console.log(isLiPi);




/**
 * 1.those year that is not divisble(bibajjo) by 100 and if the year is divisble by 4: then it will be a leap year
 * 
 * 2.if the year is divisble by 400, then it is a leap year 
 * 
 * 3.else it is not a leap year
 * 
 */

function isLeapYear2(year){
    if(year%100 !== 0 && year%4 === 0){
        return true;
    }
    else if(year % 100 ===0 && year % 400===0){
        return true;
    }
    else{
        return false;
    }
}

const isLiPi = isLeapYear2(2100);
const isLiPi1 = isLeapYear2(2000);
const isLiPi2 = isLeapYear2(2400);
const isLiPi3 = isLeapYear2(1900);
 console.log(isLiPi,isLiPi1,isLiPi2,isLiPi3);
