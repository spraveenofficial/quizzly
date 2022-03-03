import CryptoJS from "crypto-js";
import Utf8 from 'crypto-js/enc-utf8';
import AES from 'crypto-js/aes';
const decrypt = async (data) => {
  if (typeof data === "string" || typeof data === "number") {
    var bytes = AES.decrypt(
      data,
      process.env.REACT_APP_ENCRYPTION_KEY
    );
    var originalText = bytes.toString(Utf8);
    console.log(process.env.REACT_APP_ENCRYPTION_KEY);
    console.log(originalText);
    return originalText;
  } else {
    var bytes = CryptoJS.AES.decrypt(
      data,
      process.env.REACT_APP_ENCRYPTION_KEY
    );
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
  }
};

export default decrypt;
