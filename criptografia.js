/* -----| DESAFIO: CRIPTOGRAFIA |------------------------------------------------------------------- */

// - Permitir escrever um texto, com letras maiúsculas e minúsculas, para ser cifrado.
// - [x]  Mostrar o resultado da cifra corretamente.
// - [x]  Permitir escrever um texto, com letras maiúsculas e minúsculas, para ser descifrado.
// - [x]  Mostrar o resultado descifrado corretamente.
// - [x]  Permitir escolher o `offset` (*deslocamento*) a ser usado na cifragem/descifragem.
// - [x]  Implementa `encode`.
// - [x]  Implementa `ecode`.


function encode(char, offset) {
  let originalCharCode = char.charCodeAt(0);
  let modifiedCharCode = (originalCharCode + offset);
    
  if (originalCharCode >= 65 && originalCharCode <= 90) {
    if ([65, 69, 73, 79, 85, 97, 101, 105, 111, 117].includes(originalCharCode))
      return [65, 69, 73, 79, 85, 97, 101, 105, 111, 117].indexOf(originalCharCode);
    return modifiedCharCode < 65 ? String.fromCharCode(modifiedCharCode + 26) : modifiedCharCode > 90 ? String.fromCharCode(modifiedCharCode - 26) : String.fromCharCode(modifiedCharCode);
  }
  else if (originalCharCode >= 97 && originalCharCode <= 122) {
    if ([65, 69, 73, 79, 85, 97, 101, 105, 111, 117].includes(originalCharCode))
      return [65, 69, 73, 79, 85, 97, 101, 105, 111, 117].indexOf(originalCharCode);
    return modifiedCharCode < 97 ? String.fromCharCode(modifiedCharCode + 26) : modifiedCharCode > 122 ? String.fromCharCode(modifiedCharCode - 26) : String.fromCharCode(modifiedCharCode);
  }
  else
    return String.fromCharCode(originalCharCode);
}

function decode(char, offset) {
  let originalCharCode = char.charCodeAt(0);
  let modifiedCharCode = (originalCharCode - offset);

  if (char > 0 && char <= 10) {
    console.log('Char:', char, ' - Decode Returns:' + String.fromCharCode([65, 69, 73, 79, 85, 97, 101, 105, 111, 117][char]));
    return String.fromCharCode([65, 69, 73, 79, 85, 97, 101, 105, 111, 117][char]);
  }
    
  if (originalCharCode >= 65 && originalCharCode <= 90) {
    return modifiedCharCode < 65 ? String.fromCharCode(modifiedCharCode + 26) : modifiedCharCode > 90 ? String.fromCharCode(modifiedCharCode - 26) : String.fromCharCode(modifiedCharCode);
  }
  else if (originalCharCode >= 97 && originalCharCode <= 122) {
    return modifiedCharCode < 97 ? String.fromCharCode(modifiedCharCode + 26) : modifiedCharCode > 122 ? String.fromCharCode(modifiedCharCode - 26) : String.fromCharCode(modifiedCharCode);
  }
  else
    return String.fromCharCode(originalCharCode);
}

function translateMessage(text, offset, isEncrypted=false) {
  let message = '';

  for (char of text)
    if (isEncrypted)
      message += decode(char, offset);
    else
      message += encode(char, offset);
      
  return message;
}


const mensagem = 'Abacate, Limao, Salsinha.';
const mensagem1 = 'ABDCEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrtuvwxyz';
const mensagem2 = 'Traducao Perfeitamente Realizada.';

const cifra1 = translateMessage(mensagem, 3);
console.log('Cifra1:', cifra1);
const cifra2 = translateMessage(mensagem1, 7);
console.log('Cifra2:', cifra2);
const cifra3 = translateMessage(mensagem2, -1);
console.log('Cifra3:', cifra3);

const traducao1 = translateMessage(cifra1, 3, true);
console.log('Tradução 1:', traducao1);
const traducao2 = translateMessage(cifra2, 7, true);
console.log('Tradução 2:', traducao2);
const traducao3 = translateMessage(cifra3, -1, true);
console.log('Tradução 3:', traducao3);
