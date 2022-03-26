import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDGeJl-a-XrLt_mQTNbAtt36tqzTAeck5g",
    authDomain: "toolbox-3283a.firebaseapp.com",
    projectId: "toolbox-3283a",
    storageBucket: "toolbox-3283a.appspot.com",
    messagingSenderId: "445233524690",
    appId: "1:445233524690:web:62fb3a1dfbc82dc22d220b",
    measurementId: "G-F9YPT54HT7"
};
export default firebase.initializeApp(firebaseConfig)