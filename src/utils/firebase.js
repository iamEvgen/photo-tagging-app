import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAsRF_F8uEEz4zRCWQ7sjfl0fZHHAhq1xY',
  authDomain: 'photo-tagging-app-6d779.firebaseapp.com',
  projectId: 'photo-tagging-app-6d779',
  storageBucket: 'photo-tagging-app-6d779.appspot.com',
  messagingSenderId: '547193526183',
  appId: '1:547193526183:web:d5482b6bc288c4f1074882',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function writeResult(name, time, gameId, gameName) {
  const today = new Date();
  try {
    await addDoc(collection(db, 'players'), {
      name,
      time,
      gameId,
      gameName,
      date: `${today.getDay() > 9 ? today.getDay() : `0${today.getDay()}`}-${
        today.getMonth() > 9 ? today.getMonth() : `0${today.getMonth()}`
      }-${today.getFullYear()}`,
    });
  } catch (error) {
    console.error('Error adding document: ', error);
  }
}

async function getPlayers() {
  const results = [];
  const querySnapshot = await getDocs(collection(db, 'players'));
  querySnapshot.forEach((doc) => {
    results.push({
      name: doc.data().name,
      time: doc.data().time,
      gameId: doc.data().gameId,
      gameName: doc.data().gameName,
      date: doc.data().date,
    });
  });
  return results;
}

export { writeResult, getPlayers };
