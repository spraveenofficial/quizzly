import crypto from "crypto";
import CryptoJS from "crypto-js";
import dotenv from "dotenv";
dotenv.config();

class Encryption {
  async encrypt(data) {
    if (typeof data == "string" || typeof data == "number") {
      var ciphertext = CryptoJS.AES.encrypt(
        data,
        process.env.ENCRYPTION_KEY
      ).toString();
      return ciphertext;
    } else {
      var ciphertext = CryptoJS.AES.encrypt(
        JSON.stringify(data),
        process.env.ENCRYPTION_KEY
      ).toString();
      return ciphertext;
    }
  }
  async decrypt(data) {
    var bytes = CryptoJS.AES.decrypt(data, process.env.ENCRYPTION_KEY);
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
  }
  async encryptCrypto(data) {
    var algorithm = "aes-192-cbc"; //algorithm to use
    const key = crypto.scryptSync(process.env.ENCRYPTION_KEY, "salt", 24); //create key
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    const newData = cipher.update(data, "utf8", "hex") + cipher.final("hex");
    return newData;

    // Decrypt
    // const decipher = crypto.createDecipheriv(algorithm, key, iv);
    // var decrypted =
    //   decipher.update(encrypted, "hex", "utf8") + decipher.final("utf8"); //deciphered text
    // console.log(decrypted);
  }
}

export default new Encryption();
