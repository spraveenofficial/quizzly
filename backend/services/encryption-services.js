import CryptoJS from "crypto-js";
import dotenv from "dotenv";
dotenv.config();

class Encryption {
  async encrypt(data) {
    console.log(typeof data);
    if (typeof data == "string") {
      var ciphertext = CryptoJS.AES.encrypt(
        data,
        process.env.ENCRYPTION_KEY
      ).toString();
      return ciphertext;
    } else {
      const ciphertext = CryptoJS.AES.encrypt(
        JSON.stringify(data),
        process.env.ENCRYPTION_KEY
      ).toString();
      // console.log(ciphertext);
      return ciphertext
    }
  }
  async decrypt(data) {
    var bytes = CryptoJS.AES.decrypt(data, process.env.ENCRYPTION_KEY);
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
  }
}

export default new Encryption();
