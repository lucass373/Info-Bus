import {initializeApp } from 'firebase/app'
import {getDatabase, ref} from 'firebase/database'
import { getAuth } from 'firebase/auth';

const firebaseConfig = {

    //YOUR API KEY
  
  };

  const initFire = initializeApp(firebaseConfig);
  export const db = getDatabase(initFire);
  export const auth = getAuth(initFire)
