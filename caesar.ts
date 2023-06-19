class Caesar {
  private key: number;

  constructor(key: number) {
    this.key = key;
  }

  encrypt(plainText: string): string {
    let cipherText = '';
    
    for(let s of plainText) {
      if(s == ' ') {
        cipherText += ' ';
        continue;
      }

      let startAscii = s == s.toUpperCase() ? 65 : 97;
      let index = s.charCodeAt(0) - startAscii + this.key;
      
      if(index > 25) index -= 26;

      cipherText += String.fromCharCode(startAscii + index);
    }
    return cipherText;
  }

  decrypt(cipherText: string): string {
    let plainText = '';

    for(let s of cipherText) {
      if(s == ' ') {
        plainText += ' ';
        continue;
      }

      let startAscii = s == s.toUpperCase() ? 65 : 97;
      let index = s.charCodeAt(0) - startAscii - this.key;
      
      if(index < 0) index += 26;

      plainText += String.fromCharCode(startAscii + index);
    }
    return plainText;
  }
}

export { Caesar }