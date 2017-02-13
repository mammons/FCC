// Return true if the passed string is a valid US phone number.

// The user may fill out the form field any way they choose as long as it is a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
// For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

function telephoneCheck(str) {
  var strippedNumberWithParentheses = str.replace(/[-]|\s/g, "");
  var length = strippedNumberWithParentheses.length;
  var numWithoutParentheses = str.replace(/\D/g, "");
  
  if(length < 10) return false; //if length is less than 10 don't bother
  if(isNaN(str.charAt(0)) && str.charAt(0) !== '(') return false;
  
  
  if(length === 10){
    if(numWithoutParentheses.length === length){
    return true; //no parentheses and no country code if length is 10 it's 10 digits
    }
  }
  //if length is greater than 10 then it could A. Have parentheses B. have a country code
  if(length > 10){
    //This is a number with country code of 1
    if(numWithoutParentheses.charAt(0) == 1){

      //this should be an 11 digit number with a country code of 1, e.g., 18034639029 so a good number
      if(length === 11){
      return true;
      }
      //this is a number with a country code of 1 and parentheses (opening and closing) around the area code
      if(length === 13){
        if(strippedNumberWithParentheses.charAt(1) == '(' && strippedNumberWithParentheses.charAt(5) == ')'){
          return true;
        }
      }
    }        
    
    console.log("str: " + str + " charAt 0: " + strippedNumberWithParentheses.charAt(0) + " charAt 4: " + strippedNumberWithParentheses.charAt(4));
    //12 characters with no country code is an area coded number with parentheses
    if(length === 12){
      if(strippedNumberWithParentheses.charAt(0) === '('){
        if(strippedNumberWithParentheses.charAt(4) === ')'){
          return true;
        }
      }
    }
  }
  return false;
}



telephoneCheck("(555)555-5555");
