import AsyncStorage from '@react-native-async-storage/async-storage';
import CryptoJS from 'crypto-js';

const ENCRYPTION_KEY =
  '5f2b79c9e1e34e8f9e8d7b2e7a1d4f3c9a8b7d6c5e4f2b1a7e8d9c0b3f4a5b2c'; // Replace with your encryption key
const STORAGE_KEY = '_token';

// Function to encrypt data
const encryptData = data => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), ENCRYPTION_KEY).toString();
};

// Function to decrypt data
const decryptData = encryptedData => {
  const bytes = CryptoJS.AES.decrypt(encryptedData, ENCRYPTION_KEY);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};

// Function to store token securely
const storeToken = async token => {
  try {
    const encryptedToken = encryptData(token);
    await AsyncStorage.setItem(STORAGE_KEY, encryptedToken);
  } catch (error) {
    console.error('Error storing token:', error);
  }
};

// Function to retrieve token securely
const retrieveToken = async () => {
  try {
    const encryptedToken = await AsyncStorage.getItem(STORAGE_KEY);
    if (encryptedToken) {
      return decryptData(encryptedToken);
    }
    return null;
  } catch (error) {
    console.error('Error retrieving token:', error);
    return null;
  }
};

const removeToken = async () => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Error removing token:', error);
  }
};

export {storeToken, retrieveToken, removeToken};
