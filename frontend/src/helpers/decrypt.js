import CryptoJS from "crypto-js";
import Utf8 from "crypto-js/enc-utf8";
import AES from "crypto-js/aes";

// Global Decryption function for decrypting Strings and Number Only.
const decrypt = async (data) => {
  var bytes = AES.decrypt(data, process.env.REACT_APP_ENCRYPTION_KEY);
  var originalText = bytes.toString(Utf8);
  return originalText;
};

// Global Decryption function for decrypting Array and Objects.
const decryptObject = async (data) => {
  var bytes = CryptoJS.AES.decrypt(data, process.env.REACT_APP_ENCRYPTION_KEY);
  var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  return decryptedData;
};

// Function for Decrypting hompage Quiz.
const decryptHomeQuiz = async (data) => {
  const result = await Promise.all(
    data.map(async (eachQuiz) => {
      return {
        ...eachQuiz,
        title: await decrypt(eachQuiz.title),
      };
    })
  );
  return await result;
};

// Decryption function for decrypting each Quiz.
const decryptEachQuiz = async (data) => {
  const result = await Promise.all(
    data.map(async (quiz) => {
      return {
        ...quiz,
        title: await decrypt(quiz.title),
        questions: await decryptObject(quiz.questions),
      };
    })
  );
  return result;
};

export { decryptHomeQuiz, decryptEachQuiz };
