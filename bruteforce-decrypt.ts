import { Caesar } from './caesar';

function bruteforceDecrypt(cipherText: string) {
  let array: string[] = [];
  for(let i=0; i<26; i++) {
    let caesar = new Caesar(i);
    array.push(caesar.decrypt(cipherText));
  }

  return array;
}

export { bruteforceDecrypt };