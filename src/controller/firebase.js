// Import the firebase functions
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  query,
  onSnapshot,
  deleteDoc,
  addDoc,
  where,
  getDocs,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "todo-b9741.firebaseapp.com",
  projectId: "todo-b9741",
  storageBucket: "todo-b9741.appspot.com",
  messagingSenderId: "115180644183",
  appId: "1:115180644183:web:2b2c851b18d238dbb44012",
  measurementId: "G-TWSF035RW1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// create function
const addData = (inputData) => {
  const temp = {
    ...inputData,
    timestamp: serverTimestamp(),
  };
  addDoc(collection(db, "todos"), temp);
};

// read function
const getData = (setData) => {
  const q = query(collection(db, "todos"), orderBy("timestamp"));
  onSnapshot(q, (querySnapshot) => {
    let data = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    setData(data);
  });
};

// delete function
const removeData = async (targetId) => {
  const q = query(collection(db, "todos"), where("id", "==", targetId));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach(async (doc) => await deleteDoc(doc.ref));
};

export { addData, getData, removeData };
