import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAh2SuOengmFt9HZs6nZflZH_YmQzOZVpM",
  authDomain: "todo-crud-548d8.firebaseapp.com",
  projectId: "todo-crud-548d8",
  storageBucket: "todo-crud-548d8.appspot.com",
  messagingSenderId: "164524158996",
  appId: "1:164524158996:web:71b085265725b193d93701"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };