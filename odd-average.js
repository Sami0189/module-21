/**
 * 
 * function takes an array as parameter
 * give me the average of th odd numbers in the array
 * 
 * 
 * 
 * first we put odd number in an array.
 */


function oddAverage(number){
    const odds = [];
   for(const num of number){
    if (num %2===1){
        console.log(num);
        odds.push(num);
        }
        
    }
     console.log(odds);
     const size = odds.length;
     console.log('the length is :',size);
     let sum =0;
     for(const oddNum of odds){
        console.log(oddNum);
        sum = sum + oddNum;
        
    }console.log('the total number:',sum);

    let avg = sum / size;
    //console.log('average of the odd number is:',avg);
    return avg;
}

const numbers = [42,13,58,65,81,96,7,111];
const avg = oddAverage(numbers);
console.log('average of the odd number is:',avg);