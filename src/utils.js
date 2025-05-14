import CryptoJS from "crypto-js";

const SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY;

export const encryptURL = (id) => {
  const encrypted = CryptoJS.AES.encrypt(id.toString(), SECRET_KEY).toString();

  return encodeURIComponent(encrypted);
};

export const decryptURL = (encryptedId) => {
  try {
    const decoded = decodeURIComponent(encryptedId);
    const bytes = CryptoJS.AES.decrypt(decoded, SECRET_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
  } catch (error) {
    console.error("Decryption Error:", error);
    return null;
  }
};
