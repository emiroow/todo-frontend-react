import CryptoJS from "crypto-js";

export const setHashedLocalStorage = (key: string, value?: object) => {
  // Convert the value to a string (if it's an object)
  const stringValue = JSON.stringify(value);

  const hashedValue = CryptoJS.AES.encrypt(
    stringValue,
    import.meta.env.VITE_HASH_SECRET_KEY
  ).toString();

  // Save the hashed value to local storage
  localStorage.setItem(key, hashedValue);
};

export const getHashedLocalStorage = (key: string) => {
  // Get the hashed value from local storage
  const hashedValue = localStorage.getItem(key) as string;

  const bytes = CryptoJS.AES.decrypt(
    hashedValue,
    import.meta.env.VITE_HASH_SECRET_KEY
  );
  const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

  return decryptedData;
};
