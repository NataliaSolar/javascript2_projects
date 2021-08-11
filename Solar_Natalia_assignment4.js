function cipher(plainText, shift_distance) { 
    
    let cipherText = "";
    for(let i = 0; i<plainText.length; i++){

        if((plainText.charCodeAt(i)>=65 && plainText.charCodeAt(i)<=90) ||(plainText.charCodeAt(i)>=97 && plainText.charCodeAt(i)<=122)){

            if(plainText.charCodeAt(i)+shift_distance > 90 && plainText.charCodeAt(i)+shift_distance < 97){

                let newShift = plainText.charCodeAt(i)+shift_distance - 90;
                cipherText +=  String.fromCharCode(64 + newShift);

            }else if(plainText.charCodeAt(i)+shift_distance > 122) {

                newShift = plainText.charCodeAt(i)+shift_distance - 122;
                cipherText +=  String.fromCharCode(96 + newShift);

            }else{
                cipherText +=  String.fromCharCode(plainText.charCodeAt(i)+shift_distance) 
            }
            
        
        }else{

            cipherText += plainText[i];
        }


    }
    return cipherText;
   }
   
   function decipher(encryptedText, shift_distance) { 
    
    let plainText = "";

    for(let i = 0; i<encryptedText.length; i++){

        if((encryptedText.charCodeAt(i)>=65 && encryptedText.charCodeAt(i)<=90) ||(encryptedText.charCodeAt(i)>=97 && encryptedText.charCodeAt(i)<=122)){

            if(encryptedText.charCodeAt(i) - shift_distance < 65){

               let newCharCode = 91 - (65 - (encryptedText.charCodeAt(i) - shift_distance));
               plainText +=  String.fromCharCode(newCharCode) ;

            } else if(encryptedText.charCodeAt(i) - shift_distance < 97 && encryptedText.charCodeAt(i) - shift_distance > 90){

                newCharCode = 123 - (97 - (encryptedText.charCodeAt(i) - shift_distance));
                plainText +=  String.fromCharCode(newCharCode);

            }else{
                plainText +=  String.fromCharCode(encryptedText.charCodeAt(i) - shift_distance) ;
            }

        
        }else{

            plainText += encryptedText[i];
        }
    }
    return plainText;
   }

   //| 'abcdef' | 2 | 'cdefgh' |
//| 'Hello, World!' | 5 | 'Mjqqt, Btwqi!' |
   console.log(cipher("abcdef", 2))
   console.log(cipher("Hello, World!", 5));

   console.log(decipher("cdefgh", 2));
   console.log(decipher("Mjqqt, Btwqi!", 5));