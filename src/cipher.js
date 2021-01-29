
const cipher = {
  encode : (text, offSet) => {
   /* if (typeof text != 'string' || text == ''){
      throw new TypeError('ENO'); 
    }

    else if ( typeof offSet != "number" || offSet < 1){
      throw new TypeError('NO'); 
    }
    

    try{
      if (text == "") throw alert;
    }
    finally{
      alert("no");
    }*/
  

    //console.log(text, offSet);
    let resultEncode="";
      
      for (let i=0; i<text.length; i +=1){
      let asciiN = text[i].charCodeAt(); //Genera el codigo asccii
      console.log(text[i].charCodeAt());

        if(asciiN <= 32){
          resultEncode += "";
        }
        else if( asciiN >= 33 && asciiN <= 47){
          let symbolCode = (asciiN - 33 + parseInt(offSet)) % 15 + 33;
          resultEncode +=String.fromCharCode(symbolCode);
        }
        else if (asciiN >= 48 && asciiN <= 57){
          let numberCode = (asciiN - 48 + parseInt(offSet)) %10 + 48;
          resultEncode += String.fromCharCode(numberCode);
        }
        else if (asciiN >= 65 && asciiN <= 90) {
        let upperLetters = (asciiN  - 65 + parseInt(offSet)) % 26 + 65;
        resultEncode += String.fromCharCode(upperLetters);
        // console.log(asciiN, offSet);
        //console.log(resultEnconde);//CODIGO ASCII A LETRA
        }
        else if (asciiN >= 97 && asciiN <=122){
        let lowerLetters = (asciiN - 97 + parseInt(offSet) %26 + 97)
        resultEncode += String.fromCharCode(lowerLetters);
        }
        else{
        resultEncode += text[i]
      }
    }

  return resultEncode;

},

  decode : (messageCipherO, offSet) => {

   /* if (typeof messageCipherO !== 'string' || messageCipherO == ''){
      throw new TypeError('Exception message'); 
    }

    else if ( typeof offSet !== "number" || offSet < 1){
      throw new TypeError('Exception message'); 
    }*/
  
  let resultDecode = "";

  for (let i = 0; i < messageCipherO.length; i +=1){

    let final = messageCipherO[i].charCodeAt(); //Genera el codigo asccii
    console.log(messageCipherO[i].charCodeAt());

      if(final<= 32){
      resultDecode += "";
      }
      else if( final >= 33 && final <= 47){
        let symbolDecode = (final - 47 + parseInt(offSet)) % 15 + 47;
        resultDecode +=String.fromCharCode(symbolDecode);
      }
      else if (final >= 48 && final <= 57) {
        let numberDecode = (final - 57 - parseInt(offSet))%10 +57;
        resultDecode += String.fromCharCode(numberDecode);
      }
      else if (final >= 65 && final <= 90){
        let upperLettersDecode = (final - 90 - parseInt(offSet)) % 26 + 90;
        resultDecode += String.fromCharCode(upperLettersDecode);
        console.log(messageCipherO);
      }
      else if (final >= 97 && final <= 122){
        let lowerLettersDecode = (final - 122 - parseInt(offSet)) % 26 + 122;
        resultDecode += String.fromCharCode(lowerLettersDecode);
        console.log(messageCipherO);
      }
      else{
        resultDecode += messageCipherO[i]
      }
    }
    return resultDecode;

  },
  // ...
};

export default cipher;
