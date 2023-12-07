import { initializeApp } from '@firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDEPYUJgBRrhgx02-OUElSfzUshaeL3Ycc",
  authDomain: "back-end-agro-safari.firebaseapp.com",
  projectId: "back-end-agro-safari",
  storageBucket: "back-end-agro-safari.appspot.com",
  messagingSenderId: "359374617106",
  appId: "1:359374617106:web:7b4c62e03b2beb8a70f6cb",
  measurementId: "G-J9QW3F6WZ1"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {auth}
