//Challenge Project: Credit Card Checker
//https://gist.github.com/mtapirina/41c32800b7a452f516b7090933dc3e58
//https://gist.github.com/codecademydev/db9f766146d5000a2dcf526e247b879a
// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2,invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4,mystery5];

// My arrays to test
const test = [4, 5, 3, 9, 6, 8, 9, 8, 8, 7, 7, 0, 5, 7, 9, 8];
const test1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const test2 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];

//invalid first number - 9 - to test 'Company not found'
const test3 = [9, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
//invalid butch array
const batchInv = [ invalid1, test3, invalid2,invalid3, invalid4, invalid5];

/*Create a function, validateCred() that has a parameter of an array. The purpose of validateCred() is to return true when an array contains digits of a valid credit card number and false when it is invalid. This function should NOT mutate the values of the original array.*/

function validateCred(array){
/* step 1 - Remove the last element from the array, 
(but remember, you don’t want to alter the original array!):*/
const arr = array.slice();//copy of array 
//console.log((array === arr) + '  copy of array');
let checkDigit = arr.pop();//Remove the last element from the array
//step 2 - Reverse the array (now without the last digit):
const reverseArray = arr.map((_, index) => 
    arr[arr.length - 1 - index]);
/* step 3 - Multiply the digits in odd positions 
(e.g. first digit, third, fifth…etc) by 2. 
If the resulting number is over 9, subtract 9 from the number : */
let sum = 0;
for (let i = 0; i < reverseArray.length; i++){
    let x = reverseArray[i]; // currentIndex
    
    if(  i % 2 === 0 ){
        x *= 2;
        x > 9?x -= 9:x;
    }
    sum += x;
}
/* step 4- Add up all the numbers in the array as well as the dropped digit from step 1. If the sum modulo 10 is 0 then the array contains a valid number: */
return (sum + checkDigit) % 10 === 0? true : false;
};

/* Create another function, findInvalidCards() that has one parameter for a nested array of credit card numbers. 
The role of findInvalidCards() is to check through the nested array for which numbers are invalid, and return another nested array of invalid cards.
*/

function findInvalidCards(array){
const invalidCards = array.filter((element) => !validateCred(element));
return invalidCards;
};


/*5
Create a function, idInvalidCardCompanies() that has one parameter for a nested array of invalid numbers and returns an array of companies.
Currently, there are 4 accepted companies which each have unique first digits.
3	Amex (American Express)
4	Visa
5	Mastercard
6	Discover
If the number doesn’t start with any of the numbers listed, print out a message like: “Company not found”.
idInvalidCardCompanies() should return an array of companies that have mailed out cards with invalid numbers. This array should NOT contain duplicates, i.e. even if there are two invalid Visa cards, "Visa" should only appear once in the array.
*/


function idInvalidCardCompanies(array){

const pushArr = [];

array.forEach((el)=>{
    //console.log(el[0])
        switch(el[0]){
            case 3:
            if(pushArr.indexOf('Amex (American Express)')=== - 1){
                pushArr.push('Amex (American Express)');
               }
            break;
            case 4:
            if(pushArr.indexOf('Visa')=== - 1){
                pushArr.push('Visa');
               }
            break;
            case 5:
            if(pushArr.indexOf('Mastercard')=== - 1){
                pushArr.push('Mastercard');
               }
            break;
            case 6:
            if(pushArr.indexOf('Discover')=== - 1){
                pushArr.push('Discover');
               }
            break;
            default:
            if(pushArr.indexOf('Company not found')=== - 1){
                pushArr.push('Company not found');
               }
            break; };
    })

  return pushArr;
};

/*extra:
to test credit card numbers, create a function that accepts a string and converts it into an array of numbers like the initially provided arrays. 
*/
function convertToNumbersArray (string){
// convert string => to array of characters
    let x = Array.from(string);
     console.log(x);
//new array of numbers => convert characters to numbers
    const toNumbersArray = x.map(el =>{
        let toNum = parseInt(el);
        return toNum;
        
       });
       console.log(toNumbersArray);
//if an element of new array is NaN?
       const validNumbers = toNumbersArray.some(el=>
         Number.isNaN(el));
       //console.log(validNumbers);

        //console.log(toNumbersArray);
     if(!validNumbers){
        return toNumbersArray;
     }else{
    return 'Wrong number of Credit Card. This function accepts only numbers!'
     } 
};


//Convert invalid to valid credit card number

function convertToValidCard (array){
    const arr = array.slice();// copy of original array
    //console.log(arr)
    let lastDigit = arr.pop();//remove the last digit from arr and store it in variable lastDigit
    //console.log(lastDigit);
    //console.log(arr);
    //aply the reverse loop to arr
    let sum = 0;
    for(let i = arr.length - 1; i >= 0; i--){
        let x = arr[i];
        if(i % 2 === 0){
            x *= 2;
            x > 9? x -= 9:x;
        }
        //console.log(x)
        sum += x;
       
    }
    //console.log(sum + ' sum');
    //console.log(lastDigit + ' - last digit');
    let result = sum + lastDigit;
    //console.log(result + ' - result');
    
    if(result % 10 !== 0){
       let y = Math.round(result/10)* 10;
       //console.log(y + ' - result round 10%');
       if(sum % 10 === 0){
        lastDigit = 0;
       }else{
       lastDigit = y - sum;
       }
       //console.log(lastDigit + ' - last digit changed');
       arr.push(lastDigit);
    }else{
        return 'This Credit Card is valid. Please insert invalid Credit Card number'
    }
    //console.log(arr);
    return arr;

};



// test
//console.log('test2(invalid) convert to valid cc number');
//console.log(convertToValidCard(test2));
//console.log(validateCred(convertToValidCard(test2)));
//console.log('parse Int - new array of integers');
//console.log(convertToNumbersArray ('49161591k0658210'));
//console.log('batchInvalid - Company not found =>');
//console.log(idInvalidCardCompanies(batchInv));
//console.log('batch - id Invalid Card Companies =>');
//console.log(idInvalidCardCompanies(batch));
//console.log('batch - findInvalidCards(8) =>');
//console.log(findInvalidCards(batch));
//console.log('batchInvalid - findInvalidCards(6) =>');
//console.log(findInvalidCards(batchInv))
//console.log('test true - validateCred =>');
//console.log(validateCred(test));
//console.log(validateCred(test2));
//console.log(validateCred(valid1));
//console.log('test false - validateCred =>');
//console.log(validateCred(convertToNumbersArray ('3542403720469485746')));
//console.log(validateCred(invalid1));
//console.log('test mystery (false = 2, true = 3) - validateCred =>');
//console.log(validateCred( mystery5));