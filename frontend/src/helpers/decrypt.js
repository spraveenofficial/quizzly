import CryptoJS from "crypto-js";

const decrypt = async (data) => {
  var bytes = CryptoJS.AES.decrypt(
    data,
    process.env.REACT_APP_ENCRYPTION_KEY
  );
  var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  console.log(decryptedData);
  return decryptedData;
};

export default decrypt;
