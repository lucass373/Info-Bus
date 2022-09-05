import {initializeApp } from 'firebase/app'
import {getDatabase, ref} from 'firebase/database'
import { getAuth } from 'firebase/auth';

const firebaseConfig = {

    apiKey: "AIzaSyB7bsxPqc67-EAsSlBxODMX4p17U_Z0_KQ",
  
    authDomain: "trabalho-ihm-58a26.firebaseapp.com",
  
    databaseURL: "https://trabalho-ihm-58a26-default-rtdb.firebaseio.com",
  
    projectId: "trabalho-ihm-58a26",
  
    storageBucket: "trabalho-ihm-58a26.appspot.com",
  
    messagingSenderId: "452815567736",
  
    appId: "1:452815567736:web:2af7f6cf26fc1e3aa7e68d"
  
  };

  const initFire = initializeApp(firebaseConfig);
  export const db = getDatabase(initFire);
  export const auth = getAuth(initFire)