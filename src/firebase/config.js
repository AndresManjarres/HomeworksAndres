import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAvQDnjP2VHltXuo5ZpZd07VKlKb0o43OQ",
    authDomain: "test1-b11f3.firebaseapp.com",
    projectId: "test1-b11f3",
    storageBucket: "test1-b11f3.appspot.com",
    messagingSenderId: "427392067433",
    appId: "1:427392067433:web:e9330c227cadf9883ebff8"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);
  const firebaseStorage = getStorage(firebaseApp);


export {auth,firebaseApp,firebaseStorage }