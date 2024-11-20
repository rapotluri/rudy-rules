import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

// Test function
export const testFirebaseConnection = async () => {
  try {
    const docRef = await addDoc(collection(db, 'test'), {
      message: 'Hello Firebase!',
      timestamp: new Date()
    });
    console.log('Test document written with ID:', docRef.id);
    return true;
  } catch (error) {
    console.error('Error testing Firebase connection:', error);
    return false;
  }
};

if (process.env.NODE_ENV === 'development') {
  console.log('Firebase initialized with project:', firebaseConfig.projectId);
}

export { db }; 