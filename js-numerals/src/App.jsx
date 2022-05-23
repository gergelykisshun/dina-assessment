import React, { useState } from 'react';
import './App.css';

const App = () => {

  const pharisifyHelper = {
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


  const [num, setNum] = useState('');


  const phrasify = (num) => {
    let strArr = num.toString().split('');
    let resultStr = '';
    while (strArr.length > 0){
      switch(strArr.length){
        case 1:
          resultStr += pharisifyHelper[strArr[0]]
          break;
        case 2:
          if(strArr[0] === '1'){
            resultStr += pharisifyHelper[strArr.join('')]
            strArr.shift();
          }else if (strArr[1] === '0'){
            resultStr += pharisifyHelper[strArr.join('')]
            strArr.shift();
          } else {
            resultStr += pharisifyHelper[parseInt(strArr[0]) * 10]
          };
          break;
        case 3:
          resultStr += `${pharisifyHelper[parseInt(strArr[0])]} hundred and `;
          break;
          case 4:
            resultStr += `${pharisifyHelper[parseInt(strArr[0])]} thousand `;
            break;
            case 5:
          if(strArr[0] === '1'){
            resultStr += `${pharisifyHelper[`${strArr[0]}${strArr[1]}`]} thousand `;
            strArr.shift();
          }else if (strArr[1] === '0'){
            resultStr += `${pharisifyHelper[`${strArr[0]}${strArr[1]}`]} thousand `
            strArr.shift();
          } else {
            resultStr += `${pharisifyHelper[parseInt(strArr[0]) * 10]} thousand `
          };
          break;
        case 6:
          if(strArr[1] === '0' && strArr[2] === '0'){
            resultStr += `${pharisifyHelper[parseInt(strArr[0])]} hundred thousand `;
            strArr.shift();
            strArr.shift();
          }
          resultStr += `${pharisifyHelper[parseInt(strArr[0])]} hundred `;
          break;
        case 7:
          resultStr += `${pharisifyHelper[parseInt(strArr[0])]} million `;
          break;
        default:
          resultStr += 'random '
      }
      // necessary last step so while doesn't go infinite
      strArr.shift();
    }
    // returns the phrasified version of the number
    return resultStr;
  };
  return (
    <section className='wrapper'>
      <div className='content'>
        <input type="text" onChange={(e) => setNum(e.target.value)} value={num}/>
        <h2>{phrasify(num)}</h2>
      </div> 
    </section>
  )
}

export default App