import CryptoJS from "crypto-js";
import Utf8 from "crypto-js/enc-utf8";
import AES from "crypto-js/aes";
const decrypt = async (data) => {
  if (typeof data === "string" || typeof data === "number") {
    var bytes = AES.decrypt(data, process.env.REACT_APP_ENCRYPTION_KEY);
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

// const DecryptHex = () => {
//   const encryptedStringHex = '1f9ccb888fcc80b71dd7d1049b37ba19595315c4d0bc24e8a3ac97878258ece5'
//   // console.log(encryptedStringHex)
//   let chip = "AES";
//   let skey = process.env.REACT_APP_ENCRYPTION_KEY
//   let result = '';
//   const key = CryptoJS.enc.Hex.parse(skey);
//   const iv = CryptoJS.lib.WordArray.create([0x00, 0x00, 0x00, 0x00]);
//   try {
//       const array = CryptoJS.enc.Hex.parse(encryptedStringHex);
//       if (chip === 'AES') {
//           result = CryptoJS.AES.decrypt(encryptedStringHex, key, {
//               iv: iv,
//               format: CryptoJS.format.Hex,
//               mode: CryptoJS.mode.CBC,
//           }).toString(CryptoJS.enc.Utf8);
//           // console.log(skey);
//           console.log( result);
//       } else {
//           result = array;
//       }
//       return result;
//   } catch (error) {
//       throw error;
//   }
// };

// export default DecryptHex
