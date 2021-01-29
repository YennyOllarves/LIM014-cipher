/*
let messageToCipher = document.getElementById("messageOne");
let messageCipherO = document.getElementById("messageCipher");
*/


    
    document.getElementById("buttonCipher").addEventListener("click", function () { //Evento click del boton cifrar
        let text = document.getElementById("messageOne").value; // tomar el mensaje escrito por el usuario
        let offSet = document.getElementById("offSet").value; // tomar el numero de desplazamientos
        document.getElementById("messageCipher").value = cipher.encode(text, offSet);

    })
    document.getElementById("buttonDecipher").addEventListener("click", function (){
        //let text = document.getElementById("messageOne").value; // tomar el mensaje escrito por el usuario
        let offSet = document.getElementById("offSet").value; // tomar el numero de desplazamientos
        let messageCipherO = document.getElementById("messageCipher").value;
        
        document.getElementById("messageDecipher").value = cipher.decode(messageCipherO, 
          offSet);
        
        
})

//BOTON PARA COPIAR TEXTO

  document.getElementById("buttonCopy").addEventListener("click", function(){
    //alert("vamo a copia");
    document.getElementById("buttonCopy").value = textCopy();

  })
function textCopy() {

let textCopyC= document.getElementById("messageCipher");
textCopyC.select();
textCopyC.setSelectionRange(0,99999);
document.execCommand('copy');



}
// BOTON PARA LIMPIAR LOS CAMPOS
 document.getElementById("buttonClear").addEventListener("click", function(){
  // alert("vamo a limpiar");
   document.getElementById("buttonClear").value = clearText();

 })

 function clearText(){
   document.getElementById("messageOne").value = "";
   document.getElementById("offSet").value="";
   document.getElementById("messageCipher").value="";
   document.getElementById("messageDecipher").value="";
   

 }
import cipher from './cipher.js';

console.log(cipher);
