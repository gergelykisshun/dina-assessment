const phrasifyHelper = {
  "0": "",
  "1": "one",
  "2": "two",
  "3": "three",
  "4": "four",
  "5": "five",
  "6": "six",
  "7": "seven",
  "8": "eight",
  "9": "nine",
  "10": "ten",
  "11": "eleven",
  "12": "twelve",
  "13": "thirteen",
  "14": "fourteen",
  "15": "fifteen",
  "16": "sixteen",
  "17": "seventeen",
  "18": "eighteen",
  "19": "nineteen",
  "20": "twenty",
  "30": "thirty",
  "40": "forty",
  "50": "fifty",
  "60": "sixty",
  "70": "seventy",
  "80": "eighty",
  "90": "ninety",
  "100": "hundred",
  "1000": "thousand",
  "1000000": "million"
}

const phrasify = (num) => {
  let strArr = num.toString().split('');
  let resultStr = '';
  while (strArr.length > 0){
    switch(strArr.length){
      case 1:
        resultStr += phrasifyHelper[strArr[0]]
        break;
      case 2:
        if(strArr[0] === '1'){
          resultStr += phrasifyHelper[strArr.join('')]
          strArr.shift();
        }else if (strArr[1] === '0'){
          resultStr += phrasifyHelper[strArr.join('')]
          strArr.shift();
        } else if (strArr[0] === '0'){
          resultStr += `and ${phrasifyHelper[parseInt(strArr[1])]}`;
          strArr.shift();
        } else {
          resultStr += `${phrasifyHelper[parseInt(strArr[0]) * 10]}-`
        };
        break;
      case 3:
        if(strArr[0] === "0"){
          console.log('hey')
        } else {
          resultStr += `${phrasifyHelper[parseInt(strArr[0])]} hundred and `;
        }
        break;
      case 4:
        resultStr += `${phrasifyHelper[parseInt(strArr[0])]} thousand `;
        break;
      case 5:
        if(strArr[0] === '1'){
          resultStr += `${phrasifyHelper[`${strArr[0]}${strArr[1]}`]} thousand `;
          strArr.shift();
        }else if (strArr[1] === '0'){
          resultStr += `${phrasifyHelper[`${strArr[0]}${strArr[1]}`]} thousand `
          strArr.shift();
        } else {
          resultStr += `${phrasifyHelper[parseInt(strArr[0]) * 10]} thousand `
        };
        break;
      case 6:
        if(strArr[1] === '0' && strArr[2] === '0'){
          resultStr += `${phrasifyHelper[parseInt(strArr[0])]} hundred thousand `;
          strArr.shift();
          strArr.shift();
        } else {
          resultStr += `${phrasifyHelper[parseInt(strArr[0])]} hundred `;
        }
        break;
      case 7:
        resultStr += `${phrasifyHelper[strArr[0]]} million `
        break;
      case 8:
        if(strArr[0] === '1'){
          resultStr += `${phrasifyHelper[`${strArr[0]}${strArr[1]}`]} million `;
          strArr.shift();
        }else if (strArr[1] === '0'){
          resultStr += `${phrasifyHelper[`${strArr[0]}${strArr[1]}`]} million `;
          strArr.shift();
        } else {
          resultStr += `${phrasifyHelper[`${strArr[0]}${strArr[1]}`]} million `;
        };
        break;
      default:
    }
    // necessary last step so while doesn't go infinite
    strArr.shift();
  }
  // returns the phrasified version of the number
  return resultStr;
};

export default phrasify;